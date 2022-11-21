import { FacebookLogo, FaceMask, InstagramLogo, LinkedinLogo, TiktokLogo, YoutubeLogo } from "phosphor-react";
import styles from "./Footer.module.css";

export function Footer() {
    return (
        <footer className={styles.wrapper}>
            <strong>Links</strong>

            <div className={styles.container}>
                <div>
                    <ul>
                        <li><a href="https://www.instagram.com/_anselmo.dev/"> <InstagramLogo size={30}/> </a></li>
                        <li><a href="https://www.linkedin.com/in/anselmo-dias-73a990231/"> <LinkedinLogo size={30}/>  </a></li>
                        <li><a href="https://www.tiktok.com/@cicada_dev"> <TiktokLogo size={30}/>    </a></li>
                        <li><a href="https://www.youtube.com/channel/UCNiqLADCt8w0BnvK0TAZvZQ"> <YoutubeLogo size={30}/>   </a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}