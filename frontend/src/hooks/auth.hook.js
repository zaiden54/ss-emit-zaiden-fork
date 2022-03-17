import { useState, useCallback, useEffect } from "react"


// const { login, logout } = useAuth()

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)

    // console.log('render')

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

    })

    const logout = useCallback( () => {
        
    }, [])


    return { login, logout }

}