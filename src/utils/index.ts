import { resolve } from "path";
export const DEVELOPMENT = "development";
export const PRODUCTION = "production";
/**
 * @description: 读取path
 * @returns:
 */
export const pathResolve = (dir: string) => resolve(__dirname, ".", dir);
/**
 * @description: 读取path
 * @returns:
 */
export const isDevMode = (): boolean => import.meta.env.DEV;
