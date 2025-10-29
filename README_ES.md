# Template HTML CSS

Un template limpio y minimalista de HTML CSS con estructura de carpetas organizada y configuración de linting para proyectos de desarrollo web.

## 🚀 Características

- **Estructura HTML5 limpia** con marcado semántico
- **CSS minimalista** con propiedades personalizadas y diseño responsive
- **Estructura de carpetas organizada** para desarrollo escalable
- **Herramientas de linting** con ESLint, Prettier, HTMLHint y Stylelint
- **Configuración de Node.js** con archivo .nvmrc

## 📁 Estructura del Proyecto

```
HTML-CSS-Template/
├── assets/                 # Recursos estáticos
│   ├── fonts/             # Fuentes personalizadas
│   ├── icons/             # Iconos y favicon
│   └── images/            # Imágenes
├── docs/                  # Documentación
├── src/                   # Archivos fuente
│   ├── css/
│   │   └── main.css       # Hoja de estilos principal
│   └── js/                # Archivos JavaScript (cuando sea necesario)
├── index.html             # Archivo HTML principal
├── package.json           # Configuración NPM y scripts
├── .nvmrc                 # Versión de Node.js
├── .gitignore             # Reglas de Git ignore
├── eslint.config.js       # Configuración ESLint
├── .prettierrc            # Configuración Prettier
├── .htmlhintrc            # Configuración HTMLHint
├── .stylelintrc.json      # Configuración Stylelint
└── README.md              # Documentación del proyecto
```

## 🛠️ Instalación

1. **Clona o descarga el proyecto**
2. **Asegúrate de tener Node.js instalado** (versión especificada en .nvmrc)
3. **Instala las dependencias:**
   ```bash
   npm install
   ```

## 📝 Scripts Disponibles

### Linting

- `npm run lint` - Ejecuta todos los linters
- `npm run lint:html` - Lint para archivos HTML
- `npm run lint:css` - Lint para archivos CSS
- `npm run lint:js` - Lint para archivos JavaScript

### Formateo

- `npm run format` - Formatea todos los archivos
- `npm run format:check` - Verifica el formato sin modificar

### Desarrollo

- `npm start` o `npm run dev` - Información para desarrollo

## 🎨 Personalización

### Variables CSS

El archivo `src/css/main.css` incluye variables CSS personalizables:

```css
:root {
  --primary-color: #007bff;
  --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --spacing-md: 1rem;
  /* ... más variables */
}
```

### Configuración de Linting

- **ESLint**: `eslint.config.js` - Reglas para JavaScript
- **Prettier**: `.prettierrc` - Formato de código
- **HTMLHint**: `.htmlhintrc` - Validación HTML
- **Stylelint**: `.stylelintrc.json` - Reglas CSS

## 📱 Diseño Responsive

El template incluye breakpoints responsive:

- **Desktop**: > 768px
- **Tablet**: ≤ 768px
- **Mobile**: ≤ 480px

## 🔧 Herramientas de Desarrollo

### Requisitos

- Node.js (versión en .nvmrc)
- npm o yarn

### Configuración del Editor

Extensiones recomendadas para VS Code:

- ESLint
- Prettier
- HTMLHint
- Stylelint

## 📄 Licencia

MIT - Puedes usar este template libremente para proyectos personales y comerciales.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:

- Abre un issue en el repositorio
- Contacta al mantenedor del proyecto

---

¡Disfruta construyendo con este template! 🎉
