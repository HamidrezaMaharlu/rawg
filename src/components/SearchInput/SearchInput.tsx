import React, {useContext, useRef} from 'react';
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";
import {dataContext} from "../../state/data-context";

function SearchInput() {
    const{setQueryParams,QueryParams}=useContext(dataContext)
    const inputRef=useRef<HTMLInputElement>(null)
    return (
        <form onSubmit={(e)=> {
            e.preventDefault()
            if(inputRef.current) setQueryParams({...QueryParams,search:inputRef.current.value})
        }
        }>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={inputRef} borderRadius={20} placeholder="Search games..." variant="filled"/>
            </InputGroup>
        </form>
    );
}

export default SearchInput;