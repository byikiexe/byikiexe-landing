# byikiexe-landing

## Despliegue del bloque B

El dominio público respondió con `Server: Apache`. El repositorio incluye
`.htaccess` para servir desde la raíz del dominio. Antes de publicar, confirma
que el alojamiento lee ese archivo y permite los overrides `FileInfo` necesarios.
Las cabeceras, el MIME explícito del manifiesto y Gzip dependen de los módulos
`headers`, `mime`, `filter` y `deflate`. La redirección y la protección de rutas
usan `mod_rewrite`.

- Comprueba en preproducción que HTTP y WWW terminan en `https://byikiexe.com/`
  en una sola redirección para la raíz. Si hay un proxy TLS, confirma con el
  proveedor cómo comunica HTTPS a Apache. Configura la redirección en el borde
  si el origen no puede distinguir de forma fiable el protocolo.
- Verifica que una URL anidada inexistente devuelve HTTP 404 con la página
  personalizada, que `/assets/` no se lista y que `/.git/config` no es público.
  Publica únicamente los archivos del sitio y excluye el repositorio Git y los
  archivos de trabajo del directorio público.
- Comprueba CSP y el resto de cabeceras en respuestas 200 y 404. Si cambia el
  contenido inline del JSON-LD de `index.html`, recalcula su SHA-256 con saltos
  de línea LF antes de publicar.
- Verifica Gzip para HTML, CSS y JS, la revalidación de HTML y los TTL de los
  recursos. Purga la caché del alojamiento si hay una CDN que impone otra política.
- HSTS queda pendiente hasta confirmar HTTPS y redirecciones estables. Evalúa el
  ámbito del dominio antes de habilitarlo y, en especial, antes de considerar
  `includeSubDomains` o `preload`.
