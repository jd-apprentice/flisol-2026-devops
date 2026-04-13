# Ciclo DevOps adaptado a Software Libre 🚀

Este proyecto es una guía educativa diseñada para demostrar cómo implementar un flujo de trabajo **DevOps profesional** utilizando exclusivamente herramientas de **Software Libre**. 

## 💡 La Idea del Proyecto

El proyecto propone un modelo de "Ciclo de Vida de Desarrollo" dividido en dos grandes etapas: el **Flujo Local** (el entorno del desarrollador) y el **Flujo Remoto** (la infraestructura de integración y despliegue).

La premisa es: **"Detectar el error lo más cerca posible del código"**. Si un error puede ser detectado por un linter en el IDE o un hook de pre-commit, no debería llegar nunca al servidor de CI/CD.

---

## 🗺️ Estructura del Flujo de Trabajo

### 1. Flujo Local (The Inner Loop) 💻
Se enfoca en la consistencia y la calidad temprana.
- **Entorno de Desarrollo:** Uso de templates de configuración, extensiones recomendadas y linters para que todo el equipo escriba código bajo el mismo estándar.
- **Hooks de Git:** 
    - `pre-commit`: Formateo automático y pruebas rápidas.
    - `pre-push`: Validaciones de integración y escaneo de seguridad básico para evitar subir dependencias vulnerables.

### 2. Flujo Remoto (The Outer Loop) ☁️
Se enfoca en la seguridad, la gobernanza y la calidad final.
- **Gestión de Pull Requests (PR):** 
    - Bloqueo de `force-push`.
    - Revisiones obligatorias (`Code Review`) mediante `CODEOWNERS`.
    - Uso de plantillas de PR para asegurar que se documente el "qué" y el "por qué".
- **Gates de Calidad (CI Pipeline):**
    - **SAST (Static Analysis Security Testing):** Análisis de código en busca de fallos de seguridad.
    - **SCA (Software Composition Analysis):** Análisis de dependencias vulnerables.
    - **Secret Scanning:** Detección de claves o tokens expuestos accidentalmente.
    - **Linters & Tests:** Ejecución de la suite completa de pruebas (Unit, Integration, E2E).

---

## 🛠️ Matriz de Herramientas Recomendadas

El proyecto sugiere el uso de las siguientes herramientas de software libre:

| Etapa | Herramienta | Propósito |
| :--- | :--- | :--- |
| **Local** | `pre-commit` | Orquestador de hooks agnóstico al lenguaje. |
| **Local** | `Husky` | Hooks de Git específicos para ecosistema JS. |
| **Local** | `ESLint`, `Biome`, `Clippy` | Linters para consistencia de código. |
| **Remoto** | `Semgrep` | Análisis SAST, SCA y detección de secretos. |
| **Remoto** | `Trivy` | Escaneo de vulnerabilidades en imágenes y FS. |
| **Remoto** | `Trufflehog` | Especialista en búsqueda de secretos. |
| **Remoto** | `Bearer` | Análisis SAST avanzado. |

---

## 📂 Estructura del Repositorio

Para fines educativos, el repositorio está organizado de la siguiente manera:

```text
.
├── .github/                # Configuración de flujos remotos (CI/CD)
│   └── workflows/          # Pipelines de GitHub Actions con SAST, SCA y Tests
├── .hooks/                 # Configuraciones de ejemplo para hooks locales
├── docs/                   # Documentación técnica y material de apoyo (PDFs)
├── templates/              # Plantillas para Pull Requests e Issues
├── src/                    # Código de ejemplo para aplicar las herramientas
└── .pre-commit-config.yaml # Configuración global de pre-commit
```

## 🎓 Cómo utilizar este proyecto para aprender

1. **Explora la carpeta `docs/`**: Lee el material teórico sobre el ciclo DevOps.
2. **Configura el entorno local**: Instala `pre-commit` y observa cómo el código se rechaza si no cumple los estándares.
3. **Sube un cambio**: Crea una rama, haz un commit y abre un Pull Request para ver cómo actúan los scanners remotos en la pestaña de "Actions".
4. **Analiza los reportes**: Revisa los resultados de `Semgrep` o `Trivy` y trata de corregir las vulnerabilidades encontradas.
