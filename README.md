# Arepita Fast Food — Landing de Redes Sociales

Landing page premium de una sola pantalla, pensada para abrirse desde un
código QR o una tarjeta NFC. Objetivo: que el cliente siga Instagram,
TikTok, Facebook y escriba por WhatsApp. Estructura ya lista para sumar
un botón de Google Reviews más adelante.

## Estructura del proyecto

```
index.html   → estructura y contenido (SEO, Open Graph, Twitter Cards incluidos)
style.css    → sistema de diseño completo (tokens, tarjetas, animaciones, responsive)
script.js    → scroll-reveal, ripple y microinteracciones (sin librerías externas)
assets/
  logo.png              → logo recortado de tu imagen, con fondo transparente
  favicon-16.png
  favicon-32.png
  favicon-192.png
  apple-touch-icon.png  → ícono para "Agregar a pantalla de inicio" en iPhone
  og-image.png          → imagen de vista previa para WhatsApp / Facebook / Twitter
```

## Pendiente antes de publicar

1. **Link de WhatsApp**: en `index.html`, busca el comentario
   `<!-- REEMPLAZAR POR LINK DE WHATSAPP -->` dentro de la tarjeta de
   WhatsApp y reemplaza el `href="#"` por tu enlace real, por ejemplo:
   `https://wa.me/51XXXXXXXXX?text=Hola%2C%20quisiera%20hacer%20un%20pedido`

2. **Google Reviews**: cuando tengas el enlace, ve a la sección
   `<!-- REEMPLAZAR POR LINK DE GOOGLE REVIEWS -->`, coloca el `href`,
   quita el atributo `hidden` de `<section class="reviews" ...>` y la
   tarjeta aparecerá automáticamente con el mismo estilo y animaciones
   que las demás.

3. **Dominio**: ✅ ya resuelto — `og:image`, `og:url` y `canonical` usan
   `https://arepitanuevochimbote.github.io/`. Si más adelante compras un
   dominio propio, actualiza esas mismas etiquetas en el `<head>`.

## Publicar en GitHub Pages

1. Sube esta carpeta (tal cual, sin renombrar nada) a un repositorio.
2. En el repositorio: **Settings → Pages → Deploy from a branch**,
   selecciona la rama `main` y la carpeta `/root`.
3. En 1–2 minutos tu landing estará disponible en
   `https://tu-usuario.github.io/tu-repositorio/`.
4. Genera el QR o programa la tarjeta NFC con esa URL.

No usa frameworks, ni Bootstrap, ni jQuery — solo HTML, CSS y JS, así
que no requiere build ni instalación de dependencias.
