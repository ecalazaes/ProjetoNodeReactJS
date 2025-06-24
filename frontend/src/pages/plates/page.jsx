import plateServices from "../../services/plates.jsx";
import {useEffect} from "react";
import Loading from "../loading/page.jsx";

export default function Plates(){

    const {getAvailablePlates, platesList, plateLoading, refetchPlates} = plateServices()

    useEffect(() => {
       if (refetchPlates) {
           getAvailablePlates()
        }
    }, [refetchPlates]);

    if (plateLoading) {
        return (<Loading />)
    }

    console.log(platesList)

    return (
        <h1>Plates</h1>
    )
}