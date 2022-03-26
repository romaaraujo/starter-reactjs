import React, { useEffect, useState } from 'react';
import ApiService from './../../services/ApiService'

const HomePage = () => {

    const [listUser, setUser] = useState();

    document.title = `${global.config.appName}`
    
    useEffect(() => {
        ApiService.get("/users")
            .then((response) => setUser(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err)
            });
    }, [])

    return (
        <>
            testse<br/>

            {listUser?.map((v,i) => {
                return <li>{v.name}</li>
            })}
        </>
    )
}


export default HomePage
