---
title: MCP and AI integrations
slug: /mcp
hide_table_of_contents: true
---

:::danger

Heads up! Giving AI agents control of your bioreactor is a big risk!

:::

The Pioreactor has the ability to allow authorized AI agents to control your cluster. This is possible because the Pioreactor has an MCP server running on it. The MCP server tells the AI agent what tools are available (running jobs, updating jobs, finding data, etc), and the the Agent uses those tools to help it accomplish their goals.

The MCP server's SSE endpoint url is

  ```
  http://<leader-address>/mcp/
  ```

If running the Agent locally, you may need to use a tool like mcp-proxy to bridge between HTTP and STDIO.

:::tip

This is very new! Let us know if you have any questions, ideas, or issues!

:::