---
description: Contiene la descripción general de la asignatura
---

# Introducción

**Sistemas Programables (SCC-1023)** es una asignatura de especial relevancia dentro de la retícula de la carrera de **Ingeniería en Sistemas Computacionales del TecNM (Plan ISIC-2010-224)**, ya que establece el puente crucial entre el software y el hardware.&#x20;

Mientras que otras asignaturas se centran en el desarrollo de aplicaciones de alto nivel, esta asignatura **se enfoca** en la capa de interacción y control directo con el mundo físico.&#x20;

Esta asignatura **se cursa** en los semestres avanzados (del séptimo en adelante), lo que permite al estudiante aplicar conocimientos previos de Sistemas Digitales, Arquitectura de Computadoras y Lenguajes de Programación.&#x20;

Su **propósito fundamental** es que el futuro Ingeniero en Sistemas Computacionales adquiera la competencia para aplicar microcontroladores en el diseño de interfaces hombre-máquina (HMI) y máquina-máquina (MMI), así como en la creación de sistemas programables y sistemas embebidos.&#x20;

La **importancia** de la asignatura de Sistemas Programables radica en su contribución directa a las habilidades de evaluación de tecnologías de hardware y el diseño de soluciones de automatización. Al conocer, programar e implementar soluciones con los microcontroladores, el egresado no solo es un desarrollador de software, sino un integrador tecnológico capaz de generar soluciones innovadoras en campos de alta demanda como la Internet de las Cosas (IoT), la robótica y la automatización industrial, asegurando así que el Ingeniero en Sistemas Computacionales pueda implementar aplicaciones computacionales para solucionar problemas de diversos contextos.

El programa oficial aborda de manera integral los componentes y la metodología para el diseño de sistemas de control inteligente:

* Fundamentos de Sistemas Programables: Introducción a la arquitectura y modelos de programación de microcontroladores.
* Sensores y Actuadores: Estudio de los elementos de entrada y salida que permiten al sistema interactuar con el entorno (adquisición de datos y control físico).
* Puertos de E/S y Buses de Comunicación: Configuración y manejo de los mecanismos de transferencia de datos dentro y fuera del microcontrolador (ej. puertos paralelos, seriales).
* Comunicaciones: Implementación de protocolos seriales como I2C, SPI o UART para la comunicación entre dispositivos o con otros sistemas.
* Interfaces Hombre-Máquina (HMI): Diseño e implementación de hardware y software para la interacción con el usuario (ej. teclados, pantallas, LEDs).

### Programa oficial.

