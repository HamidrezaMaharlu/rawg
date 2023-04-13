import {Card, CardBody, Heading, HStack, Img} from "@chakra-ui/react";
import {Game} from "../../hooks/useGames";
import Platforms from "../Platforms/Platforms";
import CriticScore from "../CriticScore/CriticScore";


function GameCard({background_image, name,parent_platforms,metacritic}: Game) {
    return (
        <Card borderRadius={8} overflow={"hidden"}>
            <Img src={background_image} height={200}/>
            <CardBody>
                <Heading fontSize={"xl"}>{name}</Heading>
                <HStack justifyContent={"space-between"}>
                    <Platforms platforms={parent_platforms}/>
                    <CriticScore score={metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    );
}

export default GameCard;