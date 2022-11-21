import styles from "./Header.module.css";
import iconImg from "../assets/iconHeader.png"

export function Header() {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <img src={iconImg} />

                <nav>
                    <ul className={styles.linkList}>
                        <li><a href="#history">Historia</a></li>
                        <li><a href="#villains">Vilões</a></li>
                        <li><a href="#curiosities">Curiosidades</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}