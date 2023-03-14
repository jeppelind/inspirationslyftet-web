import Image from 'next/image'
import Link from 'next/link';
import styles from './navbar.module.scss';

const Navbar = () => (
    <nav className={`navbar sticky-top navbar-expand-md ${styles.navbar}`}>
        <div className='container'>
            <Link className='navbar-brand' href='/'>
                <Image src="/images/inspirationslyftet-gold.svg" alt="Inspirationslyftet Logo" width={150} height={50} />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${styles.navbarOptions}`} id='navbarNav'>
                <div className='navbar-nav'>
                    <Link className='nav-link' href='/'>Hem</Link>
                    <Link className='nav-link' href='/posts'>Blogg</Link>
                    <Link className='nav-link disabled' href='/contact'>Kontakt</Link>
                </div>
            </div>
        </div>
    </nav>
);

export default Navbar;