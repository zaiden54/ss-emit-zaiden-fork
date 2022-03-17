import React, {useState} from "react"
import { BigTitle } from "../components/BigTitle"
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'


export const DashBoard = (props) => {

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