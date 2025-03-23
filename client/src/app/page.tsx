'use client';

import { useSongs, useCategories, useLeaderboard } from '@/lib/api-hooks';
import { Button } from "@/components/ui/button";

export default function Home() {
  const { 
    data: songs, 
    isLoading: songsLoading, 
    error: songsError 
  } = useSongs();
  
  const { 
    data: categories, 
    isLoading: categoriesLoading 
  } = useCategories();
  
  const { 
    data: leaderboard, 
    isLoading: leaderboardLoading 
  } = useLeaderboard();

  return (
    <div className="bg-red-500 grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-white">Welcome to Gasless Gossip</h1>
      
      {(songsLoading || categoriesLoading || leaderboardLoading) ? (
        <div className="text-white">Loading data...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl bg-white p-6 rounded-lg">
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Songs</h2>
            <ul className="space-y-2">
              {songs?.map((song) => (
                <li key={song.id} className="p-2 bg-gray-100 rounded">
                  <p className="font-medium">{song.title}</p>
                  <p className="text-sm text-gray-600">{song.artist}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories?.map((category) => (
                <li key={category.id} className="p-2 bg-gray-100 rounded">
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
            <ul className="space-y-2">
              {leaderboard?.map((entry) => (
                <li key={entry.id} className="p-2 bg-gray-100 rounded">
                  <p className="font-medium">{entry.username}</p>
                  <p className="text-sm text-gray-600">Score: {entry.score}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      <Button variant="default">Refresh Data</Button>
    </div>
  );
}