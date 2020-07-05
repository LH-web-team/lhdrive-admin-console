<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col class="mx-10 my-5">
        <v-card class="pa-8">
          <v-row align="end cus-icon">
            <v-btn class="mx-3 blue darken-4" dark>
              <v-icon dark>mdi-wrench</v-icon>
            </v-btn>
            <h1 class="" style="display:inline">學生選擇</h1>
          </v-row>
          <v-toolbar dark color="blue darken-4">
            <v-row>
              <v-col cols="12" md="3">
                <v-select label="級別" clearable solo-inverted hide-details />
              </v-col>
              <v-col cols="12" md="3">
                <v-select label="班別" clearable solo-inverted hide-details />
              </v-col>
              <v-col>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  clearable
                  solo-inverted
                  hide-details
                  placeholder="搜尋"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-toolbar>
          <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            item-key="no"
            single-select
            hide-default-footer=""
            @page-count="pageCount = $event"
            :page.sync="page"
            class="px-4"
          >
            <template v-slot:item="props">
              <tr
                @click="props.select(true)"
                :class="{
                  grey: props.isSelected,
                  'lighten-3': props.isSelected,
                }"
              >
                <td v-for="header in props.headers" :key="header.value">
                  {{ props.item[header.value] }}
                </td>
              </tr>
            </template>
          </v-data-table>
          <div class="text-center py-4">
            <v-pagination
              v-model="page"
              :length="pageCount"
              :total-visible="10"
            ></v-pagination>
          </div>
        </v-card>
      </v-col>
      <v-col class="ma-10"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UserManager",
  data: () => {
    let items = [];
    for (let i = 0; i < 1000; i++) {
      items.push({
        class: "初三乙",
        name: "張鎮揚_" + i,
        no: i,
        usedSpace: "5MB",
        studentno: "081079_" + i,
      });
    }
    return {
      page: 1,
      pageCount: 0,
      items: items,
      search: "",
      headers: [
        { text: "學生班級", filterable: true, value: "class" },
        { text: "學生姓名", filterable: true, value: "name" },
        { text: "學生編號", filterable: true, value: "studentno" },
        { text: "使用空間", filerable: true, value: "usedSpace" },
      ],
    };
  },
  methods: {},
};
</script>

<style scpped>
table * {
  font-size: 18px !important;
}
.cus-icon {
  position: relative;
  top: -57px;
  margin-bottom: -43px;
}
.cus-icon .v-btn {
  width: 75px !important;
  height: 75px !important;
}
</style>
