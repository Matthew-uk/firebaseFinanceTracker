import { useState, useEffect } from "react"

export const useFetch = () => {
  
    const [ url , setUrl ] = useState('')
    const [ data, setdata ] = useState('')
    const [ isLoading, setIsLoading ] = useState(null)
    const [ error, setError ] = useState(null)

    useEffect(() => {
       const fetchData = async () => {
         try{
            setIsLoading(true)
            setError(null)

            const response = await fetch(url)
            const json = await response.json()
            setdata(json)
            
            setIsLoading(false)
            setError(null)
         } catch (error) {
            console.log('could not completet action')
            setError(error)
         }
       }

       fetchData()

    }, [ url ])

    return { data, isLoading, error }
}