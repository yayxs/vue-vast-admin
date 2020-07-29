<template>
  <div id="app">
    <!-- <router-view /> -->
    <!-- 使用vue-i18n -->
    {{ lang }}
    <el-select v-model="value">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-button type="primary" @click="handleChooseLan">选择语言</el-button>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import { mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      value: "1",
      options: [
        {
          value: "1",
          label: this.$t("options.one")
        },
        {
          value: "2",
          label: this.$t("options.two")
        },
        {
          value: "3",
          label: this.$t("options.three")
        }
      ]
    };
  },
  computed: {
    lang(){
      return this.$store.getters.lang
    }
  },
  watch: {
    lang() {
      this.setOptions();
    }
  },
  methods: {
    handleChooseLan() {
      if (Math.random() > 0.5) {
        console.log(1)
        Cookies.set("language", "en");
      } else {
        console.log(2)
        Cookies.set("language", "zh");
      }
    },
    setOptions() {
      this.options = [
        {
          value: "1",
          label: this.$t("options.one")
        },
        {
          value: "2",
          label: this.$t("options.two")
        },
        {
          value: "3",
          label: this.$t("options.three")
        }
      ];
    }
  }
};
</script>
