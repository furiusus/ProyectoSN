var usuarios = [{"id":1,"nombres":"Ronny Daniel, Herrera Herrera","correo":"rherrerah@uni.pe","contrasenia":"ronny"},{"id":2,"nombres":"Mary Carmen, Herrera Herrera","correo":"mherrera@gmail.com","contrasenia":"mary"}]
localStorage.setItem("usuarios",JSON.stringify(usuarios))
var publicaciones = [{"id_publicacion":1, "contenido":"Publicacion 1 con mucho contenido", "id_usuario":1,"listaUsuariosLike":[1]},{"id_publicacion":2, "contenido":"Publicacion 2 con mucho contenido", "id_usuario":1,"listaUsuariosLike":[1,2]},{"id_publicacion":3, "contenido":"Publicacion 3 con mucho contenido", "id_usuario":1,"listaUsuariosLike":[1,2]},{"id_publicacion":4, "contenido":"Publicacion 4 con mucho contenido", "id_usuario":1,"listaUsuariosLike":[2]},{"id_publicacion":5, "contenido":"Publicacion 5 con mucho contenido", "id_usuario":1,"listaUsuariosLike":[2]},{"id_publicacion":6, "contenido":"Publicacion 6 con mucho contenido", "id_usuario":2,"listaUsuariosLike":[2]},{"id_publicacion":7, "contenido":"Publicacion 7 con mucho contenido", "id_usuario":2,"listaUsuariosLike":[2]},{"id_publicacion":8, "contenido":"Publicacion 8 con mucho contenido", "id_usuario":2,"listaUsuariosLike":[1,2]},{"id_publicacion":9, "contenido":"Publicacion 9 con mucho contenido", "id_usuario":2,"listaUsuariosLike":[1,2]},{"id_publicacion":10, "contenido":"Publicacion 10 con mucho contenido", "id_usuario":2,"listaUsuariosLike":[1]}]
localStorage.setItem("publicaciones",JSON.stringify(publicaciones));