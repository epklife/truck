# Blue Maverick Delivery — Base44 Dev Environment

## What this is
A single-page static marketing site (`index.html` + a few JPEG images) for "Blue Maverick Delivery", a Bay Area truck/pickup service. No backend, no build step, no package manager, no framework.

## How it runs here
Served by `nginx:alpine` via `docker-compose.base44.yml`. The repo is bind-mounted read-only into the container at `/usr/share/nginx/html`, so edits to `index.html` or images are reflected on the next request with no rebuild or reload needed.

- Web entry point: host port **3000** → container 80.
- Health check: `GET /` returns the page.
- No secrets, no databases, no external services.

## Verify it works
```bash
docker compose -f docker-compose.base44.yml up -d --build
curl -sf -H "Host: external-preview.example.com" http://localhost:3000/ | head
```
The page should contain `<title>Blue Maverick Delivery`.

## Making changes
Edit `index.html` directly. Because nginx serves from the bind mount, changes are live immediately — call `reload_preview` only if the iframe appears stale.
