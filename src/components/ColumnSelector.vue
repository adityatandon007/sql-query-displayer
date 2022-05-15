<template>
  <v-card flat>
    <v-card-text class="pa-0">
      <div>
        <v-combobox
          :value="selectedColumns"
          :items="columns"
          label="Please select columns"
          multiple
          chips
          @change="setColumns"
          hide-details
        >
          <template #selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :input-value="data.selected"
              :disabled="data.disabled"
              close
              close-icon="mdi-close"
              @click:close="data.parent.selectItem(data.item)"
            >
              {{ data.item }}
            </v-chip>
          </template>
        </v-combobox>
      </div>
      <v-divider class="my-6"></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ColumnSelector",
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    selectedColumns: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    setColumns(columns) {
      this.$emit("update-columns", columns);
    },
  },
};
</script>
