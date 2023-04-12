import {HStack, Image, Switch} from "@chakra-ui/react";
import logo from "../../assets/logo.webp"
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

function Navbar() {
    return (
        <HStack>
            <Image src={logo} boxSize={"60px"} borderRadius={"full"}/>
            <DarkModeSwitch/>
        </HStack>
    );
}

export default Navbar;