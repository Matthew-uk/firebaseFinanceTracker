import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [ error, setError ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false)
    const { dispatch } = useAuthContext()
    let response 

    const login = async (email, password) => {
        try{
            setError(null)
            setIsLoading(true)
            response = await axios({
                method:"POST",
                url:"https://lecturefree-api.vercel.app/api/v1/users/login",
                data: {
                    email,
                    password
                }
            });

            if(!response.data.status === 'success'){
                throw new Error('could not complete login')
            }
            // alert(`success, your logged in`)
            console.log(response)

            // dispatch login action
            dispatch({ type:'LOGIN', payload: response.data.user })
            setError(null)
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            console.log(error.response.data.message)
            setError(error.response.data.message)
        }
    };
    return { error, isLoading, response, login }
}