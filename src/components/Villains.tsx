import styles from "./Villains.module.css"

import villainsImg from "../assets/viloes.png"

import reversoImg from "../assets/reverso.png"
import savitarImg from "../assets/savitar.png"
import deVoeImg from "../assets/DeVoe.png"
import monarcaImg from "../assets/monarca.png"
import hemoglobinaImg from "../assets/hemoglobina.png"
import deathsthormImg from "../assets/deathsthorm.png"
import cicadaImg from "../assets/cicada.png"
import groddImg from "../assets/grodd.png"
import zoomImg from "../assets/zoom.png"



export function Villains() {
    return (
        <section className={styles.wrapper} id="viloes">
        <img
         
          src={villainsImg}
          alt="imagem com todos os viloes do flash"
        />
  
        <h2>Vilões</h2>

        <div className={styles.villains}>
            <div>
                <img src={reversoImg} alt="foto do vilão flash reverso" />
                <img src={zoomImg} alt="foto do vilão velocista zoom" />
                <img src={savitarImg} alt="foto do vilão velocista savitar" />
            </div>

            <div>
                <img src={deVoeImg} alt="foto do vilão deVoe" />
                <img src={cicadaImg} alt="foto do vilão cicada" />
                <img src={groddImg} alt="foto do vilão grood" />
            </div>

            <div>
                <img src={monarcaImg} alt="foto do vilão monarca " />
                <img src={hemoglobinaImg} alt="foto do vilão hemoglobina" />
                <img src={deathsthormImg} alt="foto do vilão deathsthorm" />
            </div>
        </div>
  
      </section>
    )
}
