import type { App } from "vue";
import { createStore } from "vuex";
import { config } from "vuex-module-decorators";
import { isDevMode } from "../utils";
config.rawError = true;
const isDev = isDevMode();

const store = createStore({
  strict: isDev,
});

export function setupStore(app: App<Element>) {
  app.use(store);
}
export default store;
