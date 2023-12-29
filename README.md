# Zapatería Hers - Proyecto Final

Bienvenido a Zapatería Hers, un proyecto de e-commerce desarrollado con React JS. En esta aplicación, podrás explorar una variedad de productos, ver detalles, y realizar compras de manera fácil y segura.

## Cómo comenzar

Este proyecto utiliza Create React App como base. Aquí tienes algunos scripts útiles:

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La página se recargará automáticamente al realizar cambios.\
Puedes ver errores de lint en la consola.

### `npm test`

Inicia el corredor de pruebas en modo interactivo.\
Consulta la sección sobre [ejecutar pruebas](https://facebook.github.io/create-react-app/docs/running-tests) para obtener más información.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Agrupa React de manera óptima y optimiza el rendimiento.

El build está minificado y los nombres de archivo incluyen los hashes.\
¡Tu aplicación está lista para ser desplegada!

Consulta la sección sobre [despliegue](https://facebook.github.io/create-react-app/docs/deployment) para obtener más información.

## Estructura del Proyecto

La aplicación consta de diferentes componentes:

- `NavBar`: Navegación principal de la aplicación.
- `CartWidget`: Indicador de la cantidad de productos en el carrito.
- `ItemListContainer`: Contenedor principal para mostrar productos.
- `ItemDetailContainer`: Contenedor para detalles de productos.
- `Cart`: Componente que muestra los productos en el carrito.
- `Checkout`: Proceso de pago con información del cliente y confirmación de la orden.

## Firebase

La aplicación utiliza Firebase para gestionar datos y órdenes. Se han implementado las colecciones `items` y `orders` para almacenar productos y órdenes respectivamente.

## Librerías Adicionales

En este proyecto, se han utilizado las siguientes librerías adicionales:

- `react-router-dom`: Para la navegación entre diferentes vistas.
- `firebase`: Para la integración con la base de datos Firebase.

## Desafíos y Decisiones de Diseño

Este proyecto se ha centrado en cumplir con los requisitos del curso, proporcionando una experiencia de compra intuitiva y funcional. Se ha priorizado la usabilidad y la interactividad del usuario.

¡Esperamos que disfrutes de tu experiencia de compra en Zapatería Hers!