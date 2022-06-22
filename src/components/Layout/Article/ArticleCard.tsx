import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

import classes from './ArticleCard.module.css';

interface ArticleCard {
  id: number;
  image_url: string;
  title: string;
  description: string;
}

const ArticleCard = ({ image_url, title, description }: ArticleCard) => {
  return (
    <CardActionArea>
      <Card className={classes.cardStyle}>
        <CardMedia
          component="img"
          height="300"
          image={image_url}
          alt="article"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.substring(0, 180)}...
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default ArticleCard;
