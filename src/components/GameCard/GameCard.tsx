import {Card, CardBody, Heading, HStack, Img} from "@chakra-ui/react";
import {Game} from "../../hooks/useGames";
import Platforms from "../Platforms/Platforms";


function GameCard({background_image, name,parent_platforms}: Game) {
    return (
        <Card borderRadius={8} overflow={"hidden"}>
            <Img src={background_image} height={200}/>
            <CardBody>
                <Heading fontSize={"xl"}>{name}</Heading>
                <HStack>
                    <Platforms platforms={parent_platforms}/>
                </HStack>
            </CardBody>
        </Card>
    );
}

export default GameCard;