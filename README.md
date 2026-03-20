# Test App - Catálogo de Productos

Prueba técnica para visualizar, buscar y filtrar un catálogo de productos. Consume datos de la API pública [DummyJSON](https://dummyjson.com/).

## 🚀 Instalación y Ejecución

### Requisitos previos
- Node.js 18+ 
- npm 11.9.0+

### Pasos de instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
ng serve
```

La aplicación estará disponible en `http://localhost:4200/`

### Crear una build de producción

```bash
ng build
```

Los artefactos de compilación se guardarán en el directorio `dist/`.

## 🏗️ Arquitectura

### Stack de Tecnologías
- **Framework**: Angular 21.2 (Standalone Components)
- **Lenguaje**: TypeScript 5.9
- **Routing**: Standalone Routes
- **Testing**: Vitest
- **Styling**: SCSS, Bulma

### Estructura del Proyecto

```
src/app/
├── pages/                     # Páginas de la aplicación
│   └── product-list/          # Listado principal de productos
├── components/                # Componentes reutilizables
│   └── modal-product-detail/  # Modal para detalles del producto
├── services/                  # Servicios (inyección de dependencias)
│   └── product.service.ts     # API de productos
├── models/                    # Modelos TypeScript
│   ├── product.ts
│   └── category.ts
├── app.ts                     # Componente raíz
├── app.routes.ts              # Rutas de la aplicación
└── app.config.ts              # Configuración de Angular
```

## ✅ Qué está completado

- ✓ Listado de productos con paginación limit y skip por defecto
- ✓ Búsqueda en tiempo real (con debounce)
- ✓ Filtrado por categoría
- ✓ Modal para detalles del producto
- ✓ Consumo de API REST (GET, PATCH)
- ✓ Actualización de title, description del producto
- ✓ Tipado TypeScript en servicios
- ✓ Manejo de errores o éxito al editar (con notificación)
- ✓ Colores para los badges de status

## ❌ Qué NO está completado

- ✗ Paginación configurable
- ✗ Ordenamiento por columna con sortBy y order
- ✗ Estado de carga mientras llegan los datos
- ✗ Estado vacío cuando no hay resultados
- ✗ Validación de formularios
- ✗ Tests unitarios (sin implementación)
- ✗ Ejercicios Typescript

## 🧪 Ejecutar Tests unitarios

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
