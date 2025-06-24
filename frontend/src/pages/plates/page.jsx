import plateServices from "../../services/plates.jsx";
import {useEffect} from "react";
import Loading from "../loading/page.jsx";
import PlateCard from "../../components/plateCard/plateCard.jsx";

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
        <>
            <div>
                {platesList.map((plate) => (
                    <PlateCard plateData={plate} key={plate._id} />
                ))}
            </div>
        </>
    )
}