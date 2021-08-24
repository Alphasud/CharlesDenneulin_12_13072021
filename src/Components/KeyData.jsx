import PropTypes from 'prop-types';

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
    name: PropTypes.string,
    picture: PropTypes.string,
    count: PropTypes.string,
};

export default keyData;