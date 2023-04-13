import React from 'react';
import useData from "./useData";

interface Game{
    id:number,
    name:string,
    background_image:string,
    metacritic:number,
    platforms:Platform[]
}
interface Platform {
    platform:{platform:{id:number,name:string}}
}

function UseGames() {
    return useData<Game>("/games")
}

export default UseGames;