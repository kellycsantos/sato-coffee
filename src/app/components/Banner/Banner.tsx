import Image from 'next/image';
import banabs from '@/public/bg-images/bg-cafe.jpg'
import styles from './banner.module.scss';

export const Banner = () => {
    
    return (
        <div className={styles.banner}>
            <Image src={banabs} alt="Banner" />
        </div>
    )
}