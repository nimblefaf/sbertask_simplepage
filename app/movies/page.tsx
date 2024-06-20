import Image from 'next/image';
import styles from './movies.module.scss'

import untoucheblesPoster from '../assets/Intouchables.webp'
import interstellarPoster from '../assets/Interstellar.webp'
import greenmilePoster from '../assets/GreenMile.webp'

export default function MoviesPage() {
    return (
      <div className={styles.catalog}>
        <div className={styles.movieCard}>
          <Image className={styles.poster} src={untoucheblesPoster} alt='poster'></Image>
          <div className={styles.descr}>
            <h2 className={styles.RuName}>1+1</h2>
            <h5 className={styles.MiscInfo}>Intouchables, 2011, 112 мин.</h5>
            <h6>Франция • драма  Режиссёр: Оливье Накаш</h6>
            <h6>В ролях: Франсуа Клюзе, Омар Си</h6>
          </div>
        </div>
        <div className={styles.movieCard}>
          <Image className={styles.poster} src={interstellarPoster} alt='poster'></Image>
          <div>
            <h2 className={styles.RuName}>Интерстеллар</h2>
            <h5 className={styles.MiscInfo}>Interstellar, 2014, 169 мин.</h5>
            <h6>США • фантастика  Режиссёр: Кристофер Нолан</h6>
            <h6>В ролях: Мэттью Макконахи, Энн Хэтэуэй</h6>
          </div>
        </div>
        <div className={styles.movieCard}>
          <Image className={styles.poster} src={greenmilePoster} alt='poster'></Image>
          <div>
            <h2 className={styles.RuName}>Зеленая миля</h2>
            <h5 className={styles.MiscInfo}>The Green Mile, 1999, 189 мин.</h5>
            <h6>США • драма  Режиссёр: Фрэнк Дарабонт</h6>
            <h6>В ролях: Том Хэнкс, Дэвид Морс</h6>
          </div>
        </div>
      </div>
    );
  }
  