import Card from "../../components/Card/Card"
import Header from "../../components/Header/Header"
import Nav from "../../components/Navegar/Navegar"
import TituloHeader from "../../components/TituloHeader/TituloHeader"
import {SectionCard} from "./styles"
function Home() {
    return (
        <>
            <Header />
            <TituloHeader/>
            <Nav/>
            <Card />

            <SectionCard>
                <Card/>
                <Card/>
                <Card/>
            </SectionCard>
        </>
    )
}

export default Home