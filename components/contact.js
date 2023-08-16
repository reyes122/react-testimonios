import '../css/estilos.css';
import { IconName, BiEnvelopeOpen, BiArch, BiAlarm } from "react-icons/bi";

const Contact = () => {
    return (
        <div>
            <div>
                <form class="formulario" method="get">
                    <h1>Registrate</h1>
                    <div class="contenedor">
                        <div class="input-contenedor">
                            <BiAlarm class="icon" />
                            <input type="text" placeholder="Nombre completo"></input>
                        </div>
                        <div class="input-contenedor">
                            <BiEnvelopeOpen class="icon"></BiEnvelopeOpen>
                            <input type="text" placeholder="Correo"></input>
                        </div>
                        <div class="input-contenedor">
                            <BiAlarm class="icon" />
                            <input type="text" placeholder="Telefono/celular"></input>
                        </div>
                        <div class="input-contenedor">
                            <BiAlarm class="icon" />
                            <input type="password" placeholder="Contraseña"></input>
                        </div>
                        <div class="input-contenedor">
                            <BiAlarm class="icon" />
                            <input type="password" placeholder="Repetir contraeeña"></input>
                        </div>
                        <input type="submit" value="Registrarse" class="button" />
                        <p>Al registrarte, aceptas nuestras Condiciones de uso y
                            Política de privacidad.</p>
                    </div>

                </form>
            </div>
        </div>


    );
}

export default Contact;