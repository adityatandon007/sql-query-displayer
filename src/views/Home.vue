<template>
  <div>
    <table-selector
      :tables="tables"
      @select="setTable"
      :selected-table="selectedTable"
    />
    <div class="d-flex justify-space-between align-center px-3">
      <span>Total Columns ({{ tableColumns.length }})</span>
      <v-btn small outlined text @click="selectAllColumns">
        Select all columns
      </v-btn>
    </div>
    <column-selector
      :columns="tableColumns"
      @update-columns="setColumns"
      :selected-columns="selectedColumns"
    />
    <query
      v-if="selectedColumns.length"
      :columns="tableColumns"
      :selected-columns="selectedColumns"
      :selected-table="selectedTable"
    />
  </div>
</template>

<script>
import TableSelector from "../components/TableSelector";
import ColumnSelector from "../components/ColumnSelector";
import Query from "../components/Query";
const columnsForTable1 = [
  "Column A",
  "Column B",
  "Column C",
  "Column D",
  "Column E",
  "Column F",
];
const columnsForTable2 = ["Column X", "Column Y", "Column Z"];
const columnsForTable3 = [
  "Column L",
  "Column M",
  "Column N",
  "Column O",
  "Column P",
];
const columnsForTable4 = ["Column Q", "Column R", "Column S", "Column T"];
export default {
  name: "Home",
  components: {
    TableSelector,
    ColumnSelector,
    Query,
  },
  data() {
    return {
      tables: ["Table 1", "Table 2", "Table 3", "Table 4"],
      selectedTable: null,
      selectedColumns: [],
    };
  },
  computed: {
    tableColumns() {
      if (this.selectedTable === "Table 1") {
        return columnsForTable1;
      } else if (this.selectedTable === "Table 2") {
        return columnsForTable2;
      } else if (this.selectedTable === "Table 3") {
        return columnsForTable3;
      } else if (this.selectedTable === "Table 4") {
        return columnsForTable4;
      } else {
        return [];
      }
    },
  },
  methods: {
    setTable(table) {
      this.selectedTable = table;
    },
    setColumns(columns) {
      this.selectedColumns = [...columns];
    },
    selectAllColumns() {
      this.selectedColumns = [...this.tableColumns];
    },
  },
};
</script>