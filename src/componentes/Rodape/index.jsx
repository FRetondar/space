import React from 'react'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import styles from './Rodape.module.scss'

export default function Rodape() {

  return (
    <footer className={styles.rodape}>
        <div className={styles.rodape__icones}>

            <a href="https://www.facebook.com/felipe.retondar" target="_blank" rel='noreferrer'>
                <img src={facebook} alt="Ícone do Facebook" />
            </a>

            <a href="https://twitter.com/FRetondar" target="_blank" rel='noreferrer'>
                <img src={twitter} alt="Ícone do Twitter" />
            </a>

            <a href="https://www.instagram.com/felipe_retondar/" target="_blank" rel='noreferrer'>
                <img src={instagram} alt="Ícone do Instagram" />
            </a>

        </div>

        <p>Desenvolvido por Felipe Retondar</p>

    </footer>
  )

}
