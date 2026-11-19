# MJAR Portfolio — Matti Ahola Rivas

Portfolio personal de desarrollador Full Stack, construido con **Next.js 16**, **Tailwind CSS** y **Framer Motion**.

**[Ver en producción](https://mjr-portfolio-blush.vercel.app)**

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router) + React 19 |
| Estilos | Tailwind CSS 3 (tokens de color en `globals.css`) |
| Animaciones | Framer Motion (respeta `prefers-reduced-motion`) |
| Tipografía | Geist (local) + Instrument Serif (`next/font/google`) |
| Despliegue | Vercel (también incluye Dockerfile) |

## Secciones

1. **Hero**: nombre, disponibilidad, datos clave y cinta con el stack.
2. **Proyectos**: PremadeGG destacado, webs en producción (MC Ahola, v411) y proyectos de código.
3. **Stack**: tecnologías agrupadas en formato bento.
4. **Trayectoria**: experiencia y formación.
5. **Contacto**: email, LinkedIn y GitHub.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm start
```

## Docker

```bash
docker compose up --build
```

## Estructura

```
src/
  app/
    layout.tsx          # Metadatos, Open Graph y JSON-LD (Person)
    page.tsx            # Composición de secciones
    globals.css         # Tokens de color (canales RGB) y utilidades
    sitemap.ts          # /sitemap.xml
    robots.ts           # /robots.txt
    favicon.ico, icon.png, apple-icon.png
  components/
    Navbar.tsx, Hero.tsx, Projects.tsx, Skills.tsx, Experience.tsx, Contact.tsx
    SectionHeader.tsx   # Cabecera numerada de cada sección
    Providers.tsx       # MotionConfig (movimiento reducido)
  lib/
    site.ts             # URL del sitio y redes sociales
public/
  projects/             # Capturas de los proyectos (WebP/PNG)
  og-image.png          # Vista previa para redes (1200×630)
  cv.pdf                # CV descargable
```

## Configuración

- `NEXT_PUBLIC_SITE_URL`: URL pública del sitio (por defecto la de Vercel). Se usa en los metadatos, el sitemap y el JSON-LD; cámbiala si conectas un dominio propio.
- Colores: el acento y los neutros se definen como canales RGB en `src/app/globals.css` (por ejemplo `--primary-rgb`) para que Tailwind admita opacidades como `bg-primary/10`.

## Licencia

Uso personal. Creado por Matti Ahola Rivas.
