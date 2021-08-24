import React from "react";
import UserInfo from "./UserInfo";
import UserActivityChart from "./UserActivityChart";
import UserTimeChart from "./UserTimeChart";
import UserScoreChart from "./UserScoreChart";
import UserRadarChart from "./UserRadarChart";
import KeyData from "./KeyData";
import PropTypes from "prop-types";



function UserPage(props) {
    
    const firstName = props.data[0].data.userInfos.firstName;
    const calories = props.data[0].data.keyData.calorieCount;
    const formattedCalories = new Intl.NumberFormat('en-EN').format(calories);
    const protein = props.data[0].data.keyData.proteinCount;
    const carbohydrate = props.data[0].data.keyData.carbohydrateCount;
    const lipid = props.data[0].data.keyData.lipidCount;
    
    const activityDatas = props.data[1].data.sessions;
    const timeDatas = props.data[3].data.sessions;
    const radarDatas = props.data[2].data.data;

    let scoreDatas;
    props.data[0].data.todayScore ? scoreDatas = props.data[0].data.todayScore : scoreDatas = props.data[0].data.score;
    
        return <section className="user-page">
                <UserInfo userName={firstName} />
                <div className="user-page__graph">
                    <div className="user-page__graph__left">
                        <UserActivityChart data={activityDatas} />
                        <div className="user-page__graph__left__bottom">
                            <UserTimeChart data={timeDatas}/>
                            <UserRadarChart data={radarDatas}/>
                            <UserScoreChart data={parseFloat(scoreDatas)}/>
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
    data: PropTypes.array
};

export default UserPage;