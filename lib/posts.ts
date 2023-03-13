import { readdirSync, readFileSync } from "fs";
import { remark } from 'remark';
import path from "path"
import matter from 'gray-matter';
import html from 'remark-html';

export type PostProps = {
    id: string,
    title: string,
    contentHtml: string,
    date?: string,
}

const postsDir = path.join(process.cwd(), 'posts');

console.log('POST DIR:');
console.log(postsDir);

export const getPostDataById = async (id: string) => {
    // const fullPath = path.join(postsDir, `${id}.md`);
    // const content = readFileSync(fullPath, 'utf8');
    // const parsed = matter(content);

    // const processedContent = await remark()
    //     .use(html)
    //     .process(parsed.content);
    // const contentHtml = processedContent.toString();

    const contentHtml = '';

    return {
        id,
        title: 'Missing title',
        contentHtml,
        // ...parsed.data,
    };

    // return {
    //     id,
    //     title: 'Missing title',
    //     contentHtml,
    //     ...parsed.data,
    // };
}

export const getSortedPostsData = async () => {
    const filenames = readdirSync(postsDir);
    const postsData: PostProps[] = await Promise.all(filenames.map(async (filename) => {
        const id = filename.replace(/\.md/, '');
        const res = await getPostDataById(id);
        return res; 
    }));

    return postsData.sort((a, b) => {
        if (a.date && b.date && a.date < b.date) {
            return 1;
        }
        return -1;
    });
}

export const getAllPostIds = () => {
    const filenames = readdirSync(postsDir);
    return filenames.map((filename) => {
        return {
            params: { 
                id: filename.replace(/\.md$/, ''),
            },
        };
    });
}
