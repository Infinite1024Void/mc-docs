---
layout: default
title: Setup
parent: Server
nav_order: 1
permalink: /server/setup/
---

# Server Setup

This guide covers the basic server setup flow.

## 1. Choose server software

| Server type | Best for |
| --- | --- |
| Vanilla | Official gameplay with no server modifications |
| Paper | Performance, plugins, and admin tooling |
| Fabric | Server-side mods and lightweight modded setups |
| Forge | Large modpacks and Forge-based modded servers |

## 2. Prepare Java

Install the Java version required by your Minecraft server version. Newer Minecraft versions typically require newer Java releases.

## 3. Create a server folder

Keep each server in its own folder so configuration, worlds, logs, plugins, and mods stay organized.

## 4. Accept the EULA

After the first server launch, review Mojang's EULA and set `eula=true` in `eula.txt` if you accept it.

## 5. Start the server

Run the server from its folder, then review the console output and logs for warnings or errors.
