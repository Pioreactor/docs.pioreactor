---
title: Examples of using the API
slug: /examples-api
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Examples

Examples of using the web API endpoints to control a pioreactor called `worker02`, part of a cluster controlled by the leader `leader`, in an experiment `Demo experiment 6`.

<Tabs>
  <TabItem value="bash" label="Bash (curl)" default>

```bash
#!/usr/bin/env bash
set -euo pipefail

LEADER_URL="${LEADER_URL:-http://leader.local}"
UNIT="${UNIT:-worker02}"
EXPERIMENT="${EXPERIMENT:-Demo experiment 6}"

# URL-encode the experiment (space-safe) using curl only.
EXPERIMENT_ENC=$(curl -sS --get --data-urlencode "v=${EXPERIMENT}" "" | sed -e 's/^.*v=//' )

json_post() {
  local path="$1"
  local body="$2"
  curl -sS -X POST -H "Content-Type: application/json" \
    --data "$body" \
    "${LEADER_URL}${path}"
}

# RUN STIRRING
json_post "/api/workers/${UNIT}/jobs/run/job_name/stirring/experiments/${EXPERIMENT_ENC}" \
  '{"options": {"target_rpm": "600"}}'

# UPDATE STIRRING RPM
json_post "/api/workers/${UNIT}/jobs/update/job_name/stirring/experiments/${EXPERIMENT_ENC}" \
  '{"settings": {"target_rpm": "500"}}'

# STOP STIRRING
curl -sS -X POST "${LEADER_URL}/api/workers/${UNIT}/jobs/stop/job_name/stirring/experiments/${EXPERIMENT_ENC}"

# CHANGE LEDS
json_post "/api/workers/${UNIT}/jobs/run/job_name/led_intensity/experiments/${EXPERIMENT_ENC}" \
  '{"options": {"A": 60}}'

# START THERMOSTAT AT 35C
json_post "/api/workers/${UNIT}/jobs/run/job_name/temperature_automation/experiments/${EXPERIMENT_ENC}" \
  '{"options": {"automation_name": "thermostat", "target_temperature": 35}}'

# CHANGE TARGET TEMP TO 32C
json_post "/api/workers/${UNIT}/jobs/update/job_name/temperature_automation/experiments/${EXPERIMENT_ENC}" \
  '{"settings": {"target_temperature": 32}}'

# STOP THERMOSTAT
curl -sS -X POST "${LEADER_URL}/api/workers/${UNIT}/jobs/stop/job_name/temperature_automation/experiments/${EXPERIMENT_ENC}"

# GET RUNNING JOBS (returns task id, then poll /unit_api/task_results/...)
running_jobs_task=$(curl -sS "${LEADER_URL}/api/workers/${UNIT}/jobs/running")
result_url_path=$(echo "$running_jobs_task" | jq -r '.result_url_path')

# POLL TASK RESULT UNTIL COMPLETE
for _ in $(seq 1 60); do
  result=$(curl -sS "${LEADER_URL}${result_url_path}")
  status=$(echo "$result" | jq -r '.status')
  if [ "$status" = "complete" ]; then
    echo "$result"
    break
  elif [ "$status" = "failed" ]; then
    echo "$result" >&2
    break
  fi
  sleep 0.5
 done

# TIP: use UNIT="$broadcast" to target all active workers.
```

  </TabItem>
  <TabItem value="python" label="Python (requests)">

