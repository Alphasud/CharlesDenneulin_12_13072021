import PropTypes from 'prop-types';
/**
 * Component that display the user's name.
 * @component
  */
export default function UserInfo(props) {
    
    return <article className='user-page__info'>
        <h1>Bonjour <span className='user-page__info__name'>{props.userName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</p>
    </article>
}

UserInfo.propTypes = {
    /**
 * User's name
  */
    userName: PropTypes.string
};