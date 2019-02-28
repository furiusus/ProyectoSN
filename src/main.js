if(localStorage.getItem("usuarios")==null){
var usuarios = [{"id":1,"nombres":"Ronny Daniel, Herrera Herrera","correo":"rherrerah@uni.pe","contrasenia":"ronny"},{"id":2,"nombres":"Mary Carmen, Herrera Herrera","correo":"mherrera@gmail.com","contrasenia":"mary"}]
localStorage.setItem("usuarios",JSON.stringify(usuarios))
}
if(localStorage.getItem("publicaciones")==null){
var publicaciones = [{"id_publicacion":1, "contenido":"Publicacion 1 con mucho contenido", "id_usuario":1,"listaUsuariosLike":[1],"estado":"1"},{"id_publicacion":2, "contenido":"Publicacion 2 con mucho contenido", "id_usuario":1,"listaUsuariosLike":[1,2],"estado":"1"},{"id_publicacion":3, "contenido":"Publicacion 3 con mucho contenido", "id_usuario":1,"listaUsuariosLike":[1,2],"estado":"1"},{"id_publicacion":4, "contenido":"Publicacion 4 con mucho contenido", "id_usuario":1,"listaUsuariosLike":[2],"estado":"1"},{"id_publicacion":5, "contenido":"Publicacion 5 con mucho contenido", "id_usuario":1,"listaUsuariosLike":[2],"estado":"1"},{"id_publicacion":6, "contenido":"Publicacion 6 con mucho contenido", "id_usuario":2,"listaUsuariosLike":[2],"estado":"1"},{"id_publicacion":7, "contenido":"Publicacion 7 con mucho contenido", "id_usuario":2,"listaUsuariosLike":[2],"estado":"0"},{"id_publicacion":8, "contenido":"Publicacion 8 con mucho contenido", "id_usuario":2,"listaUsuariosLike":[1,2],"estado":"1"},{"id_publicacion":9, "contenido":"Publicacion 9 con mucho contenido", "id_usuario":2,"listaUsuariosLike":[1,2],"estado":"0"},{"id_publicacion":10, "contenido":"Publicacion 10 con mucho contenido", "id_usuario":2,"listaUsuariosLike":[1],"estado":"1"}]
localStorage.setItem("publicaciones",JSON.stringify(publicaciones));
}
var r=ReactDOM;
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nombre:"",
            contrasenia:"",
            entrar:false,
            mensajeCorreo:"",
            mensajePassword:"",
            correo:"",
            id:0,
            pagina:0,
            btnRegistro:true
        }
        this.correoChange=this.correoChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.entrar = this.entrar.bind(this);
        this.validarCorreo = this.validarCorreo.bind(this);
        this.validarPassword = this.validarPassword.bind(this);
        this.registrar = this.registrar.bind(this);
        this.inicio =this.inicio.bind(this);

    }
    correoChange(e){
        this.setState({
            correo:e.target.value
        })          
    }
    passChange(e){
        this.setState({
            contrasenia:e.target.value
        })
    }
    validarCorreo(correo){
        if(correo.length==0){
            this.setState({mensajeCorreo:"Correo en blanco"});
            return false;
        }else{
            for(var c=0;c<correo.length;c++){            
                if(correo.charAt(c)=='@'){
                    this.setState({mensajeCorreo:""});
                    return true;
                } 
                if(c==correo.length-1){
                    this.setState({mensajeCorreo:"Correo invalido '@'"});
                    return false;
                } 
            }
        }
    }
    validarPassword(password){
        if(password.length==0){
            this.setState({mensajePassword:"Contraseña invalido"})
            return false;
        }else{
            return true;
        }
    }
    registrar(){
        this.setState({pagina:1})
    }
    inicio(){
        this.setState({pagina:0})
    }
    entrar(){
        this.setState({mensajeCorreo:"",mensajePassword:""});
        var usuarios = JSON.parse(localStorage.getItem("usuarios"));
        if(this.validarCorreo(this.state.correo)&&this.validarPassword(this.state.contrasenia)){
            for(var i=0 ; i< usuarios.length;i++){
                if(usuarios[i].correo==this.state.correo){
                    if(usuarios[i].contrasenia==this.state.contrasenia){
                        this.setState({entrar:true,id:usuarios[i].id})
                        break;
                    }else{
                        this.setState({mensajePassword:"Contraseña incorrecta"})
                        break;
                    }
                }
                if(i==usuarios.length-1){
                    this.setState({mensajeCorreo:"Correo no registrado"});
                }
            }
        }
        var usuarios = null;
        this.setState({btnRegistro:false})
    }
    render(){
        const mensaje1 = !(this.state.mensajeCorreo=="")?(
            <div className="invalido">{this.state.mensajeCorreo}</div>
        ):<div className="valido"></div>;
        const mensaje2 = !(this.state.mensajePassword=="")?(
            <div className="invalido">{this.state.mensajePassword}</div>
        ):<div className="valido"></div>;
        const etiqueta = !this.state.entrar?(
            <div>
        <div ><br></br><br></br></div>
        <div className="row container" >
        <div className="col-sm-2 col-lg-4"></div>
        <div className="col-12 col-sm-8 col-lg-4 ">
            <div className="mainTitulo">
            <img className="d-inline-block align-top" width="50" height="50" src="image/tree.png"></img>
                    Natural Social Network
            </div>
            <br></br><br></br>
            <div className="fondoLogin container">
            <form >
                <br></br>
                <div className="form-group">
                    <label for="correo" className="sub-login">Correo:</label>
                    <input onChange={this.correoChange} className="form-control" type="email" id="correo" placeholder="Ingrese correo"></input>
                    {mensaje1}
                </div>
                <div className="form-group">
                    <label for="contrasenia" className="sub-login">Contraseña:</label>
                    <input onChange={this.passChange} className="form-control" type="password" id="contrasenia" placeholder="Ingrese contraseña"></input>
                    {mensaje2}
                </div>
            </form>
            <div className="col-12 container text-center">
                <button className="btn btn-primary" onClick={this.entrar} value={this.props.clickEntrando}>Entrar</button>
            </div>
            <br></br>
            </div>
        </div>
        <div className="col-sm-2"></div>
        </div>
        <div><br></br><br></br></div>
        </div>):<PaginaPrincipal id={this.state.id}></PaginaPrincipal>
        switch(this.state.pagina){
            case 0:
                var btnR = this.state.btnRegistro?(<button type="button" className="btn btn-primary" onClick={this.registrar}>Registrar</button>):<div></div>
                var etiq=(<div>
                    <div><br></br></div>
                    <div>{btnR}</div>
                    {etiqueta}
                </div>)
                break;
            case 1:
                var etiq=<Registro retornar={this.inicio}></Registro>
                break;
        }
        return(
            <div>
                {etiq}
            </div>
        );
    }
}
function BarraPaginaPrincipal(props){
    return(
        <div className="opacity70 font-weight-bold">
        <br></br>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
                <img className="d-inline-block align-top" width="30" height="30" src="image/tree.png"></img>
                Natural Social Network
            </a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={props.clickMostrarInfoPersonal}>Informacion Personal</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={props.clickMostrarPublicacion}>Publicaciones</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disable">{props.usuarioNombre}</a>
                </li>
                </ul>                
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#barraPubli">
                    Publicar 
                </button>   
            </div>
        </nav>
        </div>
    )
}
function InformacionPersonal(props){
    return(
        <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10 col-md-12 col-sm-12">
            <br></br><br></br>
                <table className=" table table-dark opacity70 table table-hover ">
                    <tbody>
                        <tr>
                            <td>Nombre:</td>
                            <td>{props.usuario.nombres}</td>
                        </tr>
                        <tr>
                            <td>Correo:</td>
                            <td>{props.usuario.correo}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
        </div>
    )
}
class Publicacion extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:0,
            author:"",
            publicaciones:[]
        };
        this.buscarAutor = this.buscarAutor.bind(this);
        this.buscarliked = this.buscarliked.bind(this);
        this.eliminarPublicacion = this.eliminarPublicacion.bind(this);
        this.modPub = this.modPub.bind(this);
        this.likeToDislike = this.likeToDislike.bind(this);
        this.dislikeToLike = this.dislikeToLike.bind(this);
    }
    componentDidMount(){
        this.setState({id:this.props.usuarioID})
        var publicacionesData = JSON.parse(localStorage.getItem("publicaciones"));
        var publicaciones =[]
        var c=0;
        for(var i = 0 ; i< publicacionesData.length;i++){
            if(publicacionesData[i].estado=="1"){
                publicaciones.splice(c,0,publicacionesData[i]);
                c++;
            }
        }
        publicaciones.sort(function(a,b){return b.id_publicacion-a.id_publicacion});
        this.setState({publicaciones:publicaciones});
    }
    buscarAutor(id){
        const usuarios = JSON.parse(localStorage.getItem("usuarios"))
        for(var i=0; i<usuarios.length;i++){
            if(usuarios[i].id==id){
                return usuarios[i].nombres;
                break;
            }
        }
        return "Usuario desconocido"
    }
    buscarliked(id_usuario,listaUsuariosLike){
        for(var i = 0; i<listaUsuariosLike.length;i++){
            if(listaUsuariosLike[i]==id_usuario){
                return true;
                break;
            }
        }
        return false;
    }
    eliminarPublicacion(id_publicacion){
        var publicacionesData = JSON.parse(localStorage.getItem("publicaciones"));
        var publicaciones=[];
        for(var i=0;i<publicacionesData.length;i++){
            if(publicacionesData[i].id_publicacion==id_publicacion){
                publicacionesData[i].estado="0";
                publicaciones.splice(i,0,publicacionesData[i]);
            }else{
                publicaciones.splice(i,0,publicacionesData[i]);
            }
        }
        localStorage.removeItem("publicaciones");
        localStorage.setItem("publicaciones",JSON.stringify(publicaciones));
    }
    modPub(id_publicacion,contenido){
        this.props.clickModificarPublicacion(id_publicacion,contenido)
    }
    likeToDislike(publicacion,id_usuario){
        const publicaciones = JSON.parse(localStorage.getItem("publicaciones"));
        for(var i = 0;i<publicaciones.length;i++){
            if(publicacion.id_publicacion==publicaciones[i].id_publicacion){
                if(!this.buscarliked(id_usuario,publicaciones[i].listaUsuariosLike)){
                    publicaciones[i].listaUsuariosLike.splice(publicaciones[i].listaUsuariosLike.length,0,id_usuario)
                    break;
                }
            }
        }
        localStorage.removeItem("publicaciones");
        localStorage.setItem("publicaciones",JSON.stringify(publicaciones));
    }
    dislikeToLike(publicacion,id_usuario){
        const publicaciones = JSON.parse(localStorage.getItem("publicaciones"));
        for(var i = 0;i<publicaciones.length;i++){
            if(publicacion.id_publicacion==publicaciones[i].id_publicacion){
                for( var j=0;j<publicaciones[i].listaUsuariosLike.length;j++) {
                       if(publicaciones[i].listaUsuariosLike[j]==id_usuario){
                           publicaciones[i].listaUsuariosLike.splice(j,1);
                           break;
                       }
                   }
                break;
            }
        }
        localStorage.removeItem("publicaciones");
        localStorage.setItem("publicaciones",JSON.stringify(publicaciones));
    }
    render(){
        var lista = this.state.publicaciones;
        var id = this.state.id;
        var btnLiked = function(publicacion,likeToDislike){
            return(<a className="like" href="#" onClick={()=>{likeToDislike(publicacion,id)}}>
                {publicacion.listaUsuariosLike.length}
                <ion-icon name="thumbs-up"></ion-icon>
            </a>)
        };
        var btnDisliked = function (publicacion,dislikeToLike) {  
            return (<a className="dislike" href="#" onClick={()=>{dislikeToLike(publicacion,id)}}>
                {publicacion.listaUsuariosLike.length}
                <ion-icon name="thumbs-down"></ion-icon>
            </a>)
        };
        const etiq = lista.map(publicacion=>
            <tr><td classsName="">
                <div className="row">
                    <div className="col">{publicacion.contenido}</div>
                </div>
                <div className="row">
                    <div className="col-5">
                        {this.buscarAutor(publicacion.id_usuario)}
                    </div>     
                    <div className="col text-right">
                        {(publicacion.id_usuario==this.state.id)?<a href="#" onClick={()=>{this.eliminarPublicacion(publicacion.id_publicacion)}} >Eliminar</a>:<div></div>}
                    </div>   
                    <div className="col text-right">
                        {(publicacion.id_usuario==this.state.id)?<a href="#" onClick={()=>{this.modPub(publicacion.id_publicacion,publicacion.contenido)}} data-toggle="modal" data-target="#barraModificarPublicacion">Editar</a>:<div></div>}
                    </div>  
                    <div className="col text-right"> 
                        {!this.buscarliked(this.state.id,publicacion.listaUsuariosLike)?btnLiked(publicacion,this.likeToDislike):btnDisliked(publicacion,this.dislikeToLike)}
                    </div>
                </div>
            </td></tr>
        );
        return(
            <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10 col-md-12 col-sm-12 ">
            <br></br>
            <table className="table table-dark opacity70 table-hover">
                <tbody>
                        {etiq}
                </tbody>
            </table>
            </div>
            </div>
        )
    }
}
class BarraPublicacion extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:this.props.idUsuario,
            contenido:""
        }
        this.crearPublicacion = this.crearPublicacion.bind(this);
        this.contenidoChange = this.contenidoChange.bind(this);
    }
    componentDidMount(){
        
    }
    contenidoChange(e){
        var contenido = e.target.value;
        this.setState((state)=>{
            state.contenido = contenido;
        });
    }
    crearPublicacion(){
        
        const publicaciones = JSON.parse(localStorage.getItem("publicaciones"));
        var publicacionNueva = {
            id_publicacion:(publicaciones.length+1),
            contenido:this.state.contenido,
            id_usuario:this.state.id,
            listaUsuariosLike:[],
            estado:"1"
        };
        publicaciones.splice(publicaciones.length,0,publicacionNueva);
        localStorage.removeItem("publicaciones");
        localStorage.setItem("publicaciones",JSON.stringify(publicaciones)); 
        this.setState({contenido:""});
    }
    render(){
        const eti =(<div className="modal fade" id="barraPubli" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <img className="d-inline-block align-top" width="30" height="30" src="image/tree.png"></img>
                    Natural Social Network
                </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="">
                <div className="offset-lg-1"></div>
                <div className="col-lg-10">
                    <textarea className="cuadroPublicacion" row="5" onChange={this.contenidoChange} maxLength={350} value={this.state.contenido}></textarea> 
                    <small className>La publicacion tiene como maximo 350 caracteres :)</small>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>{this.setState({contenido:""})}}>Close</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.crearPublicacion}>Publicar</button>
            </div>
          </div>
        </div>
      </div>)
        return(
            <div>{eti}</div>
        )
    }
}
class BarraModificarPublicacion extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contenidoModificado:""
        }
        this.onChangeContenido = this.onChangeContenido.bind(this);
        this.modificarContenido = this.modificarContenido.bind(this);
        this.copiar = this.copiar.bind(this);
    }
    onChangeContenido(e){
        this.setState({contenidoModificado:e.target.value})
        console.log(this.state.contenidoModificado)
    }
    componentDidMount(){
        this.setState({contenidoModificado:this.props.contenido})
    }
    modificarContenido(id_publicacion){
        var publicacionesData = JSON.parse(localStorage.getItem("publicaciones"))
        for(var i = 0; i<publicacionesData.length;i++){
            if(publicacionesData[i].id_publicacion==id_publicacion){
                publicacionesData[i].contenido = this.state.contenidoModificado;
                console.log(this.state.contenidoModificado);
                break;
            }
        }
        localStorage.removeItem("publicaciones");
        localStorage.setItem("publicaciones",JSON.stringify(publicacionesData))
    }
    copiar(contenido){
        this.setState({contenidoModificado:contenido})
    }
    render(){
        const contA =<textarea className="cuadroPublicacion" row="5" maxLength={350} value={this.props.contenido} disabled></textarea>
        const contN =<textarea className="cuadroPublicacion" row="5" onChange={this.onChangeContenido}  maxLength={350} value={this.state.contenidoModificado}></textarea>
        const eti = ( <div className="modal fade" id="barraModificarPublicacion" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                    <img className="d-inline-block align-top" width="30" height="30" src="image/tree.png"></img>
                    Natural Social Network-Modifica tu publicacion
                </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="">  
                <div className="offset-lg-1"></div>
                <div className="col-lg-10">
                    <div>{contA}</div>
                    <button className="btn btn-dark" onClick={()=>{this.copiar(this.props.contenido)}}>Copiar</button>
                    <div>{contN}</div>
                    <small className>La publicacion tiene como maximo 350 caracteres :)</small>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>{this.setState({contenidoModificado:""})}}>Close</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>{this.modificarContenido(this.props.idPublicacion),this.setState({contenidoModificado:""})}}>Publicar</button>
            </div>
          </div>
        </div>
      </div>);
        return(
            <div>{eti}</div>
        )
    }
}
class PaginaPrincipal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            usuario:{
                id:this.props.id,
                nombres:"",
                correo:""
            },
            verPerfil:false,
            verPublicacion:0,
            id_publicacion_Modificada:0,
            contenido:""
        };
        this.mostrarInfoPersonal = this.mostrarInfoPersonal.bind(this);
        this.mostrarPublicaciones = this.mostrarPublicaciones.bind(this);
        this.modificarPublicacion = this.modificarPublicacion.bind(this);
    }
    componentDidMount(){
        var usuarios = JSON.parse(localStorage.getItem("usuarios"));
        for(var i=0;i<usuarios.length;i++){
            if(usuarios[i].id==this.props.id){
                var usuario = {
                    id:usuarios[i].id,
                    nombres:usuarios[i].nombres,
                    correo:usuarios[i].correo
                }
                this.setState({usuario})
                break;
            }
        }
    }
    mostrarInfoPersonal(){
        this.setState({verPerfil:true,verPublicacion:0})
    }
    mostrarPublicaciones(){
        if(this.state.verPublicacion==1){
            this.setState({verPerfil:false,verPublicacion:2})
        }if(this.state.verPublicacion==2){
            this.setState({verPerfil:false,verPublicacion:1})
        }if(this.state.verPublicacion==0){
            this.setState({verPerfil:false,verPublicacion:2})
        }
        
    }
    modificarPublicacion(id_publicacion,contenido){
        this.setState({id_publicacion_Modificada:id_publicacion,contenido:contenido})
    }
    render(){
        var etiqInfo = this.state.verPerfil?(<InformacionPersonal usuario={this.state.usuario}></InformacionPersonal>):<div></div>
        if(this.state.verPublicacion==1){
            var etiqPubli1=<Publicacion usuarioID={this.state.usuario.id} clickModificarPublicacion={this.modificarPublicacion} ></Publicacion>
            var etiqPubli2=<div></div>
        }if(this.state.verPublicacion==2){
            var etiqPubli2=<Publicacion usuarioID={this.state.usuario.id} clickModificarPublicacion={this.modificarPublicacion} ></Publicacion>
            var etiqPubli1=<div></div>
        }if(this.state.verPublicacion==0){
            var etiqPubli1=<div></div>
            var etiqPubli2=<div></div>
        }
        var eti =<BarraPublicacion idUsuario={this.state.usuario.id}  clickMostrarPublicacion={this.mostrarPublicaciones}></BarraPublicacion>
        var etiModificaPublicacion = <BarraModificarPublicacion idPublicacion={this.state.id_publicacion_Modificada} contenido={this.state.contenido}></BarraModificarPublicacion>;
        return(
            <div>
                <BarraPaginaPrincipal clickMostrarInfoPersonal={this.mostrarInfoPersonal} 
                clickMostrarPublicacion={this.mostrarPublicaciones} usuarioNombre={this.state.usuario.nombres}></BarraPaginaPrincipal>
                <div>{etiqInfo}</div>
                <div>{etiqPubli1}</div>
                <div>{etiqPubli2}</div>
                <div>{eti}</div>
                <div>{etiModificaPublicacion}</div>
            </div>            
        )
    }
}
class Registro extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
                id:0,
                nombre:"",
                apellido:"",
                correo:"",
                contrasenia:"",
                repeatContrasenia:"",
            
            registrado:false,
            nombres:"",
            mensajeNombreApellido:"",
            mensajeCorreo:"",
            mensajeContrasenia:"",
            mensajeRepeatContrasenia:""
        }
        this.onChangeApellido = this.onChangeApellido.bind(this);
        this.onChangeContrasenia = this.onChangeContrasenia.bind(this);
        this.onChangeCorreo = this.onChangeCorreo.bind(this);
        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeRepeatContrasenia = this.onChangeRepeatContrasenia.bind(this);
        this.validarCorreo = this.validarCorreo.bind(this)
        this.validarNombre = this.validarNombre.bind(this)
        this.validarPassword = this.validarPassword.bind(this)
        this.registrar = this.registrar.bind(this);
        
    }
    onChangeNombre(e){
        this.setState({nombre:e.target.value})
    }
    onChangeApellido(e){
        this.setState({apellido:e.target.value})
    }
    onChangeCorreo(e){
        this.setState({correo:e.target.value})
    }
    onChangeContrasenia(e){
        this.setState({contrasenia:e.target.value})
    }
    onChangeRepeatContrasenia(e){
        this.setState({repeatContrasenia:e.target.value})
    }
    validarCorreo(correo){
        if(correo.length==0){
            this.setState({mensajeCorreo:"Correo en blanco"});
            return false;
        }else{
            for(var c=0;c<correo.length;c++){            
                if(correo.charAt(c)=='@'){
                    var listaUsuarios= JSON.parse(localStorage.getItem("usuarios"));
                    for(var i =0; i <listaUsuarios.length;i++){
                        if(listaUsuarios[i].correo==correo){
                            this.setState({mensajeCorreo:"Cuenta existente con este correo"});
                            return false;
                        }
                    }
                    this.setState({mensajeCorreo:""});
                    return true;
                } 
                if(c==correo.length-1){
                    this.setState({mensajeCorreo:"Correo invalido '@'"});
                    return false;
                } 
            }
        }
    }
    validarPassword(password,repeatPassword){
        if(password.length==0){
            this.setState({mensajeContrasenia:"Contraseña invalido"})
            return false;
        }else{
            if(password==repeatPassword){
                this.setState({mensajeContrasenia:""})
                this.setState({mensajeRepeatContrasenia:""})
                return true;    
            }else{
                this.setState({mensajeRepeatContrasenia:"Contraseñas no coinciden"})
                return false;
            }
        }
    }
    validarNombre(nombre,apellido){
        if(nombre==""){
            this.setState({nombres:apellido})
            this.setState({mensajeNombreApellido:""})
            return true;
        }if(apellido==""){
            this.setState({nombres:nombre})
            this.setState({mensajeNombreApellido:""})
            return true;
        }if(nombre==""&&apellido==""){
            this.setState({mensajeNombreApellido:"Debe ingresar almenos 1 dato en Nombre o Apellido"})
            return false;
        }else{
            this.setState({nombres:nombre+","+apellido})
            this.setState({mensajeNombreApellido:""})
            return true;
        }
    }
    registrar(){
        console.log(this.state);
        if(this.validarCorreo(this.state.correo)&&this.validarNombre(this.state.nombre,this.state.apellido)&&this.validarPassword(this.state.contrasenia,this.state.repeatContrasenia)){
            const usuarios = JSON.parse(localStorage.getItem("usuarios"));
            var usuarioNuevo = {
                id:usuarios.length+1,
                nombres:this.state.nombres,
                correo:this.state.correo,
                contrasenia:this.state.contrasenia
            };
            this.setState({id:usuarioNuevo.id,registrado:true});
            usuarios.splice(usuarios.length,0,usuarioNuevo);
            localStorage.removeItem("usuarios");
            localStorage.setItem("usuarios",JSON.stringify(usuarios)); 
        }
    }
    render(){
        const mensaje1 = !(this.state.mensajeCorreo=="")?(
            <div className="invalidoRegistro">{this.state.mensajeCorreo}</div>
        ):<div className="valido"></div>;
        const mensaje2 = !(this.state.mensajeContrasenia=="")?(
            <div className="invalidoRegistro">{this.state.mensajeContrasenia}</div>
        ):<div className="valido"></div>;
        const mensaje3 = !(this.state.mensajeNombreApellido=="")?(
            <div className="invalidoRegistro">{this.state.mensajeNombreApellido}</div>
        ):<div className="valido"></div>;
        const mensaje4 = !(this.state.mensajeRepeatContrasenia=="")?(
            <div className="invalidoRegistro">{this.state.mensajeRepeatContrasenia}</div>
        ):<div className="valido"></div>;
        var eti = !this.state.registrado?(
            <div>
                <div><br></br></div>
                <div className="row">
                    <button className="btn btn-danger" onClick={this.props.retornar}>Regresar</button>
                </div>
            <div className="row ">
                <div className="col-lg-2 col-xl-2"></div>
            <div className="col-lg-8 col-xl-8 col-md-12 col-sm-12 col-12">
                <div><br></br></div>
                <form className="cuadroRegistro container">
                    <div><br></br></div>
                    <div className="form-row">
                        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12 sbu-registro">
                        <label className="sub-registro" for="validationDefault01">Nombres</label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Nombres" onChange={this.onChangeNombre}></input>
                        </div>
                        <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12">
                        <label className="sub-registro" for="validationDefault02">Apellidos</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Apellidos" onChange={this.onChangeApellido}></input>
                        </div>
                        {mensaje3}
                    </div>
                    <br></br>
                    <div className="form-row">
                        <div className="col-lg col-xl col-md-5 col-sm-12 col-12"></div>
                        <div className="col-lg-5 col-xl-5 col-md-12 col-sm-12 col-12">
                        <label className="sub-registro" for="validationDefaultUsername">Correo</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupPrepend2">@</span>
                            </div>
                            <input type="text" className="form-control" id="validationDefaultUsername" placeholder="Correo" aria-describedby="inputGroupPrepend2" required onChange={this.onChangeCorreo}></input>
                            {mensaje1}
                        </div>
                        </div>
                        <div className="col-lg col-xl col-md-5 col-sm-12 col-12"></div>
                        
                    </div>
                    <br></br>
                    <div className="form-row">
                        <div className="col-lg col-xl col-md-5 col-sm-12 col-12"></div>
                        <div className="col-lg-5 col-xl-5 col-md-12 col-sm-12 col-12">
                        <label className="sub-registro" for="validationDefault03">Contraseña</label>
                        <input type="password" className="form-control" id="validationDefault03" placeholder="Contraseña" required onChange={this.onChangeContrasenia}></input>
                        {mensaje2}
                        </div>
                        <div className="col-lg col-xl col-md-5 col-sm-12 col-12"></div>
                        
                    </div>
                    <br></br>
                    <div className="form-row">
                        <div className="col-lg col-xl col-md-5 col-sm-12 col-12"></div>
                        <div className="col-lg-5 col-xl-5 col-md-12 col-sm-12 col-12">
                        <label className="sub-registro" for="validationDefault04">Repetir contraseña</label>
                        <input type="password" className="form-control" id="validationDefault04" placeholder="Contraseña" required onChange={this.onChangeRepeatContrasenia}></input>
                        {mensaje4}
                        </div>
                        <div className="col-lg col-xl col-md-5 col-sm-12 col-12"></div>
                        
                    </div>
                    <br></br>
                    <div className="row ">
                    <div className="col-lg col-xl col-md col-sm col"></div>
                    <button className="btn btn-primary " onClick={this.registrar}>Registrar</button>
                    <div className="col-lg col-xl col-md col-sm col"></div>
                    </div>
                    
                    <div><br></br></div>
                </form>
            </div>
            </div>
            </div>
        ):<PaginaPrincipal id={this.state.id}></PaginaPrincipal>
        return(
            <div>{eti}</div>
        )
    }
}
class AplicacionWeb extends React.Component{
    constructor(props){
        super(props);
        this.state ={
        };
        
    }
    render(){
        return(
            <div>
                <Login></Login>
                <div className="cuadroPie">
                    <div>Creado por :Ronny Daniel Herrera H.(furiusus)</div>
                    <a href="https://furiusus.github.io/ProyectoSN/README.md">AYUDA{" "}</a>
                    <a href="https://github.com/furiusus/ProyectoSN">DOCUMENTACION</a>
                </div>
            </div>
        )
    }
}
r.render(
    <AplicacionWeb></AplicacionWeb>,
    document.getElementById("aplicacionWeb")
)