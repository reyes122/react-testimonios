import { IconName, BiEnvelopeOpen, BiArch, BiAlarm } from "react-icons/bi";

const Home = () => {
    return (
        <div>
            <form class="formulario" method="get">
                <h1>Cargar Articulo</h1>
                <div class="input-contenedor">

                    <select name="select">
                        <option value="value2" selected>Tipo Subsistema</option>
                        <option value="value1">Universidad Tecnologica</option>
                        <option value="value2">Universidad Politecnica</option>
                        <option value="value3">Instituto Tecnologico</option>
                    </select>
                </div>

                <div class="mb-3">
                    
                    <input type="email" class="form-control" id="mail"
                        placeholder="Título del Artículo"></input>
                </div>

                <div class="mb-3">
                    <input type="email" class="form-control" id="mail"
                        placeholder="Autor"></input>
                </div>

                <div class="mb-3">

                    <textarea class="form-control" id="text-area" rows="3" placeholder="Breve resumen"></textarea>
                    
                </div>


                <div class="mb-3">
                    <input type="file"></input>
                </div>

                <input type="submit" value="Cargar Articulo" class="button"/>

            </form>
        </div>
    );
}

export default Home;