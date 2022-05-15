import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "#5e8c31",
          secondary: "#ffc107",
          accent: "#ffeb3b",
          error: "#f44336",
          warning: "#ff9800",
          info: "#03a9f4",
          success: "#8bc34a",
        },
      },
    },
});