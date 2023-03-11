import axios from 'axios'
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';


export const useSignup = () => {
    const [ error, setError ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false)
    const { dispatch } = useAuthContext()
    let response

 const signup = async (
    fullName,
    email, 
    password, 
    confirmPassword, 
    school, 
    level,
    course  ) => {

    try{
        setIsLoading(true)
        setError(false)
        response = await axios({
            method: 'POST',
            // url: 'http://localhost:5000/api/v1/users/signup',
            url: 'https://lecturefree-api.vercel.app/api/v1/users/signup',
            data: {
                name:fullName,
                email, 
                password, 
                confirmPassword, 
                school, 
                levelOfEducation: level,
                study: course
            }
        });

        if(!response.data.status === 'success'){
            throw new Error('could not complete signup')
        }
        // alert( `success, your logged in`)
        console.log(response)

        // dispatch Login action
        dispatch({ type:'LOGIN', payload: response.data.user })

        setError(null)
        setIsLoading(false)

    } catch (error){
        console.log(error.response.data)
        setError(error.response.data.message)
    }
};
    return { error, isLoading, response, signup }

}