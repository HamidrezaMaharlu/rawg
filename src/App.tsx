import './App.css'
import {Grid, GridItem, Show} from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <>
        <Grid
            templateAreas={{
            base:`"nav" "main"`,
            lg:`"nav nav" "aside main"`
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
            <GridItem area={"main"}>main</GridItem>
        </Grid>
    </>
  )
}

export default App
