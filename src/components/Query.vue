<template>
  <div class="mt-4">
    <span class="text-uppercase">SQL Statement</span>
    <div class="query-wrapper mt-4">
      <pre class="pa-4" v-text="query"></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "Query",
  props: {
    selectedTable: {
      type: String,
      default: "",
    },
    selectedColumns: {
      type: Array,
      default() {
        return [];
      },
    },
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    selectedFilters: {
      type: Array,
      default() {
        return [];
      },
    },
    queryLimit: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      operators: {
        "greater than": ">",
        "less than": "<",
        equal: "==",
        "not equal": "!==",
        in: "in",
        between: "between",
      },
    };
  },
  computed: {
    query() {
      const selectStatement =
        (this.selectedColumns.length === this.columns.length
          ? "SELECT *"
          : `SELECT ${this.selectedColumns
              .map((col) => `"${col}"`)
              .join(", ")}`) + `\nFROM ${this.selectedTable}`;
      if (this.selectedFilters.length > 0) {
        const conditionsStatement = this.selectedFilters.map(
          (filter, index) => {
            let statement =
              index > 0
                ? `${filter.andOrOr} "${filter.column}"`
                : `"${filter.column}"`;
            if (
              [
                "equal",
                "not equal",
                "greater than",
                "less than",
                "in",
              ].includes(filter.filter)
            ) {
              statement = `${statement} ${this.operators[filter.filter]} ${
                filter.input1
              }`;
              return statement;
            } else if (filter.filter === "between") {
              statement = `${statement} ${this.operators[filter.filter]} '${
                filter.input1
              }' and '${filter.input2}'`;
              return statement;
            }
            return statement;
          }
        );
        return (
          selectStatement +
          "\nWHERE " +
          conditionsStatement.join("\n") +
          `\nlimit ${this.queryLimit}`
        );
      } else {
        return selectStatement + `\nlimit ${this.queryLimit}`;
      }
    },
  },
};
</script>
<style scoped>
.query-wrapper {
  border: 2px solid #5e8c31;
}
</style>