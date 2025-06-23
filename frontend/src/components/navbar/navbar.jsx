import styles from './navbar.module.css';
import {LuMenu, LuShoppingCart} from "react-icons/lu";
import {LiaUserCircle} from "react-icons/lia";
import {Drawer} from "@mui/material";
import {useState} from "react";

export default function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (<nav className={styles.navbarContainer}>
        <div className={styles.navbarItems}>
            <img className={styles.logo} src="/logo.png" alt=""/>
            <div className={styles.navbarLinksContainer}>
                <a className={styles.navbarLink} href="">Home</a>
                <a className={styles.navbarLink} href="">Plates</a>
                <LuShoppingCart className={styles.navbarLink}/>
                <LiaUserCircle className={styles.navbarLink}/>
            </div>
        </div>

        <div className={styles.mobileNavbarItems}>
            <img className={styles.logo} src="/logo.png" alt=""/>
            <div className={styles.mobileNavBarBtns}>
                <LuShoppingCart className={styles.navbarLink}/>
                <LuMenu className={styles.navbarLink} onClick={handleOpenMenu}/>
            </div>
        </div>

        <Drawer
            anchor='right'
            open={openMenu}
            onClose={handleOpenMenu}

        >
            <div className={styles.drawer}>
                <a className={styles.navbarLink} href="">Home</a>
                <a className={styles.navbarLink} href="">Plates</a>
                <a className={styles.navbarLink} href="">Profile</a>
            </div>
        </Drawer>

    </nav>)
}