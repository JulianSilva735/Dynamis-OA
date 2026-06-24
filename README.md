# DYNAMIS OA S.A.S. — Sitio Web

Página informativa construida con **React + TypeScript + Vite**, siguiendo el
Manual de Marca e Imagen de DYNAMIS OA S.A.S.

## Estructura

```
src/
├── components/          # Un componente por carpeta: TSX + CSS propio
│   ├── Navbar/
│   ├── Hero/
│   ├── Nosotros/
│   ├── Servicios/
│   ├── Proyectos/
│   ├── Clientes/
│   ├── Contacto/
│   ├── Footer/
│   ├── ChatBot/         # Bot de preguntas frecuentes + envío a WhatsApp
│   └── Logo/            # Logo SVG (rayo + conector + hexágono)
├── data/
│   ├── content.ts       # Textos, servicios, valores, proyectos, testimonios
│   └── chatbotRules.ts  # Reglas del bot + número de WhatsApp
├── styles/
│   └── variables.css    # Paleta y tipografías del manual de marca
├── types.ts             # Interfaces TypeScript compartidas
├── App.tsx
├── index.css            # Reset + utilidades compartidas (.container, .section)
└── main.tsx
```

## Cómo correrlo

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # build de producción en /dist
```

## Configuración pendiente

1. **WhatsApp:** cambia `WHATSAPP_NUMERO` en `src/data/chatbotRules.ts`
   por el número real (formato internacional sin "+", ej: `573001234567`).
2. **Formulario de contacto:** conecta `handleSubmit` en
   `src/components/Contacto/Contacto.tsx` con Formspree o EmailJS.
3. **Proyectos:** reemplaza los placeholders en `src/data/content.ts`
   con los casos reales del cliente y agrega fotos en `Proyectos.tsx`.