## Packages and setup

### Core packages

- **next / react / react-dom**: App Router, server components, and the UI runtime.
- **better-auth**: Auth engine providing Google OAuth + session management.
- **better-auth/next-js**: Next.js adapter wrapping the auth instance into a route handler.
- **@t3-oss/env-core** + **zod**: Typed, validated environment schema in `env.ts`.
- **effect** (planned): Effect system for turning the mocked `lib/effect/*` services into real effectful programs.

### Install and run

```bash
pnpm install
pnpm dev
```

The workspace is available at `http://localhost:3000`.


