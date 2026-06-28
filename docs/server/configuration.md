---
layout: default
title: Configuration
parent: Server
nav_order: 2
permalink: /server/configuration/
---

# Server Configuration

Most server behavior is controlled through configuration files in the server folder.

## Important files

| File | Purpose |
| --- | --- |
| `server.properties` | Core Minecraft server settings |
| `ops.json` | Server operators |
| `whitelist.json` | Allowed players when whitelist is enabled |
| `banned-players.json` | Banned player list |
| `banned-ips.json` | Banned IP list |

## Common settings

| Setting | Description |
| --- | --- |
| `motd` | Message shown in the multiplayer server list |
| `difficulty` | World difficulty |
| `gamemode` | Default game mode |
| `max-players` | Maximum simultaneous players |
| `view-distance` | Chunks sent to players |
| `simulation-distance` | Chunks that run game logic |
| `white-list` | Whether only whitelisted players can join |
