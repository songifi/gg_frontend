import { renderHook, waitFor } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
import { useSongs } from '@/lib/api-hooks';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

// Reset queryClient before each test
beforeEach(() => {
  queryClient.clear();
});

describe('API Hooks', () => {
  test('useSongs should fetch songs successfully', async () => {
    const { result } = renderHook(() => useSongs(), { wrapper });
    
    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();
    
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    
    expect(result.current.data).toHaveLength(3);
    expect(result.current.data?.[0]).toHaveProperty('title', 'song one');
    expect(result.current.data?.[0]).toHaveProperty('artist', 'name');
  });
});