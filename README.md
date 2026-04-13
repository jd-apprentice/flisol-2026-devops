# FLISoL 2026 CLI

Herramienta CLI desarrollada con **Bun** para el FLISoL 2026. Este proyecto demuestra un flujo de trabajo DevOps profesional utilizando herramientas de Software Libre.

## ℹ️ Sobre el Proyecto

Este proyecto sirve como ejemplo práctico de cómo implementar un ciclo DevOps completo en un proyecto TypeScript/Bun. El código en sí es una CLI simple, pero el verdadero valor está en la infraestructura DevOps que la acompaña.

## 📦 Instalación

```bash
bun install
bun run build
```

## 💻 Uso

```bash
bun run dev
bun run build

# Ejecutar la CLI (después de compilar)
./dist/flisol greet [nombre]
./dist/flisol farewell [nombre]
./dist/flisol calculate <a> <b> [operación]
./dist/flisol version
```

### Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `greet [nombre]` | Saluda a alguien (default: Mundo) |
| `farewell [nombre]` | Se despide de alguien |
| `calculate <a> <b> [op]` | Calcula operaciones básicas |
| `version` | Muestra la versión |

### Operaciones para `calculate`

- `add` (default)
- `subtract`
- `multiply`
- `divide`

## 🧪 Commands de Desarrollo

```bash
bun run dev        
bun run build      
bun run test       
bun run lint       
bun run lint:fix   
bun audit --audit-level=high
```

## 🛠️ Pipeline DevOps

### Git Hooks (Husky)

- **pre-commit**: `bun audit` → `bun run lint` → `bun run build`
- **pre-push**: `bun run test`

### CI/CD (GitHub Actions)

El pipeline se ejecuta en orden:
1. **Security** - Auditoría de dependencias y análisis SAST
2. **Quality** - Linting y verificación de tipos
3. **Build** - Compilación y release
4. **Release** - Publicación de artefactos
5. **Observability** - Métricas y monitoreo

## 📂 Estructura del Proyecto

```
.
├── .github/workflows/   
├── .husky/              
├── src/                 
│   ├── index.ts         
│   └── cli.test.ts      
├── dist/                
├── biome.json           
├── tsconfig.json       
└── Dockerfile           
```

## 🎓 Aprende DevOps con Este Proyecto

Este repo demuestra:

1. **Calidad local**: Hooks que detectan errores antes de commitear
2. **Seguridad**: Auditorías y análisis automático
3. **CI/CD**: Pipeline completo con gates de calidad
4. **TypeScript moderno**: Tipado estrictocon Bun
5. **Software Libre**: Solo herramientas open-source

## 📝 Licencia

MIT