```python
import os
import time
import urllib.parse
import requests

leader_url = os.environ.get("LEADER_URL", "http://leader.local")
unit = os.environ.get("UNIT", "worker02")
experiment = os.environ.get("EXPERIMENT", "Demo experiment 6")
experiment_enc = urllib.parse.quote(experiment, safe="")


def post(path: str, payload: dict | None = None) -> None:
    resp = requests.post(f"{leader_url}{path}", json=payload, timeout=10)
    resp.raise_for_status()


def get(path: str) -> dict:
    resp = requests.get(f"{leader_url}{path}", timeout=10)
    resp.raise_for_status()
    return resp.json()


def poll_task(result_url_path: str, timeout_s: float = 30.0) -> dict:
    deadline = time.time() + timeout_s
    while time.time() < deadline:
        result = get(result_url_path)
        status = result.get("status")
        if status == "complete":
            return result
        if status == "failed":
            raise RuntimeError(result.get("error", "task failed"))
        time.sleep(0.5)
    raise TimeoutError("task polling timed out")


# RUN STIRRING
post(
    f"/api/workers/{unit}/jobs/run/job_name/stirring/experiments/{experiment_enc}",
    {"options": {"target_rpm": "600"}},
)

# UPDATE STIRRING RPM
post(
    f"/api/workers/{unit}/jobs/update/job_name/stirring/experiments/{experiment_enc}",
    {"settings": {"target_rpm": "500"}},
)

# STOP STIRRING
post(
    f"/api/workers/{unit}/jobs/stop/job_name/stirring/experiments/{experiment_enc}",
)

# CHANGE LEDS
post(
    f"/api/workers/{unit}/jobs/run/job_name/led_intensity/experiments/{experiment_enc}",
    {"options": {"A": 60}},
)

# START THERMOSTAT AT 35C
post(
    f"/api/workers/{unit}/jobs/run/job_name/temperature_automation/experiments/{experiment_enc}",
    {"options": {"automation_name": "thermostat", "target_temperature": 35}},
)

# CHANGE TARGET TEMP TO 32C
post(
    f"/api/workers/{unit}/jobs/update/job_name/temperature_automation/experiments/{experiment_enc}",
    {"settings": {"target_temperature": 32}},
)

# STOP THERMOSTAT
post(
    f"/api/workers/{unit}/jobs/stop/job_name/temperature_automation/experiments/{experiment_enc}",
)

# GET RUNNING JOBS (returns task id, then poll /unit_api/task_results/...)
running_jobs_task = get(f"/api/workers/{unit}/jobs/running")
final_result = poll_task(running_jobs_task["result_url_path"])
print(final_result)

# TIP: use UNIT="$broadcast" to target all active workers.
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript (fetch)">

```javascript
const leaderUrl = process.env.LEADER_URL ?? "http://leader.local";
const unit = process.env.UNIT ?? "worker02";
const experiment = process.env.EXPERIMENT ?? "Demo experiment 6";
const experimentEnc = encodeURIComponent(experiment);

async function post(path, payload) {
  const resp = await fetch(`${leaderUrl}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload ?? {}),
  });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
}

async function get(path) {
  const resp = await fetch(`${leaderUrl}${path}`);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  return await resp.json();
}

async function pollTask(resultUrlPath, timeoutMs = 30000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const result = await get(resultUrlPath);
    if (result.status === "complete") return result;
    if (result.status === "failed") throw new Error(result.error ?? "task failed");
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("task polling timed out");
}

// RUN STIRRING
await post(
  `/api/workers/${unit}/jobs/run/job_name/stirring/experiments/${experimentEnc}`,
  { options: { target_rpm: "600" } }
);

// UPDATE STIRRING RPM
await post(
  `/api/workers/${unit}/jobs/update/job_name/stirring/experiments/${experimentEnc}`,
  { settings: { target_rpm: "500" } }
);

// STOP STIRRING
await post(
  `/api/workers/${unit}/jobs/stop/job_name/stirring/experiments/${experimentEnc}`
);

// CHANGE LEDS
await post(
  `/api/workers/${unit}/jobs/run/job_name/led_intensity/experiments/${experimentEnc}`,
  { options: { A: 60 } }
);

// START THERMOSTAT AT 35C
await post(
  `/api/workers/${unit}/jobs/run/job_name/temperature_automation/experiments/${experimentEnc}`,
  { options: { automation_name: "thermostat", target_temperature: 35 } }
);

// CHANGE TARGET TEMP TO 32C
await post(
  `/api/workers/${unit}/jobs/update/job_name/temperature_automation/experiments/${experimentEnc}`,
  { settings: { target_temperature: 32 } }
);

// STOP THERMOSTAT
await post(
  `/api/workers/${unit}/jobs/stop/job_name/temperature_automation/experiments/${experimentEnc}`
);

// GET RUNNING JOBS (returns task id, then poll /unit_api/task_results/...)
const runningJobsTask = await get(`/api/workers/${unit}/jobs/running`);
const finalResult = await pollTask(runningJobsTask.result_url_path);
console.log(finalResult);

// TIP: use UNIT="$broadcast" to target all active workers.
```

  </TabItem>
</Tabs>
