import React, {ReactNode} from 'react';
import {SimpleGrid} from "@chakra-ui/react";

interface Props{
    children:ReactNode
}

function GameGrid(props:Props) {
    return (
        <SimpleGrid columns={{sm:1,md:2,lg:3}} spacing={6} padding={4}>
            {props.children}
        </SimpleGrid>
    );
}

export default GameGrid;