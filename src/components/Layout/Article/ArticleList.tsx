import { Container, Grid } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { Article } from '../../../app/types';
import ArticleCard from './ArticleCard';

const ArticleList = ({
  articles,
  numberOfArticles,
}: {
  articles: Article[];
  numberOfArticles?: number;
}) => {
  return (
    <Grid container spacing={2}>
      {articles
        .map((article: Article) => (
          <Link href="/articles/[id]" as={`/articles/${article.id}`}>
            <Grid item xs={4}>
              <ArticleCard
                key={article.id}
                id={article.id}
                image_url={article.image_url}
                title={article.title}
                description={article.content}
              />
            </Grid>
          </Link>
        ))
        .slice(0, numberOfArticles)}
    </Grid>
  );
};

export default ArticleList;
