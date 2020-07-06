<template>
  <v-container fluid class="pa-0">
    <v-row justify="center">
      <v-col class="pa-12" cols="12" md="5" id="leftWindow">
        <v-card class="pa-8 elevation-5">
          <v-row class="cus-icon" align="end">
            <v-btn class="mx-3 blue darken-4" dark>
              <v-icon dark>mdi-wrench</v-icon>
            </v-btn>
            <h1 class="" style="display:inline">選擇學生</h1>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-select label="級別" hide-details />
            </v-col>
            <v-col cols="6">
              <v-select label="班別" hide-details />
            </v-col>
            <v-col>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                placeholder="搜尋"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-data-table
            id="dataTable"
            :headers="computedHeaders"
            :items="items"
            :items-per-page="itemsPerPage"
            :search="search"
            item-key="no"
            single-select
            hide-default-footer=""
            @page-count="pageCount = $event"
            :page.sync="page"
            class="px-md-4"
            @click:row="handleClick"
          />
          <div class="text-center py-4">
            <v-pagination
              v-model="page"
              :length="pageCount"
              :total-visible="8"
            />
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
        name: "張鎮揚鎮場",
        no: i,
        usedSpace: "5MB",
        studentno: "081079",
      });
    }
    return {
      page: 1,
      pageCount: 0,
      items: items,
      itemsPerPage: 1,
      search: "",
      headers: [
        {
          text: "學生班級",
          filterable: true,
          value: "class",
          hide: "mdAndDown",
        },
        { text: "學生姓名", filterable: true, value: "name" },
        {
          text: "學生編號",
          filterable: true,
          value: "studentno",
        },
      ],
    };
  },
  computed: {
    computedHeaders() {
      return this.headers.filter(
        (h) => !h.hide || !this.$vuetify.breakpoint[h.hide]
      );
    },
  },
  methods: {
    handleClick(item) {
      console.debug(item);
    },
    updateTable() {
      let rowHeight = document.getElementsByTagName("tbody")[0].offsetHeight;
      let left =
        window.innerHeight - document.getElementById("leftWindow").offsetHeight;
      let rows = left / rowHeight + 1;
      this.itemsPerPage = parseInt(rows);
    },
  },

  mounted() {
    this.updateTable();
  },
};
</script>

<style scpped>
table * {
  font-size: 18px !important;
}
tr {
  cursor: pointer;
}
.cus-icon {
  position: relative;
  top: -55px;
  margin-bottom: -55px;
}
.cus-icon .v-btn {
  width: 75px !important;
  height: 75px !important;
}
</style>
