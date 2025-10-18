---
title: Introduction
slug: /data-stores-intro
hide_table_of_contents: true
---

The Pioreactor has a few different ways to store data (depending on the requirements). They are:

## SQLite3

The most important datastore is the SQLite3 database on the _leader_, located at `/home/pioreactor/.pioreactor/storage/`. This database stores historical data, jobs changes, logs, experiments, etc. The background job `mqtt_to_db_streaming` picks up data from MQTT (like OD readings), and puts them into the database.

The CLI command `pio db` will open up the SQLite terminal to query the database directly.

#### Backups of the database

The Pioreactor software will automatically backup the SQLite database via a scheduale `cron` job. The backup is hosted locally on the Raspberry Pi, however if there if the cluster has active worker Pioreactors, the database backup is duplicated to (at most) two workers as well. This level of redundancy means that if the leader's microSD card fails, the database can be recovered from backups stored off the card.

## Local key-value datastore

SQLite3 is also used by the library *diskcache*. This is essentially a fast key-value store on the Raspberry Pi. For Pioreactor, we use it to store "machine-specific" data, like calibration curves, locks on GPIOs, state of LEDs, jobs running, etc. Instead of one large file containing all these keys, we have split them into multiple locations based on category and level of persistence. The persistent databases are stored in `/home/pioreactor/.pioreactor/storage` and the temporary databases are in `/tmp`. You can access them from Python using `pioreactor.utils.local_persistent_storage` and `pioreactor.utils.local_intermittent_storage`, respectively.

:::info
What are temporary and persistent? Something like GPIO locks or LED state are physically reset between cycles of the Raspberry Pi. So when the Pi power-cycles, the state is wiped, and by have the database in `/tmp`, the databases are wiped as well.
:::

You can use `pio view-cache <name>` to view the contents of `<name>`, and `pio clear-cache <name> <key>` to clear contents.


## MQTT

The inter- and intra-Pioreactor communications are handled by MQTT, a pub/sub service. The MQTT broker is on the leader Pioreactor (`pio mqtt` will stream the latest messages to your terminal). MQTT is used to transfer data between workers and leader, and even between process on the workers (ex: OD readings are created on worker, send to leader, and then sent back to worker's growth_rate_calculating job. This does create minor latency, and certainly more risk of data loss, but simplifies the design of the system overall).

A principle we have stood by is to not let MQTT turn into our database. That is,

1. we shouldn't store important information in MQTT _only_ (also use `mqtt_to_db_streaming` job to store important data in the SQLite3 database, or handle it locally using `local_intermitant_storage` or `local_persistance_storage`),
2. we shouldn't store information in MQTT that is "machine-specific", like calibrations (better to use  `local_intermitant_storage` or `local_persistance_storage`)
3. we shouldn't use MQTT as a source of truth (trust the database, `local_intermitant_storage` or `local_persistance_storage` more).


#### Serialization of MQTT messages

We make a configuration change so MQTT data is not persisted through leader power-cycles.

#### Authentication

The Mosquitto broker has a username/password of `pioreactor` / `raspberry`.



