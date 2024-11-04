import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
// src/lib/utils.ts
export const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

/*
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
*/