import React from 'react';
import {HStack, Switch, Text, useColorMode} from "@chakra-ui/react";

function DarkModeSwitch() {
    const{colorMode,toggleColorMode}=useColorMode()
    return (
        <HStack>
            <Text whiteSpace={"nowrap"}>Dark Mode</Text>
            <Switch colorScheme='green' isChecked={colorMode==="dark"} onChange={toggleColorMode}/>
        </HStack>
    );
}

export default DarkModeSwitch;