import icones from './icones.json'
import styles from './Menu.module.scss'

export default function Menu() {
    
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={icones[0].path} alt="" />
                    <a href="/">Início</a>
                </li>

                <li className={styles.menu__item}>
                    <img src={icones[1].path} alt="" />
                    <a href="/">Mais Curtidas</a>
                </li>

                <li className={styles.menu__item}>
                    <img src={icones[2].path} alt="" />
                    <a href="/">Mais Vistas</a>
                </li>

                <li className={styles.menu__item}>
                    <img src={icones[3].path} alt="" />
                    <a href="/">Novas</a>
                </li>

                <li className={styles.menu__item}>
                    <img src={icones[4].path} alt="" />
                    <a href="/">Surpreenda-se</a>
                </li>
            </ul>
        </nav>
    )

}