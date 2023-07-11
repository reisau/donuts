import { BotaoEstilo } from "./styles.jsx"


function Botao(props){
    return(
        <BotaoEstilo>
            {props.titulo}
        </BotaoEstilo>

    )

}

export default Botao