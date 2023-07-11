import menu from "../../assets/menu.png"
import group from "../../assets/Group.png"
import { PrimeiroMenu } from "./styles"
import { BotaoNavegacao } from "./styles"

function Header() {
    return (
        <PrimeiroMenu>
            <BotaoNavegacao>
                <img src={menu} width="20px" height="20px" />
            </BotaoNavegacao>
            <BotaoNavegacao>
                <img src={group} width="20px" height="20px"/>
            </BotaoNavegacao>
        </PrimeiroMenu>
    )
}
export default Header