# AGENTS.md - flisol-2026

## Project Type
Educational DevOps showcase with a Bun CLI tool.

## Runtime & Package Manager
- **Runtime**: Bun (not Node.js)
- **All commands use `bun`**, not `npm`/`yarn`/`pnpm`

## Commands
```bash
bun run dev        
bun run build      
bun run test       
bun run lint       
bun run lint:fix   
bun audit --audit-level=high
```

## Git Hooks (Husky)
- **pre-commit**: Runs in order → `bun audit` → `bun run lint` → `bun run build`
- **pre-push**: Runs `bun run test`

## CI Pipeline
- **Bun version**: 1.3.12
- **Job order**: security → quality → build → release → observability
- **Workflows**: Composed (`ci.yml` delegates to `_*.yml` files)
- **Triggers**: push to master/develop, tags v*, PRs to master

## Code Structure
- Entry: `src/index.ts`
- Tests: `src/cli.test.ts`
- Config: `biome.json`, `tsconfig.json`

## Linter
Biome. Config in `biome.json`.
