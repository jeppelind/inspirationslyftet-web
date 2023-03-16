import Link from 'next/link';
import { Container, Row, Col } from "react-bootstrap";
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
  <Col lg={4}>
    <Link href={`/posts/${id}`} className={styles.postLink}>
      <div className={styles.post}>
        <p className={utilStyles.textLight}>{date}</p>
        <b>{title}</b>
        <p className={styles.readMore}><small>LÄS MER</small></p>
      </div>
    </Link>
  </Col>
);

const PostsPreview = ({ blogPosts }: StaticProps) => (
  <Container className={styles.parent}>
    <h1 className={headerItalic}>Blogg</h1>
    <Row>
      {
        blogPosts.map((post) => <Preview key={post.id} id={post.id} title={post.title} date={post.date} />)
      }
    </Row>
  </Container>
);

export default PostsPreview;
