import UserInfo from "./UserInfo";
import UserActivityChart from "./UserActivityChart";
import UserTimeChart from "./UserTimeChart";
import UserScoreChart from "./UserScoreChart";
import UserRadarChart from "./UserRadarChart";
import KeyData from "./KeyData";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchURLs } from "../Services/fetchURLs";
import ErrorPage from "./ErrorPage";
import PropTypes from 'prop-types';

function UserPage() {

    const [user, setUser] = useState([]);
    const [error, setError] = useState();
    const idParams = useParams().id;
    
    /**
   * Update the state with the fetched data
   */
    useEffect(() => {
        let mounted = true;
        fetchURLs(idParams)
            .then(items => {
                if (mounted) {
                    setUser([items[0].data])
                }
            })
            .catch(items => {
                if (mounted) {
                    setError(items.message)
                }
            })
        return () => mounted = false;
    }, [idParams, error]);

    const firstName = user.map(el => el.userInfos.firstName.toString());
    const calories = parseInt(user.map(el => el.keyData.calorieCount));
    const formattedCalories = new Intl.NumberFormat('en-EN').format(calories);
    const protein = parseInt(user.map(el => el.keyData.proteinCount));
    const carbohydrate = parseInt(user.map(el => el.keyData.carbohydrateCount));
    const lipid = parseInt(user.map(el => el.keyData.lipidCount));
    
    if(error) {
        return <ErrorPage />;
    }
        return <section className="user-page">
                <UserInfo userName={firstName} />
                <div className="user-page__graph">
                    <div className="user-page__graph__left">
                        <UserActivityChart />
                        <div className="user-page__graph__left__bottom">
                            <UserTimeChart />
                            <UserRadarChart />
                            <UserScoreChart />
                        </div>
                    </div>
                    <div className="user-page__graph__right">
                        <KeyData
                            count={`${formattedCalories}kCal`}
                            name="Calories"
                            picture="energy"
                        />
                        <KeyData
                            count={`${protein}g`}
                            name="Proteines"
                            picture="chicken"
                        />
                        <KeyData
                            count={`${carbohydrate}g`}
                            name="Glucides"
                            picture="apple"
                        />
                        <KeyData
                            count={`${lipid}g`}
                            name="Lipides"
                            picture="cheeseburger"
                        />
                    </div>
                </div>
    </section>

}

UserPage.propTypes = {
    idParams: PropTypes.number,
    user: PropTypes.array
};

export default UserPage;