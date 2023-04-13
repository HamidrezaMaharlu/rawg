import {HStack, Image} from "@chakra-ui/react";
import logo from "../../assets/logo.webp"
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import SearchInput from "../SearchInput/SearchInput";

function Navbar() {
    return (
        <HStack>
            <Image src={logo} boxSize={"60px"} borderRadius={"full"}/>
            <SearchInput/>
            <DarkModeSwitch/>
        </HStack>
    );
}

export default Navbar;