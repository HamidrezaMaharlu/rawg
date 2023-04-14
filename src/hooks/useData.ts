import  {useEffect, useState} from 'react';
import apiCall from "../services/axios"


interface fetchRequest<T>{
    count:number,
    results:T[]
}
export interface QuerySearch{
    genres?:number | null
    ordering?:string | null
    parent_platforms?:number| null
}

function useData<T>(endpoint:string,QueryParams?:QuerySearch) {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        apiCall.get<fetchRequest<T>>(endpoint,{params:QueryParams}).then(res => setData(res.data.results)).catch(err => setError(err)).finally(() => setIsLoading(false))
    }, [QueryParams])

    return {data, error, isLoading}
}

export default useData;