import { useQuery } from '@tanstack/react-query';

interface Song {
  id: string;
  title: string;
  artist: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
}

interface LeaderboardEntry {
  id: string;
  username: string;
  score: number;
  songId: string;
}

// I'm setting up a mock data here for songs 
const fetchSongs = async (): Promise<Song[]> => {
  // the normal API call should be here
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: '1', title: 'Song one', artist: 'name', category: 'rock' },
        { id: '2', title: 'Song two', artist: 'name', category: 'pop' },
        { id: '3', title: 'Song three ', artist: 'name', category: 'rock' },
      ]);
    }, 500);
  });
};

const fetchCategories = async (): Promise<Category[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 'rock', name: 'Rock' },
        { id: 'pop', name: 'Pop' },
        { id: 'jazz', name: 'Jazz' },
      ]);
    }, 500);
  });
};

const fetchLeaderboard = async (): Promise<LeaderboardEntry[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: '1', username: 'rockstar123', score: 98, songId: '1' },
        { id: '2', username: 'musiclover', score: 95, songId: '2' },
        { id: '3', username: 'guitarist', score: 92, songId: '3' },
      ]);
    }, 500);
  });
};

export const useSongs = () => {
  return useQuery({
    queryKey: ['songs'],
    queryFn: fetchSongs,
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
};

export const useLeaderboard = () => {
  return useQuery({
    queryKey: ['leaderboard'],
    queryFn: fetchLeaderboard,
  });
};