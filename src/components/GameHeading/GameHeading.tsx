import { Heading } from '@chakra-ui/react'
import {useContext} from "react";
import {dataContext} from "../../state/data-context";



const GameHeading = () => {
    const{QueryParams}=useContext(dataContext)
    const heading = `${QueryParams?.parent_platforms || ''} ${QueryParams?.genres || ''} Games`;

    return (
        <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
    )
}

export default GameHeading