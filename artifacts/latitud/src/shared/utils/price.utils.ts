export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

export function calculateAverage(prices: number[]): number {
  if (prices.length === 0) return 0;
  return prices.reduce((sum, p) => sum + p, 0) / prices.length;
}

export function calculateMin(prices: number[]): number {
  if (prices.length === 0) return 0;
  return Math.min(...prices);
}

export function calculateMax(prices: number[]): number {
  if (prices.length === 0) return 0;
  return Math.max(...prices);
}
