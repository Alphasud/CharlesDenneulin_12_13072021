export default function UserInfo(props) {
    
    return <article className='user-page__info'>
        <h1>Bonjour <span className='user-page__info__name'>{props.userName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</p>
    </article>
}

/*{user.map(el => el.firstName)}*/