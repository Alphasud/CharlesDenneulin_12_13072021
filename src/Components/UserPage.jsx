import UserInfo from "./UserInfo";
import UserActivityChart from "./UserActivityChart";
import UserTimeChart from "./UserTimeChart";
import UserScoreChart from "./UserScoreChart";
import UserRadarChart from "./UserRadarChart";
import Proteins from "./Proteins";
import Calories from "./Calories";
import Fat from "./Fat";
import Carbohydrates from "./Carbohydrates";

function UserPage() {
    return <section className="user-page">
        <UserInfo />
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
                <Calories />
                <Proteins />
                <Carbohydrates />
                <Fat />
            </div>
        </div>
    </section>
}

export default UserPage;