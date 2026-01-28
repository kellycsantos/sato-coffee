import Image from 'next/image';
import styles from './card.module.scss';
import star from '@/public/icons/star_fill.svg';


type CardProps = {
    image: string;
    title: string;
    price: number;
    votes: number;
    rating: number;
    isPopular: boolean;
    available: boolean;
}
export const Card = ({ image, title, price, votes, rating, isPopular, available }: CardProps) => {
    return (
        <article className={styles.card}    >
            <Image src={image} className={styles.card__image} alt="Card" width={200} height={200}/>
            <div className={styles.card__info}>
                <h3>{title}</h3>
                <span className={styles.card__info__price}><p>{price}</p></span>
               
            </div>

            <div className={styles.card__rating}>
                <Image src={star.src} alt={`${votes} votes`} width={20} height={20} />
               {rating && <p>{rating}</p>}
                <p className={styles.card__rating__votes}>({votes} votes)</p>
                {!available && <p className={styles.card__rating__souldout}>Sould out</p>}
            </div>
            {isPopular && <span className={styles.card__badge}>Popular</span>}
        </article>
    )
}