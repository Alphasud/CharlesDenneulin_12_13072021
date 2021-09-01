import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchURLs } from "../Services/fetchURLs";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";
import FourOFour from "./FourOFour";

/**
 * Component that update the states with fetched datas and display an error page, a loading page, or userpage accordingly.
 * @component
  */
function Container() {

    const [allDatas, setAllDatas] = useState([]);
    const [error, setError] = useState();
    const idParams = parseInt(useParams().id);

    useEffect(() => {
        let mounted = true;
        fetchURLs(idParams)
            .then(items => {
                if (mounted) {
                    setAllDatas(items);
                }
            })
            .catch(items => {
                if (mounted) {
                    setError(items.message);
                }
            })
        return () => mounted = false;
    }, [idParams, error]);

    if (idParams !== 12 && idParams !== 18) { return <FourOFour /> }

    if(allDatas === "error") { return <ErrorPage /> }

    if(allDatas.length < 1) { return <LoadingPage /> }
    
    return (
       <UserPage data={allDatas} /> 
    )
}

export default Container;