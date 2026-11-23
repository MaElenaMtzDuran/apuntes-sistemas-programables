// Complemento local de HonKit para los bloques que inserta el editor de GitBook.
// Sin él, HonKit falla con "unknown block tag" al compilar el libro.
const path = require('path');

const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

module.exports = {
  website: { assets: './assets', css: ['gitbook-blocks.css'] },
  ebook: { assets: './assets', css: ['gitbook-blocks.css'] },
  blocks: {
    // {% file src="ruta.pdf" %}Descripción{% endfile %}
    file: {
      process(block) {
        const src = block.kwargs.src || '';
        const nombre = decodeURIComponent(path.basename(src));
        const ext = path.extname(nombre).slice(1).toUpperCase() || 'ARCHIVO';
        const desc = (block.body || '').trim();
        return `<div class="gb-file"><span class="gb-file-tipo">${esc(ext)}</span>` +
          `<div class="gb-file-info"><a href="${esc(src)}" target="_blank" rel="noopener">${esc(nombre)}</a>` +
          (desc ? `<div class="gb-file-desc">${esc(desc)}</div>` : '') +
          `</div><a class="gb-file-descargar" href="${esc(src)}" download>Descargar</a></div>`;
      },
    },
    // {% embed url="https://..." %}Descripción{% endembed %}
    embed: {
      process(block) {
        const url = block.kwargs.url || '';
        const desc = (block.body || '').trim();
        return `<p class="gb-embed"><a href="${esc(url)}" target="_blank" rel="noopener">${esc(desc || url)}</a></p>`;
      },
    },
    // {% hint style="info|success|warning|danger" %}Texto{% endhint %}
    hint: {
      process(block) {
        const estilo = block.kwargs.style || 'info';
        return this.renderBlock('markdown', block.body).then(
          (html) => `<div class="gb-hint gb-hint-${esc(estilo)}">${html}</div>`);
      },
    },
    // {% content-ref url="pagina.md" %}...{% endcontent-ref %}
    'content-ref': {
      process(block) {
        return this.renderBlock('markdown', block.body).then(
          (html) => `<div class="gb-content-ref">${html}</div>`);
      },
    },
  },
};
