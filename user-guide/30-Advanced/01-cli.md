---
title: Command line interface
slug: /cli
hide_table_of_contents: true
---

For those interested, you can use the command line to interact with the Pioreactors. This is called the command line interface (CLI). Log onto either the [leader or worker](/user-guide/create-cluster) and you can execute the following commands. Full options and up-to-date documentation are available with `pio <command> --help`.

# Pioreactor CLI Reference

This document summarizes the two Pioreactor command-line tools—`pio` for the local/leader node and `pios` for orchestrating worker nodes—from the perspective of day-to-day operations.

## Why There Are Two CLIs

| Command | Scope | Typical Use Cases |
| --- | --- | --- |
| `pio` | Runs on a single Pioreactor (leader or standalone). | Start/stop jobs, inspect logs, manage experiments, calibrations, plugins, and the local database. |
| `pios` | Leader-only tool that issues actions to worker Pioreactors over the network. | Run or kill jobs cluster-wide, reboot/shutdown workers, sync configs, copy files, and update software on multiple units at once. |

## `pio`: Local Pioreactor CLI

```
pio [OPTIONS] COMMAND [ARGS]...
```

### Core Operational Commands

| Command | Purpose | Highlights |
| --- | --- | --- |
| `run` | Start a specific job/process. | Supports `--config-override`, `-d/--detach`. Includes jobs such as `stirring`, `od_reading`, `dosing_automation`, `experiment_profile`, `monitor`, etc. |
| `update-settings JOB [--flag value ...]` | Modify runtime parameters of a job without restarting it. | Use long-form flags (e.g. `--target-rpm 500`). |
| `kill` | Stop running jobs. | Filter by `--job-name`, `--experiment`, `--job-source`, or `--job-id`; `--all-jobs` stops everything on the unit. |
| `jobs` | Inspect and clean up job records. | `jobs list running` (show running), `jobs list` (history), `jobs info --job-id/--job-name` (details + published settings), `jobs purge --job-id/--job-name` (delete records). |
| `logs` / `log` | Inspect or emit log entries. | `logs` tails (`-n`, `-f`); `log` sends a message with `-m/--message`, optional severity (`-l`). |
| `mqtt` | Subscribe to MQTT topics for debugging. | Use `-t/--topic` to limit the feed. |
| `blink` | Blink the unit’s LED (requires `monitor` job). | Handy for physical identification. |
| `db` | Open the SQLite database shell. | Good for ad-hoc queries; exit with `.quit`. |
| `config` | Show and edit the configuration applied to this Pioreactor |  |

### Experiment & Cluster Management

| Command | Subcommands | Notes |
| --- | --- | --- |
| `experiments` | `create`, `delete`, `list` | Leader-only; maintain experiment records. |
| `workers` | `add`, `assign`, `discover`, `remove`, `status`, `unassign`, `update-active`, `update-model` | Manage worker inventory and metadata. |
| `cache` | `view`, `purge` | Inspect or purge per-job caches. |

### Calibration & Plugins

| Command | Subcommands | Notes |
| --- | --- | --- |
| `calibrations` | `analyze`, `delete`, `display`, `list`, `protocols`, `run`, `set-active`| Provides end-to-end calibration lifecycle tooling. |
| `estimators` | `analyze`, `delete`, `list`, `protocols`,  `set-active`| Provides end-to-end estimators lifecycle tooling. |
| `plugins` | `install`, `list`, `uninstall` | Manage Python plugin packages on the current unit. |

### Software Maintenance

| Command | Purpose | Key Options |
| --- | --- | --- |
| `update x` | Update the Pioreactor app (`update app`) or RP2040 firmware (`update firmware`). | `-s/--source` accepts URLs, wheel files, or `release-***.zip`; `-b/--branch` targets a git branch, `--sha` targets a git SHA |
| `version` | Print current software version. | — |
| `status` | Print current network, software, and filesystem statuses. | — |
| `repair` | Perform permissions corrections, and other repairs. | — |
| `usb` | Perform operations on an attached USB device. | — |

### Usage Examples

```bash
# Start stirring locally in detached mode at 600 RPM
pio run stirring --target-rpm 600

# Temporarily override the PWM frequency for the stirring job
pio run --config-override stirring.config pwm_hz 100 stirring

# Update target RPM on the fly
pio update-settings stirring --target-rpm 500

# Inspect a job record, including published settings
pio jobs info --job-name stirring

# List experiments from the leader
pio experiments list
```

## `pios`: Cluster-Oriented CLI

```
pios [OPTIONS] COMMAND [ARGS]...
```

- Runs **only on the leader** to dispatch commands to worker Pioreactors.
- Shared target selectors on most commands:
  - `--units <name>` (repeatable) to address specific workers; default targets all.
  - `--experiments <name>` to target workers assigned to particular experiments.
  - `-y/--yes` to skip confirmation prompts (use with care).
  - `--json` to emit machine-readable output (supported on `run`, `kill`, `update`).

### Job Lifecycle at Scale

| Command | Purpose | Notes |
| --- | --- | --- |
| `run JOB [options]` | Launch a job on one or more workers. | Pass job-specific flags after the job name, e.g. `pios run stirring --target-rpm 400 --units worker1`. |
| `kill` | Stop jobs on workers. | Accepts same filters as `pio kill` plus cluster selectors; `--all-jobs` kills every worker job. |
| `update-settings JOB ...` | Adjust parameters on already-running worker jobs. | Use alongside `--units`/`--experiments`. |
| `jobs list` | List all jobs in the cluster | Use alongside `--units`/`--experiments`. |
| `jobs list running` | List all _running_ jobs in the cluster | Use alongside `--units`/`--experiments`. |

### System Administration

| Command | Purpose | Notes |
| --- | --- | --- |
| `reboot`, `shutdown` | Power-cycle workers. | The leader is only included when explicitly listed via `--units`. |
| `sync-configs` | Sync shared and/or specific `config.ini` files with workers. | Use `--shared`, `--specific`, `--skip-save` to control behavior. |
| `update app` | Update the Pioreactor software on workers. | Accepts `-s/--source` (existing release zip on workers) and `-b/--branch`. |
| `plugins install|uninstall` | Manage plugins across workers. | Keeps worker environments aligned with the leader. |
| `cp FILEPATH <TARGET>`, `rm FILEPATH` | Copy or remove files on workers. | Useful for distributing scripts, configs, or clearing artifacts. |

### Examples

```bash
# Start OD readings on all workers attached to experiment `batch-42`
pios run od_reading --experiments batch-42

# Kill every worker job (excluding leader-only jobs) without prompting
pios kill --all-jobs -y

# Update stirring target RPM on a subset of units
pios update-settings stirring --units worker1 --units worker3 --target-rpm 550

# Sync both shared and per-unit configs to the cluster
pios sync-configs
```

## Choosing the Right Command

- Use `pio` whenever the action concerns **only the local node** (leader or standalone) or when you are experimenting on a single Pioreactor.
- Use `pios` when coordinating **multiple workers** from the leader; most commands inherit the same job names and options as their `pio` counterparts but add multi-unit targeting controls.
- `pio run ...` is ideal for rapid testing before scaling the same job via `pios run ...`.
- To keep configurations consistent, run `pio`-level updates and then propagate them with `pios sync-configs` or `pios update app`.

Refer to `pio --help` and `pios --help` for the authoritative, up-to-date command lists before running them on production hardware.
