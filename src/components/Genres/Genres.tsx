import React, {useContext} from 'react';
import {dataContext} from "../../state/data-context";
import {HStack, Img, Link} from "@chakra-ui/react";

function GenresAside() {
    const {genres,setQueryParams,QueryParams} = useContext(dataContext)

    return (
        <>
            {genres.map(item=><HStack key={item.id} onClick={()=>setQueryParams({...QueryParams,genres:item.id})} marginY={5}><Img width={5} height={5}
                                                      src={item.image_background}/><Link fontWeight={item.id === QueryParams?.genres ? "bold" : "normal"} textDecoration={item.id === QueryParams?.genres ? "underline" : "unset"}>{item.name}</Link></HStack>)}
        </>
    );
}

export default GenresAside;