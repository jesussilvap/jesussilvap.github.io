# Hoja de vida – Jesús Andrés Silva Plazas

Sitio web estático (HTML + CSS + JavaScript, sin dependencias ni compilación) listo para GitHub Pages.

## Archivos

- `index.html` – contenido de la hoja de vida
- `styles.css` – estilos (tema claro/oscuro automático y formato de impresión)
- `script.js` – cambio de tema, botón de imprimir/PDF y menú activo
- `.nojekyll` – indica a GitHub Pages que sirva los archivos tal cual

## Publicar en GitHub Pages

1. Crear un repositorio en GitHub (por ejemplo `jesus-silva-cv`, o `<usuario>.github.io` para que quede en la raíz del dominio).
2. Subir los archivos:
   ```bash
   git init
   git add .
   git commit -m "Hoja de vida"
   git branch -M main
   git remote add origin https://github.com/<usuario>/<repositorio>.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)` → **Save**.
4. En uno o dos minutos el sitio estará en `https://<usuario>.github.io/<repositorio>/`.

## Ver en local

Abrir `index.html` directamente en el navegador, o:

```bash
python3 -m http.server 8000
```

y visitar http://localhost:8000.
