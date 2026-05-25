# 🌌 Orbitarium

Micrositio desarrollado con Angular 21 que consume la API pública de Star Wars usando arquitectura moderna, SSR, Signals y optimización Lighthouse 90+.

## 🚀 Tecnologías

* Angular 21
* Standalone Components
* Signals
* SSR + Hydration
* RxJS
* TailwindCSS
* TypeScript

API utilizada:

https://swapi.py4e.com/documentation

---

# 📂 Arquitectura

El proyecto implementa una arquitectura:

* Feature Based
* Clean Architecture ligera
* Escalable y mantenible

```bash
src/app
├── core
├── shared
├── layout
├── features
```

## Features

Cada feature está desacoplada:

```bash
features/
└── characters
    ├── data
    ├── state
    ├── ui
    └── characters.routes.ts
```

---

# ✨ Funcionalidades

## 👥 Personajes

Ruta:

```bash
/personajes
```

Características:

* Consumo paginado de `/people`
* Ordenamiento:

  * nombre
  * peso
  * altura
* Query params
* Loading / Error / Empty states
* Navegación a detalle

Ejemplo:

```bash
/personajes?ordenar=peso
```

---

## 🧬 Detalle de personaje

Ruta:

```bash
/personajes/:id
```

Características:

* Consumo de `/people/:id`
* SEO dinámico
* Render optimizado
* Accesibilidad

---

## 🌍 Planetas

Ruta:

```bash
/planetas
```

Características:

* Consumo de `/planets`
* Agrupación de residentes por planeta

---

# ⚡ Performance

El proyecto está optimizado para Lighthouse 90+ usando:

* SSR
* Lazy Loading
* Code Splitting
* Hydration
* Signals
* Cache HTTP
* Deferred Loading

---

# 🔍 SEO

Cada ruta implementa:

* Dynamic Title
* Meta Description
* Canonical URL
* Semantic HTML

---

# 🛠️ Instalación

## Clonar repositorio

```bash
git clone <repo-url>
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar proyecto

```bash
npm run start
```

## Ejecutar SSR

```bash
npm run serve:ssr
```

---

# 📊 Lighthouse

Objetivo:

* Performance: 95+
* Accessibility: 95+
* Best Practices: 95+
* SEO: 100

---

# 👨‍💻 Autor

Samuel Rodriguez 🚀
