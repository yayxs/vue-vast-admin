import type { UserConfig, Resolver } from "vite";
import { resolve } from "path";
function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

const alias: Record<string, string> = {
  "/@/": pathResolve("src"),
};

const viteConfig: UserConfig = {
  alias,
};

export default viteConfig;