El contenido de la asignatura esta descrito en el programa oficial que se encuentra en [Programa oficial](https://github.com/MaElenaMtzDuran/apuntes-sistemas-programables/blob/main/chapters/Sistemas%20Programables%20SCC-1023%20ISC.pdf)

* [1.1 Programa Oficial](chapters/capitulo1/programaoficial.md)
* [1.2 Competencias](chapters/capitulo1/competencias.md)

> **Nota:** la generación de PDF/EPUB/HTML usa [HonKit](https://github.com/honkit/honkit) en lugar de `gitbook-cli`. HonKit es el fork mantenido activamente de GitBook — usa los mismos archivos `book.json` y `SUMMARY.md` sin cambios. Se adoptó porque `gitbook-cli` fue descontinuado por su autor original en 2019 y ya no genera salida funcional en versiones modernas de Node/npm (ver [capítulo 5, Solución de problemas](chapters/capitulo5/solucion-problemas.md)).

Úsalo como punto de partida: copia la estructura, reemplaza el contenido de prueba de `chapters/` por el tuyo y ajusta `book.json` a tu gusto.

## Índice de este documento

1. [Estructura del repositorio](./#1-estructura-del-repositorio)
2. [Requisitos previos](./#2-requisitos-previos)
3. [Uso local: previsualizar el libro](./#3-uso-local-previsualizar-el-libro)
4. [Generar PDF y EPUB automáticamente](./#4-generar-pdf-y-epub-automáticamente)
5. [Sincronizar el repositorio con GitHub](./#5-sincronizar-el-repositorio-con-github)
6. [Despliegue continuo (CI/CD) con GitHub Actions](./#6-despliegue-continuo-cicd-con-github-actions)
7. [Personalizar la plantilla](./#7-personalizar-la-plantilla)
8. [Agregar un capítulo nuevo con la plantilla](./#8-agregar-un-capítulo-nuevo-con-la-plantilla)

***

## 1. Estructura del repositorio

```
gitbook-example/
├── README.md                          # Este archivo: portada e instrucciones
├── SUMMARY.md                         # Tabla de contenidos (jerarquía de capítulos)
├── book.json                          # Configuración de GitBook (tema, plugins, PDF/EPUB)
├── .gitbook.yaml                      # Configuración para la integración con GitBook.com
├── .gitignore                         # Excluye node_modules/, _book/ y dist/ del control de versiones
├── chapters/                          # Contenido de prueba dividido por capítulo
│   ├── _template/                      # Plantilla reutilizable para capítulos nuevos
│   │   ├── README.md
│   │   └── seccion-plantilla.md
│   ├── capitulo1/
│   │   ├── README.md
│   │   ├── instalacion.md
│   │   └── estructura.md
│   ├── capitulo2/
│   │   ├── README.md
│   │   ├── sintaxis.md
│   │   └── configuracion.md
│   ├── capitulo3/
│   │   ├── README.md
│   │   ├── exportacion.md
│   │   └── integracion-continua.md
│   ├── capitulo4/
│   │   ├── README.md
│   │   ├── revision-cambios.md
│   │   └── buenas-practicas.md
│   ├── capitulo5/
│   │   ├── README.md
│   │   ├── faq-general.md
│   │   └── solucion-problemas.md
│   ├── capitulo6/
│   │   └── README.md                    # Glosario
│   └── capitulo7/
│       └── README.md                    # Índice temático
├── scripts/
│   └── build.sh                       # Automatización: genera PDF y EPUB con HonKit
└── .github/
    └── workflows/
        └── gitbook-deploy.yml         # Pipeline de CI/CD: build + despliegue a GitHub Pages
```

Cada capítulo de prueba tiene su propio `README.md` de introducción y archivos de sección, y todos están enlazados desde `SUMMARY.md`, que es el índice que GitBook usa para construir la navegación del libro.

## 2. Requisitos previos

* **Git** instalado y configurado con tus credenciales de GitHub.
* **Node.js LTS** (v18 o superior recomendado).
*   **HonKit**, instalado globalmente:

    ```bash
    npm install -g honkit
    ```
*   **Calibre**, requerido internamente por HonKit para exportar a PDF/EPUB:

    ```bash
    # Debian/Ubuntu
    sudo apt-get install calibre

    # macOS
    brew install calibre
    ```

    En Windows, descarga el instalador desde [calibre-ebook.com](https://calibre-ebook.com/download).

## 3. Uso local: previsualizar el libro

Clona el repositorio:

```bash
git clone https://github.com/MaElenaMtzDuran/apuntes-sistemas-programables.git
cd gitbook-example
```

Levanta un servidor local de previsualización (por defecto en `http://localhost:4000`):

```bash
honkit serve
```

Cada vez que edites un archivo `.md`, HonKit recompila y refresca la vista automáticamente.

## 4. Generar PDF y EPUB automáticamente

El script [`scripts/build.sh`](scripts/build.sh) automatiza la generación de ambos formatos usando HonKit:

```bash
chmod +x scripts/build.sh
./scripts/build.sh
```

Pasos que ejecuta el script, en orden:

1. `honkit build ./ ./_book` — genera el sitio HTML estático (y verifica que `_book/index.html` exista).
2. `honkit pdf ./ ./dist/manual.pdf` — genera el PDF (y verifica que el archivo no esté vacío).
3. `honkit epub ./ ./dist/manual.epub` — genera el EPUB (y verifica que el archivo no esté vacío).

Al terminar encontrarás los archivos en `dist/manual.pdf` y `dist/manual.epub`. Ambas carpetas (`_book/` y `dist/`) están excluidas del control de versiones mediante `.gitignore`, ya que son artefactos generados que no deben versionarse.

## 5. Sincronizar el repositorio con GitHub

Sigue estos pasos para llevar esta plantilla a un repositorio propio en GitHub:

1. **Crea un repositorio vacío en GitHub** (sin README, sin licencia, sin `.gitignore` — para evitar conflictos de historial con esta plantilla).
2.  **Inicializa Git localmente** dentro de la carpeta del proyecto (si aún no lo está):

    ```bash
    cd gitbook-example
    git init
    git add .
    git commit -m "Estructura inicial del repositorio GitBook"
    ```
3.  **Conecta tu repositorio local con el remoto de GitHub:**

    ```bash
    git remote add origin https://github.com/MaElenaMtzDuran/apuntes-sistemas-programables.git
    git branch -M main
    git push -u origin main
    ```
4. **(Opcional) Conecta el repositorio a un espacio de GitBook.com** usando la integración "GitHub Sync": desde tu espacio en [app.gitbook.com](https://app.gitbook.com), ve a _Integrations → GitHub_, autoriza el acceso y selecciona este repositorio y la rama `main`. A partir de ese momento, cada `git push` a `main` actualizará automáticamente el contenido publicado en GitBook.com, y los cambios hechos en el editor visual de GitBook se sincronizarán de vuelta como _pull requests_ en este repositorio. El archivo `.gitbook.yaml` incluido ya indica la ubicación de `README.md` y `SUMMARY.md` para esta integración.

A partir de este punto, cualquier colaborador puede clonar el repositorio, crear una rama, editar los archivos `.md` correspondientes y abrir un _pull request_ siguiendo el flujo normal de Git/GitHub.

## 6. Despliegue continuo (CI/CD) con GitHub Actions

Este repositorio incluye un flujo de trabajo listo para usar en [`.github/workflows/gitbook-deploy.yml`](.github/workflows/gitbook-deploy.yml), que se ejecuta automáticamente en cada `push` a la rama `main` (o manualmente desde la pestaña _Actions_ de GitHub). El flujo realiza:

1. Descarga del código (`actions/checkout`).
2. Instalación de Node.js LTS y HonKit.
3. Instalación de Calibre (necesario para el EPUB).
4. Ejecución de `scripts/build.sh`, que genera el sitio HTML (`_book/`), el PDF y el EPUB.
5. Publicación del sitio HTML en **GitHub Pages**, usando la acción `peaceiris/actions-gh-pages`.
6. Publicación del PDF y el EPUB como **artefactos descargables** de la ejecución, mediante `actions/upload-artifact`.

Para activarlo en tu propio repositorio:

1. Sube este proyecto a GitHub siguiendo la sección anterior.
2. En **Settings → Pages** del repositorio, configura la fuente de GitHub Pages como la rama `gh-pages` (creada automáticamente por la acción en el primer despliegue exitoso).
3. En **Settings → Actions → General**, asegúrate de que los _workflow permissions_ estén configurados como "Read and write permissions", para que la acción pueda publicar en `gh-pages` y subir artefactos.
4. Haz un `git push` a `main`: la pestaña _Actions_ mostrará la ejecución del flujo, y al finalizar el sitio estará disponible en `https://maelenamtzduran.github.io/apuntes-sistemas-programables/`, con el PDF y el EPUB descargables desde los artefactos de esa ejecución.

Con esto, cada cambio fusionado a `main` se refleja automáticamente en la documentación publicada, sin pasos manuales adicionales.

## 7. Personalizar la plantilla

* Reemplaza el contenido de prueba en `chapters/capitulo1`, `chapters/capitulo2` y `chapters/capitulo3` por tus propios capítulos, y actualiza `SUMMARY.md` para reflejar la nueva jerarquía.
* Ajusta título, autor, idioma y plugins en `book.json` (HonKit soporta paquetes `honkit-plugin-*` y también los `gitbook-plugin-*` existentes).
* Modifica los nombres de los archivos de salida (`manual.pdf`, `manual.epub`) en `scripts/build.sh` y en el workflow si lo deseas.
* Si no necesitas GitHub Pages, elimina el paso de despliegue en `gitbook-deploy.yml` y deja solo la generación de PDF/EPUB como artefactos.

## 8. Agregar un capítulo nuevo con la plantilla

La carpeta [`chapters/_template/`](chapters/_template/) contiene una plantilla lista para copiar cada vez que necesites un capítulo nuevo:

* [`chapters/_template/README.md`](chapters/_template/) — plantilla de introducción del capítulo.
* [`chapters/_template/seccion-plantilla.md`](chapters/_template/seccion-plantilla.md) — plantilla para cada sección dentro del capítulo.

Para usarla:

1.  Copia la carpeta completa y renómbrala, por ejemplo:

    ```bash
    cp -r chapters/_template chapters/capitulo4
    ```
2. Dentro de `chapters/capitulo4/`, renombra `seccion-plantilla.md` por cada sección que necesites (por ejemplo `introduccion.md`, `casos-de-uso.md`), duplicando el archivo tantas veces como secciones tenga el capítulo.
3. Edita el `README.md` del capítulo y cada archivo de sección para reemplazar los títulos y textos de ejemplo, y borra los comentarios `<!-- ... -->` de instrucciones.
4. Actualiza el enlace en el `README.md` del capítulo para que apunte a cada sección real.
5.  Registra el nuevo capítulo y sus secciones en [`SUMMARY.md`](SUMMARY.md), respetando la sangría de la jerarquía existente:

    ```markdown
    * [Capítulo 4: Tu nuevo título](chapters/capitulo4/README.md)
        * [4.1 Primera sección](chapters/capitulo4/introduccion.md)
        * [4.2 Segunda sección](chapters/capitulo4/casos-de-uso.md)
    ```
6. Guarda y confirma los cambios; si el repositorio ya está sincronizado con GitBook (Git Sync), el nuevo capítulo aparecerá automáticamente en el space tras el commit.

La carpeta `_template/` en sí **no debe** agregarse a `SUMMARY.md` — solo sirve como origen para copiar, no como contenido publicado del libro.

***

Para más detalles, consulta también:

* [Capítulo 1: Primeros pasos](chapters/capitulo1/)
* [Capítulo 2: Escritura de contenido](chapters/capitulo2/)
* [Capítulo 3: Generación y despliegue](chapters/capitulo3/)
* [Capítulo 4: Colaboración y buenas prácticas](chapters/capitulo4/)
* [Capítulo 5: Preguntas frecuentes](chapters/capitulo5/)
* [Capítulo 6: Glosario](chapters/capitulo6/)
* [Capítulo 7: Índice temático](chapters/capitulo7/)
