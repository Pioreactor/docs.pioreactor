---
title: More about SQLite3 on the Pioreactor
slug: /sqlite3
hide_table_of_contents: true
---


### How do I access the SQlite3 database?

Run`pio db` on the leader to open up the database shell. You can quit with `.q`.



### Where is a list of tables on the database?

You can either use `.tables` in the sqlite shell, or visit all the tables [schemas here](https://github.com/Pioreactor/CustoPiZer/blob/pioreactor/workspace/scripts/files/sql/create_tables.sql).


### How can I add new SQL tables?

Using the sqlite shell (`pio db`), you can execute any SQL statements, including creating new tables. Plugins can also automatically create new tables when installed, [see instructions here](developer-guide/plugin-as-python-package#5-optional-adding-tables-to-the-sql-store).

### How do I populate my own SQL tables?

The Pioreactor job `mqtt_to_db_streaming` handles how to get data into the sqlite3 database. This job listens to specific topics in MQTT, and writes it to the database. We've implemented hooks into `mqtt_to_db_streaming` job for you to added your own topics. In your code:

 1. a parser, usually called `parser`, function that accepts a MQTT topic and payload, and returns a dictionary that maps to the tables schema.
 2. a `TopicToParserToTable` object is created with the MQTT topics to listen to, the parser, and the table name to load to. This `TopicToParserToTable` is provided to `register_source_to_sink`.

 Example below for a CO2 sensor:

```python
...
from pioreactor.background_jobs.leader.mqtt_to_db_streaming import produce_metadata
from pioreactor.background_jobs.leader.mqtt_to_db_streaming import register_source_to_sink
from pioreactor.background_jobs.leader.mqtt_to_db_streaming import TopicToParserToTable
from pioreactor.utils import timing

...

def parser(topic, payload) -> dict:
    metadata = produce_metadata(topic)
    return {
        "experiment": metadata.experiment,
        "pioreactor_unit": metadata.pioreactor_unit,
        "timestamp": timing.current_utc_timestamp(),
        "co2_reading_ppm": float(payload),
    }


register_source_to_sink(
    TopicToParserToTable(
        ["pioreactor/+/+/scd_reading/co2", "pioreactor/+/+/co2_reading/co2"],
        parser,
        "co2_readings",
    )
)

```

You can place this into the `~/.pioreactor/plugins` folder. The next time `mqtt_to_db_streaming` starts, it will starts listening to the specific topics.
