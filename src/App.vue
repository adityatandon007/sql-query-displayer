<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn to="/" router exact class="d-flex align-center text-h5 font-weight-bold">
        SQL Query DISPLAYER
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn to="/about" router exact class="ma-1" text>
        About
      </v-btn>

      <v-btn
        href="https://github.com/adityatandon007/sql-query-displayer"
        target="_blank"
        text
      >
        <span class="mr-2">Go to Repo</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>