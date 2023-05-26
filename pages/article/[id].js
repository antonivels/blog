import Head from 'next/head';
import { articles } from '../../db/article';
import { useRouter } from 'next/router';

export default function Article() {
  const router = useRouter();
  const id = router.query.id;

  const article = articles.filter((article) => article.id == id)[0];
  console.log(article);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>{article?.title}</div>
      <div className="mymaincss">{article?.body}</div>
    </div>
  );
}
