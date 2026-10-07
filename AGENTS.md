# Development notes

- This is a frontend-only app: no database, migrations, authentication, or external credentials are needed.
- The Base44 Compose service runs the bind-mounted checkout, not the production build. Startup runs `npm ci` using the committed lockfile; dependencies live in a named volume.
- Verify with `docker compose -f docker-compose.base44.yml exec -T web npm run build`, then check `/` in the preview and click **Click me**: the counter should increment from zero to one.
- Preview host access uses Vite's platform-supplied `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS`, passed through only by the sandbox Compose file. Shared Vite configuration is unchanged.
