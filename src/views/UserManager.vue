<template>
  <v-container fluid class="pa-0">
    <v-row class="px-2 px-md-10">
      <v-col class="py-12 px-6 " cols="12" md="6" lg="6" xl="5" id="leftWindow">
        <v-card class="pa-8 elevation-5">
          <v-row class="cus-icon" align="end">
            <v-btn class="mx-3 blue darken-4" dark>
              <v-icon large dark>mdi-wrench</v-icon>
            </v-btn>
            <h1 class="" style="display:inline">選擇學生</h1>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-select
                v-model="selectedLevel"
                :items="levelNames"
                label="級別"
              />
            </v-col>
            <v-col cols="6">
              <v-select
                v-model="selectedClass"
                :items="computedClassNames"
                label="班別"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
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
            hide-default-footer
            @page-count="pageCount = $event"
            :page.sync="page"
            class="px-md-4"
            @click:row="handleClick"
          ></v-data-table>
          <div class="text-center py-4">
            <v-pagination
              v-model="page"
              :length="pageCount"
              :total-visible="8"
            ></v-pagination>
          </div>
        </v-card>
      </v-col>
      <v-col class="py-12 px-6" cols="12" md="6" lg="6" xl="7">
        <v-card class="pa-8 elevation-5">
          <v-row class="cus-icon" align="end">
            <v-btn class="mx-3 blue lighten" dark>
              <v-icon large dark>mdi-clock</v-icon>
            </v-btn>
            <h1 class="" style="display:inline">操作記錄</h1>
            <v-spacer />
            <h3 class="mr-4 d-none d-sm-flex">更多...</h3>
          </v-row>
          <v-list flat>
            <v-list-item-group color="indigo">
              <v-list-item v-for="(record, i) in records" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="record.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  <v-row no-gutters>
                    <v-col style="text-overflow: ellipsis;  overflow:hidden">
                      {{ record.text }}
                    </v-col>
                    <v-spacer class="d-none d-xl-flex" />
                    <v-col cols="auto" class="d-none d-sm-flex">{{
                      record.date
                    }}</v-col>
                  </v-row>
                </v-list-item-title>
                <!-- <v-list-item-title
                  v-text="record.text"
                  style="text-overflow: ellipsis;  overflow:hidden"
                /> -->
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
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
        studentno: "081079",
      });
    }
    return {
      levelNames: ["全部", "初一", "初二", "初三", "高一", "高二", "高三"],
      classNames: ["全部", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛"],
      selectedLevel: "全部",
      selectedClass: "全部",
      classNums: {
        全部: 0,
        初一: 5,
        初二: 6,
        初三: 6,
        高一: 5,
        高二: 6,
        高三: 7,
      },
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
      records: [
        {
          icon: "mdi-download",
          text: "下載了檔案ABCDEFB.ABCD",
          date: "07-06 04:00",
        },
        {
          icon: "mdi-upload",
          text: "上傳了檔案ABCDEFB.ABCD",
          date: "07-06 20:30",
        },
        {
          icon: "mdi-trash-can",
          text: "刪除了檔案ABCDEFB.ABCD",
          date: "07-06 10:40",
        },
        {
          icon: "mdi-pencil",
          text: "將檔案ABCDEF命名為ABCDEFB.ABCD",
          date: "07-06 00:00",
        },
        {
          icon: "mdi-download",
          text: "下載了檔案ABCDEFB.ABCD",
          date: "07-06 04:00",
        },
        {
          icon: "mdi-upload",
          text: "上傳了檔案ABCDEFB.ABCD",
          date: "07-06 20:30",
        },
        {
          icon: "mdi-trash-can",
          text: "刪除了檔案ABCDEFB.ABCD",
          date: "07-06 10:40",
        },
        {
          icon: "mdi-pencil",
          text:
            "將檔案ABCDEF命名為ABfskasdkfa;lghioerngihpoqerniohqgophrnvioqnopemoirrngihpoqerniohqgophrnvioqnopemoirrngihpoqerniohqgophrnvioqnopemoirrngihpoqerniohqgophrnvioqnopemoirrngihpoqerniohqgophrnvioqnopemoirrngihpoqerniohqgophrnvioqnopemoirrngihpoqerniohqgophrnvioqnopemoirrngihpoqerniohqgophrnvioqnopemoirrngihpoqerniohqgophrnvioqnopemoirqumfhCDEFB.ABCD",
          date: "07-06 00:00",
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
    computedClassNames() {
      return this.classNames.slice(0, this.classNums[this.selectedLevel] + 1);
    },
  },
  methods: {
    handleClick(item) {
      console.debug(item);
    },
    updateTable() {
      let rowHeight = document.getElementsByTagName("tbody")[0].offsetHeight;
      let left =
        window.innerHeight -
        document.getElementsByClassName("v-card")[0].offsetHeight -
        48 * 2;
      let rows = left / rowHeight + 1;
      this.itemsPerPage = parseInt(rows);
      console.debug(rows);
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
.cus-icon > h3 {
  cursor: pointer;
}
/* @media screen and (min-width: 600px) {
  #leftWindow {
    min-width: 600px;
  }
} */
</style>
