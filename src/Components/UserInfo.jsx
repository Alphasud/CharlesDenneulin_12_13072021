import { getUser } from "../services/user";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserInfo() {
    const [user, setUser] = useState([]);
    const idParams = useParams().id;
    
    useEffect(() => {
        let mounted = true;
        getUser(idParams)
        .then(items => {
        if(mounted) {
         setUser([items.data.userInfos])
        }
        })
            return () => mounted = false;
    }, [idParams])
    
    console.log(user);

    return <article className='user-page__info'>
        <h1>Bonjour <span className='user-page__info__name'>{user.map(el => el.firstName)}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</p>
    </article>
}