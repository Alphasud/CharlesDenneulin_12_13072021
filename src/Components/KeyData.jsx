import PropTypes from 'prop-types';

/**
 * Component that build the user's key datas display.
 * @component
*/
function keyData(props) {

    return <article className="user-page__graph__right__keyData">
        <div className={`user-page__graph__right__keyData__${props.name}`}>
            <img src={`${process.env.PUBLIC_URL}/images/${props.picture}.png`} alt={props.name} />
        </div>
        <div>
            <p className="user-page__graph__right__keyData__count">{props.count}</p>
            <p className="user-page__graph__right__keyData__name">{props.name}</p>
        </div>
    </article>
}

keyData.propTypes = {
    /**
    * Data name
    */
    name: PropTypes.string,
    /**
    * Data picture
    */
    picture: PropTypes.string,
    /**
    * data value
    */
    count: PropTypes.string,
};

export default keyData;