#!/usr/bin/env python3
"""Verifica que los enlaces internos e imágenes de los archivos .md apunten a
archivos existentes. Termina con código 1 si encuentra enlaces rotos.

Uso: python3 scripts/verificar-enlaces.py
"""
import os
import re
import sys
import urllib.parse

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATRON = re.compile(
    r'!?\[[^\]]*\]\(<?([^)>]+?)>?(?:\s+"[^"]*")?\)'  # [texto](ruta) e imágenes
    r'|src="([^"]+)"|href="([^"]+)"'                 # <img src> y <a href>
    r'|\{%\s*(?:file|content-ref)\s+(?:src|url)="([^"]+)"'  # bloques de GitBook
)
IGNORAR = {'.git', '_book', 'node_modules', 'dist'}

rotos = 0
for carpeta, subcarpetas, archivos in os.walk(RAIZ):
    subcarpetas[:] = [d for d in subcarpetas if d not in IGNORAR]
    for nombre in archivos:
        if not nombre.endswith('.md'):
            continue
        ruta_md = os.path.join(carpeta, nombre)
        with open(ruta_md, encoding='utf-8') as f:
            texto = re.sub(r'```.*?```', '', f.read(), flags=re.S)
        for m in PATRON.finditer(texto):
            enlace = next(g for g in m.groups() if g)
            if re.match(r'^(https?:|mailto:|#|data:)', enlace):
                continue
            destino = urllib.parse.unquote(enlace.split('#')[0])
            if destino and not os.path.exists(os.path.normpath(os.path.join(carpeta, destino))):
                rotos += 1
                print(f'ENLACE ROTO: {os.path.relpath(ruta_md, RAIZ)} -> {enlace}')

print(f'Enlaces rotos: {rotos}')
sys.exit(1 if rotos else 0)
