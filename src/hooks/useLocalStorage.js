import React , { useState , useEffect } from 'react'

export const UseLocalStorage = (key , initalValue) => {
    const [value , setValue] = useState(() => {
        const jsonValue = JSON.parse(localStorage.getItem(key))

        if(jsonValue !== null) {
            return jsonValue
        }

        return initalValue

    })
 
    useEffect(() => {
        localStorage.setItem(key , JSON.stringify(value))
    } , [key , value])

    return [value , setValue]
}