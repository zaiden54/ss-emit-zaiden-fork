import React, {useState, useEffect} from "react"
import { BigTitle } from "../components/BigTitle"
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { useHttp } from "../hooks/http.hooks"


export const DashBoard = (props) => {

    const { request } = useHttp()

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

    }, [request, user])

    return(
        <div className="dashboard">
            <Navbar />
            <div className="">
                <BigTitle title={'Личный кабинет'} />
                <BigTitle title={user.name} />
            </div>
            <Footer />
        </div>
        
    )

}