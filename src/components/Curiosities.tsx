import styles from "./Curiosities.module.css"

import curiositiesImg from "../assets/curiosidades.png"
import curiosities1Img from "../assets/curiosidade1.png"
import curiosities2Img from "../assets/curiosidade2.png"
import curiosities3Img from "../assets/curiosidade3.png"
import curiosities4Img from "../assets/curiosidade4.png"

export function Curiosities() {
    return(
        <section className={styles.wrapper} id="curiosities">
        <img src={curiositiesImg} alt="imagem do flash em forma de desenho"/>
        <h2 > Curiosidades sobre o Flash </h2>

        <ul>
          <li>
            <h3>1. Existe mais de um Flash</h3>
            <img src={curiosities1Img} alt="imagem com vários flash"/>
            <p>Devido ao artigo na frente de seu nome – “o” Flash -, é fácil os fãs casuais esquecerem quantos Velocistas Escarlates existem. Sem contar as inacabáveis dimensões dos quadrinhos e as histórias anticanônicas de Elseworlds, existem quatro personagens com o título. O original era Jay Garrick, um estudante universitário que inalou gases de experimentos químicos e tornou-se a encarnação viva da velocidade do deus Mercúrio.</p>
          </li>

          <li>
            <h3>2. Ele é mais rápido do que o Superman</h3>
            <img src={curiosities2Img} alt="imagem com vários flash"/>
            <p>Se foi o astuto Jay Garrick roubando energia cinética do Superman para conquistar o primeiro lugar ou o Barry humilhando o seu oponente abertamente em uma nova corrida, o Flash foi o vencedor óbvio. Isso não deveria ser surpreendente, porém, enquanto Superman usa a força do Sol, ele ainda precisa obedecer a física básica, incluindo o atrito. O Flash é alimentado pela quase mágica Força da Velocidade, que lhe permite alcançar velocidades que outros simplesmente não podem. Isto, naturalmente, faz com que “o homem mais rápido do mundo” seja mais do que apenas um título legal.</p>
          </li>

          <li>
            <h3>3. Ele mudou toda a realidade</h3>
            <img src={curiosities3Img} alt="imagem com vários flash"/>
            <p>É verdade: o Flash é responsável pela alteração da realidade que resultou no novo universo DC. É claro, os verdadeiros culpados são os editores, que decidiram tentar atrair jovens leitores para a sua marca, mas foi o Flash que serviu como o mecanismo para fazê-lo. Como? Depois de Barry descobrir que sua mãe foi realmente morta pelo Flash Reverso, ele decide usar sua velocidade para voltar no tempo e tentar impedir o vilão. Infelizmente, isso fez a Força da Velocidade rasgar o cosmo, mudando-a para sempre – ou até a próxima mudança editorial.</p>
          </li>

          <li>
            <h3>4. É difícil ler sua mente</h3>
            <img src={curiosities4Img} alt="imagem com vários flash"/>
            <p>O modo como funciona é surpreendentemente simples: ser capaz de correr na velocidade da luz seria bastante inútil se os pensamentos de Flash fossem tão lento quanto a média humana. Em vez disso, ele pensa tão rápido quanto age, o que torna difícil até mesmo para os telepatas mais capacitados lerem seus pensamentos. O poder não é infalível, o Caçador de Marte ainda pode obter informações vagas de seu cérebro, e seus poderes não o protegem contra explosões psíquicas que simplesmente ferem a mente, em vez de ler ou controlá-la. No entanto, ser difícil de manipular é outra vantagem que o Velocista Escarlate tem sobre Superman.</p>
          </li>
        </ul>

      </section>
    )
}