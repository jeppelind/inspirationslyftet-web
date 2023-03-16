import Image from 'next/image'
import { Container } from "react-bootstrap";
import styles from './splashscreen.module.scss';
import { headerItalic } from '../pages/_app';

const Splashscreen = () => (
    <Container fluid className={styles.container}>
        <Image className={styles.image} src="/images/photos/pexels-andrea-piacquadio-3866767.jpg" alt="Splash image" fill={true}/>
        <h1 className={`${styles.header} ${headerItalic}`}><span className={styles.headerBackground}>Lorem ipsum dolor</span></h1>
    </Container>
);

export default Splashscreen;