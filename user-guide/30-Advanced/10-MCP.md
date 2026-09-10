---
title: MCP and AI integrations
slug: /mcp
hide_table_of_contents: true
sidebar_class_name: sidebar-item--updated
---

:::danger

Heads up! Giving AI agents control of your bioreactor is a big risk!

:::

The Pioreactor has the ability to allow authorized AI agents to control your cluster. This is possible because the Pioreactor has an MCP server running on it. The MCP server tells the AI agent what tools are available (running jobs, updating jobs, finding data, etc), and the agent uses those tools to help it accomplish their goals.

The MCP server's HTTP endpoint is

  ```
  http://<leader-address>/mcp/
  ```

If running the Agent locally, you may need to use a tool like mcp-proxy to bridge between HTTP and STDIO.

:::tip

This is very new! Let us know if you have any questions, ideas, or issues!

:::

## Updating integrations for 26.9.0

After upgrading from 26.8.x, refresh your client's MCP tool list and update any stored tool calls or scripts for these changes:

| Previous behavior | 26.9.0 behavior |
| --- | --- |
| `get_pioreactor_unit_capabilties` | Renamed to `get_pioreactor_unit_capabilities`. |
| `assign_workers_to_experiment` | Renamed to `assign_worker_to_experiment`; takes one `pioreactor_unit` and an `experiment`. |
| Job-launch `options` supplied as a JSON-encoded string | Supply a JSON object with scalar values. Use CLI option names without leading dashes, such as `{"target-rpm": 500}`; use `null` for a flag without a value. |
| Stopping jobs without a target | `stop_job_on_pioreactor_unit` requires an explicit `pioreactor_unit`. Use `"$broadcast"` to target all workers assigned to the experiment. |
| List responses wrapped in `{"result": ...}` | The extra wrapper is removed; consume the returned list directly. |
| Unavailable workers represented by `[]` in capability results | Unavailable workers are represented by `null`. |
| `db_query_db` returning an unrestricted list of rows | Only a single read-only `SELECT` (including `WITH` queries) is accepted; the result contains `rows`, `row_count`, and `truncated`. |

### Discovering and controlling jobs

Use `get_pioreactor_unit_capabilities` to discover the available jobs, command-line arguments and options, and published settings before launching or changing a job. The default response includes invocation details; set `condensed=true` for a shorter summary. Read-only tools are marked with MCP read-only annotations to help clients distinguish inspection from changes.

For example, the arguments to `run_job_or_action_on_pioreactor_unit` to start stirring on one worker are:

```json
{
  "pioreactor_unit": "pio01",
  "job_or_action": "stirring",
  "experiment": "my experiment",
  "options": {"target-rpm": 500}
}
```

Task-result polling is bounded. If a call reports that an operation is still pending, it may still complete. Check the task result URL or running jobs before trying again; resubmitting a launch or action can run it twice.

### Querying data

Discover tables with `db_get_tables` and columns with `db_get_table_schema`. Supply values using `?` placeholders and the `parameters` list. For example, pass these arguments to `db_query_db`:

```json
{
  "query": "SELECT experiment, tag, created_at FROM experiment_tags WHERE experiment = ? ORDER BY created_at",
  "parameters": ["my experiment"],
  "limit": 100
}
```

The result has this shape:

```json
{
  "rows": [
    {"experiment": "my experiment", "tag": "media:LB", "created_at": "2026-09-09T12:00:00Z"}
  ],
  "row_count": 1,
  "truncated": false
}
```

`limit` defaults to `100` and must be between `1` and `1000`. `row_count` counts returned rows, not all matches. If `truncated` is `true`, use SQL aggregation, explicit pagination, or a [dataset export](/user-guide/export-data) to work with more data. Database writes and statements such as `PRAGMA` or `ATTACH` are not supported.

`get_recent_experiment_logs` defaults to `50` lines; `lines` must be between `1` and `1000`.
