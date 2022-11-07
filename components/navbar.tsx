import Image from 'next/image'
import Link from 'next/link';
import styles from './navbar.module.scss';

const Navbar = () => (
    <nav className={`navbar sticky-top navbar-expand-lg ${styles.navbar}`}>
        <div className='container'>
            <Link className='navbar-brand' href='/'>
                <Image src="/inspirationslyftet-gold.svg" alt="Inspirationslyftet Logo" width={150} height={50} />
            </Link>
        </div>
    </nav>
);

export default Navbar;