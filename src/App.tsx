import './App.css'
import {Grid, GridItem, Show} from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import {useContext} from "react";
import {dataContext} from "./state/data-context";
import GameCard from "./components/GameCard/GameCard";
import GameGrid from "./components/GameGrid/GameGrid";

function App() {
    const {games} = useContext(dataContext)
    console.log(games)

    return (
        <>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`
                }}
                templateColumns={{
                    base: '1fr',
                    lg: '250px 1fr'
                }}
            >
                <GridItem area={"nav"}>
                    <Navbar/>
                </GridItem>
                <Show above={"lg"}>
                    <GridItem area={"aside"}>aside</GridItem>
                </Show>
                <GridItem area={"main"}>
                    <GameGrid>
                        {games.map(item => <GameCard key={item.id} id={item.id} name={item.name}
                                                     background_image={item.background_image}
                                                     metacritic={item.metacritic} parent_platforms={item.parent_platforms}/>)}
                    </GameGrid>
                </GridItem>
            </Grid>
        </>
    )
}

export default App
