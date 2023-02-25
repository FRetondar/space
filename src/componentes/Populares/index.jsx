import Botao from 'componentes/Botao/indes'
import React from 'react'
import populares from './fotos-populares.json'
import styles from './Populares.module.scss'

export default function Populares() {

  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>

        <ul className={styles.populares__imagens}>
            {populares.map((foto) => {

                return (
                    <li key={foto.id}>
                        <img src={foto.path} alt={foto.alt} />
                    </li>
                )

            })}
        </ul>

        <Botao>Ver mais fotos</Botao>
    </aside>
  )

}
