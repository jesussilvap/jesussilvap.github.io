# Hoja de vida – Jesús Andrés Silva Plazas

Sitio estático hecho con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com), publicado en GitHub Pages con GitHub Actions.

## Editar el contenido

Todo el texto de la hoja de vida está en `src/data/cv.ts`. Al modificarlo y hacer `git push` a `main`, el sitio se vuelve a publicar solo.

## Estructura

```
src/data/cv.ts            contenido (perfil, experiencia, artículos, cursos…)
src/pages/index.astro     página principal
src/components/           encabezado, secciones, línea de tiempo, tablas
src/layouts/Base.astro    <head>, fuentes y tema claro/oscuro
src/styles/global.css     colores y estilos base (Tailwind v4)
.github/workflows/deploy.yml   despliegue automático a GitHub Pages
```

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/
```

## Publicar en GitHub Pages (una sola vez)

1. Crear un repositorio **público** en GitHub (por ejemplo `jesus-silva-cv`) sin README.
2. Subir el código:
   ```bash
   git remote add origin https://github.com/<usuario>/jesus-silva-cv.git
   git push -u origin main
   ```
3. En el repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. En **Actions**, volver a ejecutar el flujo “Desplegar en GitHub Pages” si el primero falló por no tener Pages activado.

El sitio queda en `https://<usuario>.github.io/jesus-silva-cv/`. La ruta base se calcula sola a partir del nombre del repositorio; si el repositorio se llama `<usuario>.github.io`, se publica en la raíz.
