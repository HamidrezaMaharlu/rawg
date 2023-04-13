import React, {createContext, ReactNode} from "react";
import useGames, {Game} from "../hooks/useGames";
import useGenres, {Genre} from "../hooks/useGenres";
import {AxiosError} from "axios";




interface Props {
    children: ReactNode
}
interface ContextData{
    games:Game[],
    genres:Genre[],
    isLoadingGame:boolean,
    isLoadingGenre:boolean,
    gameError:AxiosError |null
    genreError:AxiosError|null


}
export const dataContext = createContext<ContextData>({
    games:[],
    genres:[],
    isLoadingGame:false,
    isLoadingGenre:false,
    genreError:null,
    gameError:null
})

function DataContextProvider({children}: Props) {
    const {data: games, error:gameError, isLoading:isLoadingGame} = useGames()
    const {data: genres, error:genreError, isLoading:isLoadingGenre} = useGenres()

    return (
        <dataContext.Provider value={{
            games,
            genres,
            gameError,
            isLoadingGame,
            genreError,
            isLoadingGenre
        }}>
            {children}
        </dataContext.Provider>
    );
}

export default DataContextProvider;