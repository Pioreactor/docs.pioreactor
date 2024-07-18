---
title: Examples of using the API
slug: /examples-api
---


### Examples

Examples of using the web API endpoints using curl:

This controls a pioreactor called `worker02`, part of a cluster controlled by the leader `leader`, in an experiment `Demo experiment 6`.

```bash
# RUN STIRRING
curl -H "Content-Type: application/json" \
     --data '{"options": {"target_rpm": "600"}}' \
     -X PATCH "http://leader.local/api/workers/worker02/experiments/Demo%20experiment%206/jobs/stirring/run"

# UPDATE STIRRING RPM
curl -H "Content-Type: application/json" \
     --data '{"settings": {"target_rpm": "500"}}' \
     -X PATCH "http://leader.local/api/workers/worker02/experiments/Demo%20experiment%206/jobs/stirring/update"

# STOP STIRRING
curl -X PATCH "http://leader.local/api/workers/worker02/experiments/Demo%20experiment%206/jobs/stirring/stop"

# CHANGE LEDS
curl -H "Content-Type: application/json" \
     --data '{"options": {"A": 60}}' \
     -X PATCH "http://leader.local/api/workers/worker02/experiments/Demo%20experiment%206/jobs/led_intensity/run"

# START THERMOSTAT AT 35C
curl -H "Content-Type: application/json" \
     --data '{"options": {"automation_name": "thermostat", "target_temperature": 35}}' \
     -X PATCH "http://leader.local/api/workers/worker02/experiments/Demo%20experiment%206/jobs/temperature_automation/run"

# CHANGE TARGET TEMP TO 32C
curl -H "Content-Type: application/json" \
     --data '{"settings": {"target_temperature": 32}}' \
     -X PATCH "http://leader.local/api/workers/worker02/experiments/Demo%20experiment%206/jobs/temperature_automation/update"

# STOP THERMOSTAT
curl -X PATCH "http://leader.local/api/workers/worker02/experiments/Demo%20experiment%206/jobs/temperature_automation/stop"

```

