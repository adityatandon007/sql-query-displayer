<template>
  <v-container>
    <v-card class="pa-4">
      <table-selector
        :tables="tables"
        @select="setTable"
        :selected-table="selectedTable"
      />
      <div class="d-flex justify-space-between align-center">
        <span>Total Columns ({{ tableColumns.length }})</span>
        <v-btn small outlined color="primary" @click="selectAllColumns">
          Select all columns
        </v-btn>
      </div>
      <div>
        <column-selector
          :columns="tableColumns"
          @update-columns="setColumns"
          :selected-columns="selectedColumns"
        />
      </div>
      <div class="d-flex justify-space-between align-center">
        <span>FILTERS</span>
        <v-btn
          small
          outlined
          color="primary"
          :disabled="!selectedColumns.length"
          @click="setFilter"
        >
          add filter
        </v-btn>
      </div>
      <div v-if="selectedFilters.length > 0" class="mt-6">
        <div
          v-for="(item, index) in selectedFilters"
          :key="index + item.column"
        >
          <filter-selector
            :selected-filter="item"
            :index="index"
            :columns="tableColumns"
            :selected-columns="selectedColumns"
            @input="setField"
            @clear-filter="clearFilter"
            @remove-filter="removeFilter"
          />
        </div>
      </div>
      <div class="my-4">
        <span>LIMIT</span>
        <v-divider></v-divider>
        <v-text-field
          v-model.number="queryLimit"
          type="number"
          outlined
          dense
          label="Please enter number of records to return"
          class="mt-5"
          required
          hide-details="auto"
          :rules="[rules.required, rules.maxAndIntQueryRows]"
        >
        </v-text-field>
      </div>
      <v-divider></v-divider>
      <query
        v-if="selectedColumns.length"
        :columns="tableColumns"
        :selected-columns="selectedColumns"
        :selected-table="selectedTable"
        :selected-filters="selectedFilters"
        :query-limit="queryLimit"
      />
    </v-card>
  </v-container>
</template>

<script>
import TableSelector from "../components/TableSelector";
import ColumnSelector from "../components/ColumnSelector";
import Query from "../components/Query";
import FilterSelector from "../components/FilterSelector";
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
    FilterSelector,
  },
  data() {
    return {
      tables: ["Table 1", "Table 2", "Table 3", "Table 4"],
      selectedTable: null,
      selectedColumns: [],
      selectedFilters: [],
      filterIndex: 0,
      queryLimit: 100,
      rules: {
        required: (value) => !!value || "Required.",
        maxAndIntQueryRows: (value) =>
          (!!parseInt(value) && value >= 0 && value <= 100) ||
          "Please insert a number between 1 and 100 rows",
      },
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
    setFilter() {
      const id = this.filterIndex;
      const filterData = {
        index: id,
        column: null,
        andOrOr: "and",
        filter: null,
        input1: null,
        input2: null,
      };
      this.selectedFilters = [...this.selectedFilters, filterData];
      this.filterIndex += 1;
    },
    removeFilter(index) {
      this.selectedFilters = this.selectedFilters.filter(
        (filter) => filter.index !== index
      );
      if (this.filterIndex > 0) {
        this.filterIndex -= 1;
      }
    },
    clearFilter(index) {
      const newValue = this.selectedFilters.find(
        (item) => item.index === index
      );
      newValue.filter = null;
      newValue.input1 = null;
      newValue.input2 = null;
      this.$set(this.selectedFilters, index, newValue);
    },
    setField(index, key, value) {
      const newValue = this.selectedFilters.find(
        (item) => item.index === index
      );
      if (Object.keys(newValue).length) {
        newValue[key] = value;
        this.$set(this.selectedFilters, index, newValue);
      }
    },
  },
};
</script>
