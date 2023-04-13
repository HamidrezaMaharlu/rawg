import React, {useEffect, useState} from 'react';
import apiCall from "../services/axios"


interface fetchRequest<T>{
    count:number,
    results:T[]
}

function useData<T>(endpoint:string) {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        apiCall.get<fetchRequest<T>>(endpoint).then(res => setData(res.data.results)).catch(err => setError(err)).finally(() => setIsLoading(false))
    }, [])

    return {data, error, isLoading}
}

export default useData;