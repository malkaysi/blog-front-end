import { Button, Card, CardActionArea, CardContent } from '@mui/material';
import React from 'react';

const CommentCard = () => {

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        Test
      </CardContent>
      <CardActionArea>
        <Button size="small">Learn More</Button>
      </CardActionArea>
    </Card>
  )
}