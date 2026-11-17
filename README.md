# Bonche Bus - Sitio Web Oficial

[![Product](https://img.shields.io/badge/product-Sitio%20web%20de%20cliente-blue?style=flat-square)](https://jeturing.com)
[![Stack](https://img.shields.io/badge/stack-React%20%C2%B7%20TypeScript%20%C2%B7%20Vite-336791?style=flat-square)](https://jeturing.com)
[![License](https://img.shields.io/badge/license-Proprietary-orange?style=flat-square)](https://jeturing.com)

> 📍 **Disciplina de estado** — cada capacidad de este README lleva su estado: **Construido** (en `main`, con pruebas o evidencia) · **En desarrollo** (en una rama) · **Diseñado** (especificado, sin construir) · **Concepto** (idea registrada). Los estados nunca se mezclan.

| De un vistazo | |
|---|---|
| **Forma** | Sitio web promocional de cliente (estático tras compilar) |
| **Estado** | Código en `main`; origen del diseño: paquete generado desde Figma Make |
| **Despliegue** | Compilado `dist/` publicado en hosting estático (ver «Publicar en SiteGround») |
| **Documentación** | Índice maestro en [`docs/README.md`](docs/README.md) |

Sitio web oficial de Bonche Bus, el mejor servicio de party bus en Santo Domingo, República Dominicana.

## 🌐 Posición en el ecosistema

Sitio web de **Bonche Bus**, un cliente de **Jeturing** (división **Desarrollar** — desarrollo a medida): servicio de *party bus* en Santo Domingo, República Dominicana. El sitio presenta sus servicios y paquetes y canaliza las reservas hacia su canal de mensajería. **No es** un producto de plataforma de Jeturing: es un encargo de cliente con su marca, su contenido y sus datos de contacto públicos.

## 📋 Descripción

Aplicación web moderna construida con React, TypeScript, Tailwind CSS y React Router para mostrar los servicios, paquetes y permitir reservaciones de Bonche Bus.

## 🚀 Características

- **Multi-página**: Inicio, Paquetes, Quiénes Somos, Contacto, Reservas
- **Sistema de Reservas**: Formulario de 5 pasos integrado con WhatsApp
- **Diseño Responsivo**: Optimizado para móvil, tablet y desktop
- **Integración WhatsApp**: Contacto directo desde el sitio
- **Galería de Imágenes**: Carrusel interactivo en la página principal

## 📦 Tecnologías

- React 18.3.1
- TypeScript
- Tailwind CSS v4
- React Router 7
- Vite
- Lucide React (iconos)

## 🛠️ Instalación y Compilación

### Requisitos Previos
- Node.js (versión LTS recomendada)
- npm (viene con Node.js)

### Pasos para Compilar

1. Abre la terminal en la carpeta del proyecto

2. Instala las dependencias:
```bash
npm install
```

3. Compila para producción:
```bash
npm run build
```

4. Los archivos compilados estarán en la carpeta `dist/`

## 🌐 Publicar en SiteGround

1. Compila el proyecto siguiendo los pasos anteriores
2. Ve a SiteGround → Site Tools → File Manager
3. Navega a `public_html`
4. Sube TODO el contenido de la carpeta `dist/`
5. Sube el archivo `.htaccess` a `public_html`

Ver `INSTRUCCIONES_SITEGROUND.txt` para más detalles.

## 📞 Contacto

**Bonche Bus**
- Tel: (809) 619-6960 / (809) 616-6960
- WhatsApp: (849) 657-6361 / (849) 650-6361
- Dirección: Av. Jiménez de Moya no.19 esq. José Contreras, Santo Domingo

## 📄 Licencia

© 2026 Bonche Bus. Todos los derechos reservados.

---

## 🗺️ Límites honestos y roadmap

- **Construido** — las páginas y el formulario de reservas descritos en este README.
- El sistema de reservas es un formulario que deriva al canal de mensajería del cliente: no hay motor de reservas ni pagos en línea en este repositorio.
- Los documentos de trabajo del cliente (observaciones e historia de la empresa) viven en `src/imports/` como material fuente del diseño.

## 📝 Changelog

### 2026-07-06 — Archivos desde Figma Make (`dc596a0`)

- Último hito registrado en el repositorio.

### 2026-11-17 — Estándar de README de la casa

- Cabecera normalizada, posición en el ecosistema (proyecto de cliente), límites honestos y créditos; `docs/README.md` creado como índice maestro.

## 👥 Créditos

**Jeturing Inc.** — desarrollo a medida para Bonche Bus.
