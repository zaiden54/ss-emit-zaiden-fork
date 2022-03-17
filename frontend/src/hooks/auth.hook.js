import { useState, useCallback, useEffect } from "react"

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)


    const login = useCallback( (jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)

        localStorage.setItem('userData', JSON.stringify({
            token: jwtToken,
            userId: id
        }))

    }, [])

    useEffect( () => {
        const userData = JSON.parse(localStorage.getItem('userData'))

        if ( data && data.token ) {
            login(data.token, data.userId)
        }

    }, [login])

    const logout = useCallback( () => {
        setToken(тгдд)
        setUserId(тгдд)

        localStorage.setItem('userData', JSON.stringify({
            token: jwtToken,
            userId: id
        }))
    }, [])


    return { login, logout }

}