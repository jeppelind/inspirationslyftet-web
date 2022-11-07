import Image from 'next/image'
import styles from './splashscreen.module.scss';
import { headerNormal } from '../pages/_app';

const Splashscreen = () => (
    <div className={styles.container}>
        <Image className={styles.image} src="/photos/pexels-andrea-piacquadio-3866767.jpg" alt="Splash image" fill={true}/>
        <h1 className={`${styles.header} ${headerNormal}`}>Lorem ipsum dolor</h1>
    </div>
);

export default Splashscreen;