import useData from "./useData";

export interface Game{
    id:number,
    name:string,
    background_image:string,
    metacritic:number,
    parent_platforms:Platform[]
}
export interface Platform {
    platform:everyPlatform
}
export interface everyPlatform{
    id:number,
    slug:string,
}

function UseGames() {
    return useData<Game>("/games")
}

export default UseGames;