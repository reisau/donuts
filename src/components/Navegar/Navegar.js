import Frame8 from "../../assets/Frame8.png"
import { ContainerNav} from "./styles"
import Botao from "../Botao/Botao"





function Nav(){
    return(
        <ContainerNav>
            <Botao titulo={"Donuts"}/>
            <Botao titulo={"Ice cream"}/>
            <Botao titulo={"Bomboloni"}/>
            <img src={Frame8}/>
        </ContainerNav>
    )
}

export default Nav