import React, {createContext, ReactNode, useState} from "react";
import useGames, {Game} from "../hooks/useGames";
import useGenres, {Genre} from "../hooks/useGenres";
import {AxiosError} from "axios";
import {QuerySearch} from "../hooks/useData";
import usePlatforms, {PlatformsParent}from "../hooks/usePlatforms";


interface Props {
    children: ReactNode
}

interface ContextData {
    games: Game[],
    genres: Genre[],
    isLoadingGame: boolean,
    isLoadingGenre: boolean,
    gameError: AxiosError | null
    genreError: AxiosError | null,
    setQueryParams:({}:QuerySearch)=>void
    QueryParams:QuerySearch,
    platforms:PlatformsParent[],
    setSelectedPlatform:(platform:string)=>void,
    selectedPlatform:string,
    setSortOrder: (sortOrder: string) => void;
    sortOrder: string;

}

export const dataContext = createContext<ContextData>({
    games: [],
    genres: [],
    isLoadingGame: false,
    isLoadingGenre: false,
    genreError: null,
    gameError: null,
    setQueryParams:()=>{},
    QueryParams:{},
    platforms:[],
    setSelectedPlatform:()=>{},
    selectedPlatform:"Platforms",
    sortOrder:"",
    setSortOrder:()=>{}

})

function DataContextProvider({children}: Props) {
    const [QueryParams, setQueryParams] = useState<QuerySearch>({} as QuerySearch)
    const [selectedPlatform, setSelectedPlatform] = useState("Platforms")
    const [sortOrder, setSortOrder] = useState("")
    const {data: games, error: gameError, isLoading: isLoadingGame} = useGames(QueryParams)
    const {data: genres, error: genreError, isLoading: isLoadingGenre} = useGenres()
    const {data: platforms} = usePlatforms()

    return (
        <dataContext.Provider value={{
            games,
            genres,
            gameError,
            isLoadingGame,
            genreError,
            isLoadingGenre,
            setQueryParams,
            QueryParams,
            platforms,
            setSelectedPlatform,
            selectedPlatform,
            sortOrder,
            setSortOrder
        }}>
            {children}
        </dataContext.Provider>
    );
}

export default DataContextProvider;