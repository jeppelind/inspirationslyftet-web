import Image from 'next/image'
import Link from 'next/link';
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from './navbar.module.scss';

const Navigation = () => (
    <Navbar expand='md' sticky='top' className={styles.navbar}>
        <Container className={styles.container}>
            <Link href='/'>
                <Navbar.Brand>
                    <Image src="/images/inspirationslyftet-gold.svg" alt="Inspirationslyftet Logo" width={150} height={50} />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls='navbarNav' />
            <Navbar.Collapse className={styles.navbarOptions} id='navbarNav'>
                <Nav>
                    <Link href='/' className={`nav-link ${styles.option}`}>Hem</Link>
                    <Link href='/posts' className={`nav-link ${styles.option}`}>Blogg</Link>
                    <Link href='/contact' className={`nav-link ${styles.option}`}>Kontakt</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Navigation;