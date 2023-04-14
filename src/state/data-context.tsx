import React, {createContext, ReactNode, useState} from "react";
import useGames, {Game} from "../hooks/useGames";
import useGenres, {Genre} from "../hooks/useGenres";
import {AxiosError} from "axios";
import {QuerySearch} from "../hooks/useData";


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
    QueryParams:QuerySearch

}

export const dataContext = createContext<ContextData>({
    games: [],
    genres: [],
    isLoadingGame: false,
    isLoadingGenre: false,
    genreError: null,
    gameError: null,
    setQueryParams:()=>{},
    QueryParams:{}
})

function DataContextProvider({children}: Props) {
    const [QueryParams, setQueryParams] = useState<QuerySearch>({} as QuerySearch)
    const {data: games, error: gameError, isLoading: isLoadingGame} = useGames(QueryParams)
    const {data: genres, error: genreError, isLoading: isLoadingGenre} = useGenres()

    return (
        <dataContext.Provider value={{
            games,
            genres,
            gameError,
            isLoadingGame,
            genreError,
            isLoadingGenre,
            setQueryParams,
            QueryParams
        }}>
            {children}
        </dataContext.Provider>
    );
}

export default DataContextProvider;