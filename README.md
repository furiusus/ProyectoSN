# ProyectoSN
Pagina de una web social.
Todos los ejemplos estan en la base de datos de localstorage por lo que son validos para su uso instantaneo.
=================
    EJECUCION DE LA APLICACION
    - Se puede correr la aplicacion colocando la direccion del archivo ProyectoSN/src/index.html del archivo descargado
    - Se puede correr tambien yendo al siguiente enlace que redirigira a un github
        https://furiusus.github.io/ProyectoSN/src/
=================
    LOGEO
    -Puede logearse mediante la pagina principal.
    -Necesita llenar el primer campo con un correo registrado y valido (ejm: rherrerah@uni.pe)(debe poseer almenos el @ en el cuadro).
    -Para la contraseña solo ingesar el valor indicado(ejm: ronny).
=================
    REGISTRO
    -Para el registro se necesitar llenar uno de los dos campos (Nombres o Apellidos) los cuales seran registrado como "nombres" dentro de la BD diferenciados por una coma, en caso se ingrese solo un dato se guardara ese dato como "nombres".
    -El correo debe ser valido (debe poseer almenos el @ en el cuadro).
    -La contraseña debe repetirse 2 veces y deben coincidir.
    -Finalmente debe dar click en registrar para mandarlo a la pagina principal
    -Aunque reinicie o cierre el navegador se quedaran registrada (La unica manera de borrar es ejecutar en la consola de localstorage.clean() y borrara todo solo se quedara con los usuarios por default por lo que siempre se podra logear con los ejemplos).
=================
    PUBLICACIONES
    -Para las publicaciones, estas seran vistas en el boton "Publicaciones" y se veran las publicaciones por default.
    -Apartir de aqui cualquier modificacion o agregado de publicacion se tendra que actualizar pulsando el boton de "Informacion Personal" y regresando a "Publicaciones".
    -Solo se podran editar y eliminar el usuario que se logeo
    -El boton de eliminar, eliminara(valga la redundancia :) )automaticamente la publicacion, solo se clickea y actualiza.
    -El boton de publicar tendras que ingresar un contenido y publicar, vale la pena recalcar que cada publicacion tiene su propio id por lo que cada publicacion sera unica a menos que se modifique, "LA ELIMINACION DE UNA PUBLICACION SOLO LE CAMBIARA EL ESTADO, ninguno se elimina solo no son visibles en el muro"
    -Para modificar se visualiza un cuadro no editable y uno editable, si se quiere el mismo contenido se pulsa el boton copiar y se edita el mensaje antiguo.
    -El boton de like aun no esta habilitado sin embargo si lleva una cuenta de cuantos usuarios le dieron like y si se ve el registro en el localstorage se vera que solo tinen la manito arriba las publicaciones en las que se puede dar like y manita abajo si ya se dio like
