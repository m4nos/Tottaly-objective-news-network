import Footer from '../components/Layout/Footer/Footer';
import Header from '../components/Layout/Header/Header';
import { Article } from '../app/types';
import { Container } from '@mui/material';
import ArticleList from '../components/Layout/Article/ArticleList';
import { Fragment } from 'react';
import Head from 'next/head';
import styles from '../styles/index.module.css';

const economy = ({ articles }: { articles: Article[] }) => {
  const economyArticles = articles
    .filter((article: Article) => article.category.name === 'Economy')
    .sort((a, b) => (a.published_at < b.published_at ? 1 : -1));
  return (
    <Fragment>
      <Head>
        <title>Totally Objective News Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.container}>
        <Header />
        <ArticleList articles={economyArticles} />
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

export default economy;
