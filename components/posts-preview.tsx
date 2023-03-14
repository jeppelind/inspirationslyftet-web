import Link from 'next/link';
import { StaticProps } from '../pages';
import { headerItalic } from '../pages/_app';
import styles from './posts-preview.module.scss';
import utilStyles from '../styles/utils.module.scss';

type PreviewProps = {
  id: string;
  title: string;
  date: string | undefined;
}
  
  
const Preview = ({ id, title, date }: PreviewProps) => (
  <div className={`col-lg-4`}>
    <Link href={`/posts/${id}`} className={styles.postLink}>
      <div className={styles.post}>
        <p className={utilStyles.textLight}>{date}</p>
        <b>{title}</b>
        <p className={styles.readMore}><small>LÄS MER</small></p>
      </div>
    </Link>
  </div>
);

const PostsPreview = ({ blogPosts }: StaticProps) => (
  <section className={`container-md ${styles.parent}`}>
    <h1 className={headerItalic}>Nyheter</h1>
    <div className='row'>
      {
        blogPosts.map((post) => <Preview key={post.id} id={post.id} title={post.title} date={post.date} />)
      }
    </div>
  </section>
);

export default PostsPreview;
