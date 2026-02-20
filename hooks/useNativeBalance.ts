import { useBalance } from 'wagmi';

export function useNativeBalance(address?: `0x${string}`) {
  const { data, isLoading, isError } = useBalance({
    address,
    watch: true,
    enabled: !!address, 
  });

  const formatted = data
    ? parseFloat(data.formatted).toFixed(4)
    : null;

  return {
    balance: formatted,
    symbol: data?.symbol ?? 'ETH',
    isLoading,
    isError,
  };
}
