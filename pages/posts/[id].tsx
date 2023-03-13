import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostDataById, PostProps } from "../../lib/posts";
import { headerItalic } from "../_app";
import styles from './posts.module.scss';
import utilStyles from '../../styles/utils.module.scss';

type ParamsStaticProps = {
    params: {
        id: string,
    },
}

type StaticProps = {
    postData: PostProps,
}

export const getStaticProps = async ({ params }: ParamsStaticProps) => {
    const postData = await getPostDataById(params.id);
    return {
        props: {
            postData,
        },
    };
}

export const getStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

const Post = ({ postData }: StaticProps) => (
    <Layout>
        <Head>
            <title>{postData.title} | Inspirationslyftet</title>
        </Head>
        <section>
            <div className={styles.headerParent}>
                <div className='container-md'>
                    <h1 className={headerItalic}><span className={styles.headerBackground}>{postData.title}</span></h1>
                </div>
            </div>
            <div className={`container-md ${styles.content}`}>
                <div className='row'>
                    <div className='col-md'>bild</div>
                    <div className='col-md'>
                        <h6 className={utilStyles.textLight}>{postData.date}</h6>
                        <br />
                        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                    </div>
                </div>
            </div>
        </section>
    </Layout>
);

export default Post;