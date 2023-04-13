import React from 'react';
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";

function SearchInput() {
    return (
        <form>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input borderRadius={20} placeholder="Search games..." variant="filled"/>
            </InputGroup>
        </form>
    );
}

export default SearchInput;