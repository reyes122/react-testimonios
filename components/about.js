import '../css/estilos.css'

const About = () => {
    return(
        <div>
           <div>
               <form class="formulario" mthod="get">
                     <h1>Login</h1>
                   <div class="contenedor">
                       <div class="input-contenedor">
                           <input type="text" placeholder="Correo"></input>

                       </div>
                       <div class="input-contenedor">
                           <input type="password" placeholder="Contraseña"></input>

                       </div>

                       <input type="submit" value="Login" class="button"/>

                       <p>Al Registrarse, aceptas nuestras Condiciones de uso y Politica de Privacidad.</p>
                       <p class="signup">¿No tienes una cuenta?</p> 
                       <a rel="noopener noreferrer" href="./components/contact.js" class="">Registrate!</a>

                   </div>
                   </form>
           </div>


        </div>
    )
}
export default About;