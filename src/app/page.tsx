import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import ticGif from '../assets/tic-tac.gif'
import { FormIndex } from '@/components'

export const metadata: Metadata = {
  title: 'Welcome to Tic-tac-toe',
  icons: {
   icon: 'https://www.svgrepo.com/show/143264/tic-tac-toe-game.svg'
  },
  description: 'Generated by Guillermo Sandoval',
}

export default function HomePage() {

  
  return (
    <main className={styles.home}>
      <div className='container'>
        <h2 className={styles.home__subtitle}> Welcome to</h2>
        <Image 
        className={styles.home__image}
        src={ticGif}
        alt='Img Gato'
        >
        </Image>
        <h1 className={styles.home__title}> Tic-tac-toe!</h1>
        <h2 className={styles.home__instruction}> Please register:</h2>
        <div className={styles.home__box}>
          <FormIndex />
        </div>
      </div>
    </main>
  )
}
