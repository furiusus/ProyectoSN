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
            correo:""
        }
        this.correoChange=this.correoChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.entrar = this.entrar.bind(this);
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
    entrar(){
        //lectura de datos - yo quria acerlo con axios :'c
        var usuarios = JSON.parse(localStorage.getItem("usuarios"));
        console.log(usuarios);
        for(var i=0 ; i< usuarios.length;i++){
            console.log(usuarios[i].correo);
            if(usuarios[i].correo==this.state.correo){
                console.log("entro");
            }else{
                this.state.mensaje("Correo no existe")
            }
        }
        var usuarios = null;
    }
    render(){
        const etiqueta = !this.state.entrar?(<div className="row container" >
        <div className="col-sm-4 "></div>
        <div className="col-12 col-sm-4 col-lg-4">
            <form>
                <div className="form-group">
                    <label for="nombre"  >Correo:</label>
                    <input onChange={this.correoChange} className="form-control" type="email" id="correo" placeholder="Ingrese correo" ></input>
                </div>
                <div className="form-group">
                    <label for="contrasenia">Contraseña:</label>
                    <input onChange={this.passChange} className="form-control" type="password" id="contrasenia" placeholder="Ingrese contraseña"></input>
                </div>
                <div>{this.state.mensaje}</div>
            </form>
            <div className="col-12 container text-center">
                <button className="btn btn-primary" onClick={this.entrar}>Entrar</button>
            </div>
        </div>
        <div className="col-sm-4"></div>
    </div>):<PaginaPrincipal first_name={this.state.nombre}></PaginaPrincipal>
        return(
            <div>
                {etiqueta}
            </div>
        );
    }
}
class PaginaPrincipal extends React.Component{
    constructor(props){
        super(props)
        this.state={
            persona:{
            }
        }
    }
    render(){
        return(
            <div>
                <div>Estas adentro</div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Navbar</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">{this.state.persona.first_name}<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                </nav>
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
    visualizar(){

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