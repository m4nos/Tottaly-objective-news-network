import { Fragment } from 'react';
import Footer from '../components/Layout/Footer/Footer';
import Header from '../components/Layout/Header/Header';
import { Article } from '../app/types';
import ArticleList from '../components/Layout/Article/ArticleList';
import Head from 'next/head';
import { Container } from '@mui/material';
import styles from '../styles/index.module.css';

const lifestyle = ({ articles }: { articles: Article[] }) => {
  const lifestyleArticles = articles
    .filter((article: Article) => article.category.name === 'Lifestyle')
    .sort((a, b) => (a.published_at < b.published_at ? 1 : -1));
  return (
    <Fragment>
      <Head>
        <title>Totally Objective News Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <Header />
        <ArticleList articles={lifestyleArticles} />
        <Footer />
      </Container>
    </Fragment>
  );
};

export async function getServerSideProps() {
  const response = await fetch('http://localhost/api/articles');
  return {
    props: {
      articles: await response.json(),
    },
  };
}

export default lifestyle;
