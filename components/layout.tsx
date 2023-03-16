import styles from './layout.module.scss';
import Footer from './footer';
import { ReactNode } from 'react';
import Head from 'next/head';
import Navigation from './navbar';

const Layout = (props: { children: ReactNode }) => (
    <div className={styles.mainParent}>
        <Head>
            <title>Inspirationslyftet</title>
            <meta name="description" content="Inspirationslyftet hemsida" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation />
        <main>{props.children}</main>
        <Footer />
    </div>
);

export default Layout;