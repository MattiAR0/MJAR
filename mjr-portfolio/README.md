# MJAR Portfolio — Matti Ahola Rivas

Portfolio personal construido con **Next.js 14**, **Tailwind CSS** y **Framer Motion**.

**[Ver en produccion](https://mjr-portfolio-blush.vercel.app)**

## Stack

| Capa | Tecnologia |
|------|-----------|
| Framework | Next.js 14 (App Router) |
| Estilos | Tailwind CSS 3 |
| Animaciones | Framer Motion |
| Formulario | Formspree |
| Agenda | Cal.com Embed |
| Tipografia | Geist (local font) |
| Despliegue | Vercel |

## Secciones

- **Hero** con estado de disponibilidad y boton de CV.
- **Habilidades Tecnicas** agrupadas por categoria.
- **Trayectoria** profesional y academica (timeline).
- **Proyectos Destacados** con capturas, tags y badges de estado.
- **Agendar Cita** con Cal.com embebido.
- **Contacto** con formulario (Formspree) y datos de contacto.

## Desarrollo local

```bash
cd mjr-portfolio
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de produccion

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
mjr-portfolio/
  src/
    app/
      layout.tsx        # Metadata, SEO, Open Graph
      page.tsx           # Composicion de secciones
      globals.css        # Variables CSS y estilos base
    components/
      Hero.tsx           # Presentacion y CTA
      Skills.tsx         # Stack tecnico
      Experience.tsx     # Trayectoria profesional
      Projects.tsx       # Proyectos destacados
      Booking.tsx        # Cal.com embed
      Contact.tsx        # Formulario y footer
      Navbar.tsx         # Navegacion sticky
      ui/button.tsx      # Componente base Button
  public/
    projects/            # Capturas de proyectos
    og-image.svg         # Open Graph preview
    cv.pdf               # CV descargable (anade el tuyo)
```

## Notas

- Coloca tu CV en `public/cv.pdf` para que el boton de descarga funcione.
- La URL de Vercel se configurara tras el primer despliegue.

## Licencia

Uso personal. Creado por Matti Ahola Rivas.
