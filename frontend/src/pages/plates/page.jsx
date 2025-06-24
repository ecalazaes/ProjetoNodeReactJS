import plateServices from "../../services/plates.jsx";
import {useEffect, useState} from "react";
import Loading from "../loading/page.jsx";
import PlateCard from "../../components/plateCard/plateCard.jsx";
import styles from "./page.module.css"
import PlatePopup from "../../components/platePopup/platePopup.jsx";
import {useCartContext} from "../../contexts/useCartContext.jsx";
import {toast} from "react-toastify";

export default function Plates() {

    const {getAvailablePlates, platesList, platesLoading, refetchPlates} = plateServices()
    const [plateSelected, setPlateSelected] = useState(null);
    const {addToCart} = useCartContext();

    useEffect(() => {
        if (refetchPlates) {
            getAvailablePlates()
        }
    }, [refetchPlates]);

    const handlePlateSelected = (plate) => {
        setPlateSelected(plate)
    }

    const handleClosePopup = () => {
        setPlateSelected(null)
    }

    const handleAddToCart = (itemToAdd) => {
        addToCart(itemToAdd)
        handleClosePopup()
        // Sinalizar com mensagem verde de sucesso
        toast.success(`${itemToAdd.name} adicionado ao carrinho!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored", // Use 'colored' para a cor padrão do sucesso
        });
    }

    if (platesLoading) {
        return (<Loading/>)
    }

    console.log(platesList)

    return (
        <>
            <div className={styles.teste}>
                <h2>From our kitchen to your table.</h2>
                <p>A healthy and genuine kitchen, where expectional ingredients come together with a passion for
                    taste. </p>
                <p>With fresh and original proposals, we satisfy the desires of the whole family, from appetizers to
                    desserts.</p>
                <p>Discover our culinary excellence every day.</p>
            </div>
            <div className={styles.cardsContainer}>
                {platesList.map((plate) => (
                    <div key={plate._id} className={styles.cardContainer} onClick={() => {
                        handlePlateSelected(plate)
                    }}>
                        <PlateCard plateData={plate}/>
                    </div>
                ))}
            </div>

            {plateSelected && (
                <PlatePopup
                    plateData={plateSelected}
                    onClose={handleClosePopup}
                    onAddToCart={handleAddToCart}
                />
            )}
        </>
    )
}