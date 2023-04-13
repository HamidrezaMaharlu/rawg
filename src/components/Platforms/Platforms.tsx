import React from 'react';
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import {HStack, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";
import {Platform} from "../../hooks/useGames";

interface Props {
    platforms: Platform[]
}

const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
}

function Platforms({platforms}: Props) {
    console.log(platforms)

    return (
        <HStack marginY={3}>
            {platforms.map(item => <Icon as={iconMap[item.platform.slug]} key={item.platform.id} color={"gray.500"}/>)}
        </HStack>
    );
}

export default Platforms;