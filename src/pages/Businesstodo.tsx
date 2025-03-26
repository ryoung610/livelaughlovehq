import { useEffect, useState } from 'react';

interface BusinesstodoProps {
  category: string;
}

const Businesstodo: React.FC<BusinesstodoProps> = ({ category }) => {
  const [videoData, setVideoData] = useState<{ url: string; title: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      setLoading(true);
      setError(null);

      console.log('Category received in Businesstodo:', category); // Debug

      if (!category) {
        setError('No category provided.');
        setLoading(false);
        return;
      }

      const apiUrl = `https://7cruutjavf.execute-api.us-east-1.amazonaws.com/dev/get-video?category=${category}`;
      console.log('Fetching from URL:', apiUrl);

      try {
        const response = await fetch(apiUrl);
        console.log('Response status:', response.status);

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch video: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        console.log('Fetched video data:', data);

        if (!data.url || !data.title) {
          throw new Error('Invalid video data: Missing url or title');
        }

        setVideoData(data);
      } catch (error: any) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        setError(`Could not load the featured video: ${errorMessage}`);
        console.error('Fetch error:', errorMessage, error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [category]);

  const getVideoId = (url: string): string | null => {
    try {
      const videoId = url.split("v=")[1];
      if (!videoId) throw new Error('Invalid YouTube URL');
      return videoId.split('&')[0];
    } catch (err) {
      console.error('Error parsing video URL:', err);
      return null;
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{decodeURIComponent(category || 'No Category')}</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Featured Video</h2>
        {loading ? (
          <p>Loading video...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : videoData ? (
          (() => {
            const videoId = getVideoId(videoData.url);
            return videoId ? (
              <>
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={videoData.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full rounded-lg"
                ></iframe>
                <p className="mt-2 text-gray-700">{videoData.title}</p>
              </>
            ) : (
              <p className="text-red-500">Invalid YouTube URL: {videoData.url}</p>
            );
          })()
        ) : (
          <p>No featured video available.</p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold">Comments</h2>
        <div className="border p-4 rounded-lg">
          <p>No comments yet. Be the first to comment!</p>
          <textarea className="w-full p-2 mt-2 border rounded" placeholder="Add a comment..."></textarea>
          <button className="mt-2 bg-blue-500 text-white p-2 rounded">Post Comment</button>
        </div>
      </div>
    </div>
  );
};

export default Businesstodo;