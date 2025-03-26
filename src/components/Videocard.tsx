import React from 'react';
import { Link } from 'react-router-dom';

interface Video {
  id: string;
  title: string;
  category?: string; // Optional, replace with description if your model has it
}

const VideoCard: React.FC<{ video: Video }> = ({ video }) => {
  return (
    <Link to={`/video/${video.id}`} className="block">
      <div className="bg-gray-300 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-800">{video.title}</h3>
        <p className="text-gray-600">
          {video.category || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        </p>
      </div>
    </Link>
  );
};

export default VideoCard;