import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  // Ensure `videoId` is defined; use `demoVideoUrl` as a fallback
  const videoUrl = videoId ? `/video/${videoId}` : demoVideoUrl;
  const channelUrl = snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl;

  return (
    <Card sx={{ width: { md: '220px', xs: '100%', lg: '320px' }, boxShadow: 'none', borderRadius: '10px' }}>
       <Link to={`/video/${videoId}`} style={{ textDecoration: 'none' }}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title || demoVideoTitle}
          sx={{ width: '100%', height: '180px' }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoUrl} style={{ textDecoration: 'none' }}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={channelUrl} style={{ textDecoration: 'none' }}>
          <Typography variant="subtitle2" fontWeight="bold" color="#FFF">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
