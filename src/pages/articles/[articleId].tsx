import { Article } from '../../app/types';

const ArticlePage = ({ article }: { article: Article }) => {
  return <div>{article.title}</div>;
};

export async function getServerSideProps(context) {
  const { articleId } = context.query;
  const response = await fetch(`http://localhost/api/articles/${articleId}`);
  return {
    props: {
      article: await response.json(),
    },
  };
}

export default ArticlePage;
