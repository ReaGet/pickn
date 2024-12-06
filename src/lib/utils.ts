import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getContrastColor(hexColor: string) {
  let normalizedHex = hexColor.replace('#', '');
  if (normalizedHex.length === 3) {
      normalizedHex = normalizedHex.split('').map(c => c + c).join('');
  }
  
  const r = parseInt(normalizedHex.substring(0, 2), 16);
  const g = parseInt(normalizedHex.substring(2, 2), 16);
  const b = parseInt(normalizedHex.substring(4, 2), 16);
  
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? '#000000' : '#ffffff';
}

export function getDynamicContrastColor(hexColor: string) {
  let normalizedHex = hexColor.replace('#', '');
  if (normalizedHex.length === 3) {
      normalizedHex = normalizedHex.split('').map(c => c + c).join('');
  }

  let r = parseInt(normalizedHex.substring(0, 2), 16);
  let g = parseInt(normalizedHex.substring(2, 4), 16);
  let b = parseInt(normalizedHex.substring(4, 6), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  const adjustBrightness = (colorValue: number, percentage: number) => {
    return Math.min(255, Math.max(0, colorValue + Math.round(percentage * 255)));
  };

  const adjustmentFactor = luminance > 0.5 ? -0.5 : 0.5;

  r = adjustBrightness(r, adjustmentFactor);
  g = adjustBrightness(g, adjustmentFactor);
  b = adjustBrightness(b, adjustmentFactor);

  const toHex = (value: number) => value.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}