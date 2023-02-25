import React from 'react'
import styles from './Banner.module.scss'
import banner from './banner.png'

export default function Banner() {

  return (

    <div className={styles.banner}>
        <h1>A Galeria Mais Completa do Espaço Sideral</h1>
        <img src={banner} alt="Imagem da Terra vista do espaço" />
    </div>

  )

}
