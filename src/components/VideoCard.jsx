import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card
    sx={{
      width: { xs: '100%', sm: '358px', md: '320px' },
      boxShadow: 'none',
      borderRadius: 0,
      overflow: 'hidden',
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/7ghhRHRP6t4`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{
          width: { xs: '100%', sm: '358px' },
          height: 180,
        }}
      />
    </Link>
    <CardContent
      sx={{
        backgroundColor: '#5712A4',
        height: '106px',
        position: 'relative',
        '&:after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: '#000',
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
            />
          </Typography>
        </Link>
      </Box>
    </CardContent>
  </Card>
);

export default VideoCard;
