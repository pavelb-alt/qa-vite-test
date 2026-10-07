# QA Test App

Run locally with `npm ci && npm run dev`.

## Base44 development preview

```sh
docker compose -f docker-compose.base44.yml up -d --build
```

Open port 3000. No credentials or other services are required. The source is bind-mounted into a Node container running Vite with live reload; startup installs dependencies from `package-lock.json` into a named volume. The web service has an HTTP healthcheck and restarts on failure.

The sandbox Compose file binds Vite to `0.0.0.0:3000` and passes the platform-provided `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` to extend Vite's host allowlist. With that variable unset, Vite retains its default host checks. No shared configuration overrides or `BASE44_PREVIEW_MODE` code changes are needed.

Verify:

```sh
docker compose -f docker-compose.base44.yml ps
docker compose -f docker-compose.base44.yml exec -T web npm run build
```

In the preview, click **Click me** and confirm the counter increments. The preview serves live source even after running the build command.

Stop the preview with `docker compose -f docker-compose.base44.yml down`.
