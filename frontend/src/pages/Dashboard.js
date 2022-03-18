import React, {useState, useEffect, useContext} from "react"
import { BigTitle } from "../components/BigTitle"
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { useHttp } from "../hooks/http.hooks"
import { AuthContext } from '../contexts/AuthContext'


export const DashBoard = (props) => {

    const { request } = useHttp()
    const auth = useContext(AuthContext)

    const [user, setUser] = useState({
        name: '',
        mail: '',
    })

    if (props.user) {
        setUser({
            ...user,
            name: props.name,
            mail: props.mail
        })
    }

    useEffect( async () => {

        const data = JSON.parse(localStorage.getItem('userData'))
        console.log(data.userId)
        const userData = await request('/api/user/info?userId=' + data.userId)

        setUser({
            ...user,
            name: userData.name,
            mail: userData.login
        })

    })

    return(
        <div className="dashboard">
            <Navbar />
            <div className="">
                <BigTitle title={'Личный кабинет'} />
                <BigTitle title={user.name} />
                <div className="logout-button">
                    <button onClick={() => {
                        auth.logout()
                    }}>Выйти</button>
                </div>
            </div>
            <Footer />
        </div>
        
    )

}