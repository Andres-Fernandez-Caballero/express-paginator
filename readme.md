# Paginador
Este es un ejemplo lo mas simple posible de como hacer paginacion con express y javascript
## Descripcion
La aplicacion se basa en un archivo index que determina la ruta principal y llama al motor de plantillas ejs. La ruta de inicio es controladar por el controlador indexController, el cual posee una lista de productos(una lista de toda la vida) y usa un objeto llamado Paginador almacenado en la carpeta utils. Este Paginador recibe una lista de objetos y una cantidad de elementos a mostrar por pagina. Luego se devuelve a la vista index un objeto con la sub lista de objetos por paginas, la pagina anterior, la pagina siguiente y la pagina actual (esta logica decidi implementarla en el controlador para liberar a la vista de logicas complicadas).
Es importante resaltar que la clase Paginador sirve para cualquier lista que se quiera usar lo que permite reutilizar codigo.
## Instalacion
* instalar las librerias con `npm install`
* iniciar el servidor con `npm run dev`
* abrir un explorador y dirigirse a la pagina [localhost:3000](http://localhost:3000/)
