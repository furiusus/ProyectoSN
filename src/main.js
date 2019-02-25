if(localStorage.getItem("usuarios")==null){
    var usuarios = [{"id":1,"nombres":"Ronny Daniel, Herrera Herrera","correo":"rherrerah@uni.pe","contrasenia":"ronny"},{"id":2,"nombres":"Mary Carmen, Herrera Herrera","correo":"mherrera@gmail.com","contrasenia":"mary"}]
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
}
if(localStorage.getItem("publicaciones")==null){
    var publicaciones = [{"id_publicacion":1, "contenido":"Publicacion 1 con mucho contenido", "id_usuario":1,"listaUsuariosLike":[1]},{"id_publicacion":2, "contenido":"Publicacion 2 con mucho contenido", "id_usuario":1,"listaUsuariosLike":[1,2]},{"id_publicacion":3, "contenido":"Publicacion 3 con mucho contenido", "id_usuario":1,"listaUsuariosLike":[1,2]},{"id_publicacion":4, "contenido":"Publicacion 4 con mucho contenido", "id_usuario":1,"listaUsuariosLike":[2]},{"id_publicacion":5, "contenido":"Publicacion 5 con mucho contenido", "id_usuario":1,"listaUsuariosLike":[2]},{"id_publicacion":6, "contenido":"Publicacion 6 con mucho contenido", "id_usuario":2,"listaUsuariosLike":[2]},{"id_publicacion":7, "contenido":"Publicacion 7 con mucho contenido", "id_usuario":2,"listaUsuariosLike":[2]},{"id_publicacion":8, "contenido":"Publicacion 8 con mucho contenido", "id_usuario":2,"listaUsuariosLike":[1,2]},{"id_publicacion":9, "contenido":"Publicacion 9 con mucho contenido", "id_usuario":2,"listaUsuariosLike":[1,2]},{"id_publicacion":10, "contenido":"Publicacion 10 con mucho contenido", "id_usuario":2,"listaUsuariosLike":[1]}]
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
            id:0
        }
        this.correoChange=this.correoChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.entrar = this.entrar.bind(this);
        this.validarCorreo = this.validarCorreo.bind(this);
        this.validarPassword = this.validarPassword.bind(this);
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
                    }
                    break;
                }else{
                    this.setState({mensajeCorreo:"Correo no registrado"});
                }
            }
        }
        var usuarios = null;
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
        <div ><br></br><br></br><br></br><br></br><br></br><br></br></div>
        <div className="row container" >
        <div className="col-sm-2 col-lg-4"></div>
        <div className="col-12 col-sm-8 col-lg-4 fondoLogin">
            <br></br>
            <form >
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
                <button className="btn btn-primary" onClick={this.entrar}>Entrar</button>
            </div>
            <br></br>
            <br></br>
        </div>
        <div className="col-sm-2"></div>
        </div>
        <div><br></br><br></br><br></br><br></br><br></br><br></br></div>
        </div>):<PaginaPrincipal id={this.state.id}></PaginaPrincipal>
        return(
            <div>
                {etiqueta}
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
            <a className="navbar-brand" href="#">Natural Social Network</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={props.clickMostrarInfoPersonal}>Informacion Personal</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={props.clickMostrarPublicacion}>Publicaciones</a>
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
        }
        this.buscarAutor = this.buscarAutor.bind(this);
        this.liked = this.liked.bind(this);
    }
    componentDidMount(){
        this.setState({id:this.props.usuarioID})
        var publicaciones = JSON.parse(localStorage.getItem("publicaciones"));
        publicaciones.sort(function(a,b){return b.id_publicacion-a.id_publicacion})
        this.setState({publicaciones:publicaciones})
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
    liked(id_usuario,listaUsuariosLike){
        for(var i = 0; i<listaUsuariosLike.length;i++){
            if(listaUsuariosLike[i]==id_usuario){
                return true;
                break;
            }
        }
        return false;
    }
    render(){
        var lista = this.state.publicaciones;
        const etiq = lista.map(publicacion=>
            <tr><td classsName="">
                <div className="">
                    {publicacion.contenido}
                </div>
                <div className="">
                    {this.buscarAutor(publicacion.id_usuario)}
                </div>        
                <div className="text-right">
                    {publicacion.listaUsuariosLike.length}
                    <button type="button" className="button">
                        {!this.liked(this.state.id,publicacion.listaUsuariosLike)?(<ion-icon name="thumbs-up"></ion-icon>):(<ion-icon name="thumbs-down"></ion-icon>)}                        
                    </button>
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
            listaUsuariosLike:[]
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
              <h5 className="modal-title" id="exampleModalLabel">Natural Social Network</h5>
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
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
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
            verPublicacion:false,
            
        };
        this.mostrarInfoPersonal = this.mostrarInfoPersonal.bind(this);
        this.mostrarPublicaciones = this.mostrarPublicaciones.bind(this);
        
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
        this.setState({verPerfil:true,verPublicacion:false})
    }
    mostrarPublicaciones(){
        this.setState({verPerfil:false,verPublicacion:true})
    }
    render(){
        var etiqInfo = this.state.verPerfil?(<InformacionPersonal usuario={this.state.usuario}></InformacionPersonal>):<div></div>
        var etiqPubli = this.state.verPublicacion?(<Publicacion usuarioID={this.state.usuario.id} ></Publicacion>):<div></div>
        var eti =<BarraPublicacion idUsuario={this.state.usuario.id}  clickMostrarPublicacion={this.mostrarPublicaciones}></BarraPublicacion>
        return(
            <div>
                <BarraPaginaPrincipal clickMostrarInfoPersonal={this.mostrarInfoPersonal} 
                clickMostrarPublicacion={this.mostrarPublicaciones}></BarraPaginaPrincipal>
                <div>{etiqInfo}</div>
                <div>{etiqPubli}</div>
                <div>{eti}</div>
            </div>            
        )
    }
}
class AplicacionWeb extends React.Component{
    constructor(props){
        super(props)
        this.state ={
        }
    }
    render(){
        return(
            <Login ></Login>
        )
    }
}
r.render(
    <AplicacionWeb></AplicacionWeb>,
    document.getElementById("aplicacionWeb")
)