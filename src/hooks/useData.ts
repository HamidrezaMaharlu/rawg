import  {useEffect, useState} from 'react';
import apiCall from "../services/axios"


interface fetchRequest<T>{
    count:number,
    results:T[]
}
export interface QuerySearch{
    genres?: {id:number,name:string} | null
    ordering?:string | null
    parent_platforms?: { id:number,name:string }| null
    search:string|null
}

function useData<T>(endpoint:string,QueryParams?:QuerySearch) {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        apiCall.get<fetchRequest<T>>(endpoint,{params: {genres:QueryParams?.genres?.id,ordering:QueryParams?.ordering,parent_platforms:QueryParams?.parent_platforms?.id,search:QueryParams?.search}}).then(res => setData(res.data.results)).catch(err => setError(err)).finally(() => setIsLoading(false))
    }, [QueryParams])

    return {data, error, isLoading}
}

export default useData;