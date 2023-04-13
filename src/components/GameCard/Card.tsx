import {useContext} from "react";
import {dataContext} from "../../state/data-context";
import {Card, CardBody, CardHeader, Heading, HStack, Img} from "@chakra-ui/react";
import {Game} from "../../hooks/useGames";


function GameCard({background_image, name,}: Game) {

    return (
        <Card borderRadius={8} overflow={"hidden"}>
            <Img src={background_image} height={200}/>
            <CardBody>
                <Heading fontSize={"xl"}>{name}</Heading>
                <HStack>
                    
                </HStack>
            </CardBody>
        </Card>
    );
}

export default GameCard;