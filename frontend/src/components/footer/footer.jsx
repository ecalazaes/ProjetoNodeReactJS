import styles from './footer.module.css';
import {Link} from "react-router-dom";

export default function Footer () {
    return (
        <footer className={styles.footerContainer}>
            <img src="/imgs/logo.png" alt=""/>
            <div>
                <h2>Importants Links</h2>
                <div className={styles.linksContainer}>
                    <Link className={styles.link} to={'/'}>Homepage</Link>
                    <Link className={styles.link} to={'/plates'}>Plates</Link>
                    <Link className={styles.link} to={'/profile'}>Profile</Link>
                </div>
            </div>
            <div>
                Developed by NENGUE.
                <a className={styles.link} href="#" target="_blank">See my projects</a>
            </div>
        </footer>
    )
}