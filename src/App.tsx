import './App.css'
import {Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import {useContext} from "react";
import {dataContext} from "./state/data-context";
import GameCard from "./components/GameCard/GameCard";
import GameGrid from "./components/GameGrid/GameGrid";
import GenresAside from "./components/GenresAside/GenresAside";
import PlatFormSelector from "./components/PlatformSelector/PlatFormSelector";
import SortSelector from "./components/SortSelector/SortSelector";
import GameHeading from "./components/GameHeading/GameHeading";
import GameCardSkeleton from "./components/Skeleton/Skeleton";


function App() {
    const {games,isLoadingGame} = useContext(dataContext)
    const skeleton=[1,2,3,4,5,6,7,8,9]
    return (
        <div className={"app"}>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`
                }}
                templateColumns={{
                    base: '1fr',
                    lg: '250px 1fr'
                }}>
                <GridItem area={"nav"}>
                    <Navbar/>
                </GridItem>
                <Show above={"lg"}>
                    <GridItem area={"aside"}>
                        <GenresAside/>
                    </GridItem>
                </Show>
                <GridItem area={"main"}>
                    <GameHeading/>
                    <HStack marginLeft={4}>
                        <PlatFormSelector/>
                        <SortSelector/>
                    </HStack>
                    <GameGrid>
                        {isLoadingGame&&skeleton.map(item=><GameCardSkeleton key={item}/>)}
                        {!isLoadingGame&&games.map(item => <GameCard key={item.id} id={item.id} name={item.name}
                                                     background_image={item.background_image}
                                                     metacritic={item.metacritic}
                                                     parent_platforms={item.parent_platforms}/>)}
                    </GameGrid>
                </GridItem>
            </Grid>
        </div>
    )
}

export default App
