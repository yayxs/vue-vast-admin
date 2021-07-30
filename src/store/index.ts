import { createStore } from "vuex";

const store = createStore({
  state: () => {
    return {
      name: "vast",
    };
  },
});

export default store;
