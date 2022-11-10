import Image from 'next/image'
import styles from './footer.module.scss';

const Footer = () => (
    <footer className={styles.footer}>
        <span className={styles.logo}>
            <Image src="/images/inspirationslyftet-white.svg" alt="White Logo" width={150} height={50} />
        </span>
    </footer>
);

export default Footer;