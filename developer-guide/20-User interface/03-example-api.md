---
title: Examples of using the API
slug: /examples-api
hide_table_of_contents: true
---


### Examples

Examples of using the web API endpoints using curl:

This controls a pioreactor called `worker02`, part of a cluster controlled by the leader `leader`, in an experiment `Demo experiment 6`.

```bash
# RUN STIRRING
curl -H "Content-Type: application/json" \
     --data '{"options": {"target_rpm": "600"}}' \
     -X PATCH "http://leader.local/api/workers/worker02/jobs/run/job_name/stirring/experiments/Demo%20experiment%206"

# UPDATE STIRRING RPM
curl -H "Content-Type: application/json" \
     --data '{"settings": {"target_rpm": "500"}}' \
     -X PATCH "http://leader.local/api/workers/worker02/jobs/update/job_name/stirring/experiments/Demo%20experiment%206"

# STOP STIRRING
curl -X PATCH "http://leader.local/api/workers/worker02/jobs/stop/job_name/stirring/experiments/Demo%20experiment%206"

# CHANGE LEDS
curl -H "Content-Type: application/json" \
     --data '{"options": {"A": 60}}' \
     -X PATCH "http://leader.local/api/workers/worker02/jobs/run/job_name/led_intensity/experiments/Demo%20experiment%206"

# START THERMOSTAT AT 35C
curl -H "Content-Type: application/json" \
     --data '{"options": {"automation_name": "thermostat", "target_temperature": 35}}' \
     -X PATCH "http://leader.local/api/workers/worker02/jobs/run/job_name/temperature_automation/experiments/Demo%20experiment%206"

# CHANGE TARGET TEMP TO 32C
curl -H "Content-Type: application/json" \
     --data '{"settings": {"target_temperature": 32}}' \
     -X PATCH "http://leader.local/api/workers/worker02/jobs/update/job_name/temperature_automation/experiments/Demo%20experiment%206"

# STOP THERMOSTAT
curl -X PATCH "http://leader.local/api/workers/worker02/jobs/stop/job_name/temperature_automation/experiments/Demo%20experiment%206"

```

