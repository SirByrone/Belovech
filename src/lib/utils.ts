import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

const isProd = process.env.NODE_ENV === 'production';

export const getAssetPath = (path: string) => isProd ? `/Belovech${path}` : path;
