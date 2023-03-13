import Layout from '../components/layout';
import { headerItalic } from './_app';
import styles from './404.module.scss';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout>
    <>
        <section className={styles.content}>
            <h1 className={headerItalic}>404 | Sidan kunde inte hittas</h1>
            <Link href='/'>Tillbaka till startsidan</Link>
        </section>
    </>
    </Layout>
  )
}
