# Performance

Minecraft server performance depends on hardware, player count, world activity, view distance, simulation distance, plugins, mods, and entity counts.

## First checks

- Watch the server console for repeated warnings.
- Review `latest.log` after lag spikes or crashes.
- Keep regular backups before changing settings.
- Test changes one at a time.

## Common tuning areas

| Area | Why it matters |
| --- | --- |
| View distance | Controls how many chunks are sent to players |
| Simulation distance | Controls how many chunks process game logic |
| Entity counts | Too many mobs, items, or villagers can cause lag |
| Plugins and mods | Poorly configured or outdated extensions can affect tick time |
| Storage speed | Slow disks can affect world saving and chunk loading |
