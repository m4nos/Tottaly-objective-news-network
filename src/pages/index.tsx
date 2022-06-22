import Head from 'next/head';
import ArticleList from '../components/Layout/Article/ArticleList';
import SpotlightArticles from '../components/Layout/Article/SpotlightArticles';
import Footer from '../components/Layout/Footer/Footer';
import Header from '../components/Layout/Header/Header';

import styles from '../styles/index.module.css';
import { Article } from '../app/types';
import { Container } from '@mui/material';
import { Fragment } from 'react';

export interface ArticleListProps {
  articles: Article[];
}

const IndexPage = ({ articles }: ArticleListProps) => {
  const economyArticles = articles
    .filter((article: Article) => article.category.name === 'Economy')
    .sort((a, b) => (a.published_at < b.published_at ? 1 : -1));
  const sportsArticles = articles
    .filter((article: Article) => article.category.name === 'Sports')
    .sort((a, b) => (a.published_at < b.published_at ? 1 : -1));
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
        <SpotlightArticles />
        <ArticleList articles={economyArticles} numberOfArticles={6} />
        <ArticleList articles={sportsArticles} numberOfArticles={6} />
        <ArticleList articles={lifestyleArticles} numberOfArticles={6} />
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

export default IndexPage;
