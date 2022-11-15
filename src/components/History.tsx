import historyImg from "../assets/historia.png"
import styles from "./History.module.css";


export function History() {
    return (
        <main className={styles.wrapper}>
            <section id="history" className={styles.history}>
                <img
                    src={historyImg}
                    alt="foto do flash"
                />

                <h1>THE FLASH</h1>

                <p>
                    Barry Allen era um funcionário da polícia científica, quando foi banhado
                    por produtos químicos após seu laboratório ser atingido por um raio.
                    Esse acidente fez que ele, assim como Jay Garrick, fosse capaz de
                    canalizar a <span>Força da Aceleração</span> para correr em velocidades altíssimas.
                </p>
            </section>
        </main>
    )
}