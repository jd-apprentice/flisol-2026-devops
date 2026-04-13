# AGENTS.md - flisol-2026

## Project Type
Educational DevOps showcase with a Bun CLI tool.

## Runtime & Package Manager
- **Runtime**: Bun (not Node.js)
- **Package manager**: Bun (bun install, bun add, etc.)

## Commands

| Command | What it does |
|---|---|
| `bun run dev` | Run CLI tool directly (`src/index.ts`) |
| `bun run build` | Compile to binary (`dist/flisol`) |
| `bun run test` | Run unit tests |
| `bun run lint` | Biome check |
| `bun run lint:fix` | Biome check --write |
| `bun audit --audit-level=high` | Security audit (not in scripts, run directly) |

## CLI Interface

Entry: `src/index.ts`. Supports these commands:

```
flisol greet [name]       → greet someone
flisol farewell [name]  → say goodbye  
flisol calculate <a> <b> [op] → math (add|subtract|multiply|divide)
flisol version         → show version
```

## Git Hooks (Husky)

- **pre-commit**: `bun audit --audit-level=high` → `bun run lint` → `bun run build`
- **pre-push**: `bun run test`
- After `bun install`, run `bun run prepare` to activate hooks

## CI Pipeline

- **Bun version**: 1.3.12
- **Job order**: security → quality → build → release → observability
- **Triggers**: push to master/develop, tags v*, PRs to master

### Security Tools (in `.github/workflows/_security.yml`)

- **Semgrep**: SAST code scanning
- **Trivy**: Vulnerability & secret scanning
- **TruffleHog**: Git secret detection

## TypeScript Strictness

The project uses strict settings in `tsconfig.json`:
- `noUncheckedIndexedAccess` - array accesses are typed
- `noUncheckedSideEffectImports` - side effects must be explicit

## Linter

Biome (`biome.json`). Applies to `src/**/*.ts` only.