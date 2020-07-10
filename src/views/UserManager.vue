<template>
  <v-container fluid class="pa-0">
    <v-row class="pa-2 pa-md-6 pt-md-2" no-gutters>
      <v-col cols="12" md="6" lg="6" xl="5" id="leftWindow">
        <v-card class="pa-8 ma-6 elevation-5">
          <v-row class="cus-icon" align="end">
            <v-btn class="mx-3 blue darken-4" dark>
              <v-icon large dark>mdi-wrench</v-icon>
            </v-btn>
            <h1 class style="display:inline">選擇學生</h1>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-select v-model="selectedLevel" :items="levelNames" hide-details label="級別" />
            </v-col>
            <v-col cols="6">
              <v-select
                v-model="selectedClass"
                :items="computedClassNames"
                hide-details
                label="班別"
              />
            </v-col>
            <v-col class="pt-0">
              <v-text-field
                class="pt-0"
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
            hide-default-footer
            @page-count="pageCount = $event"
            :page.sync="page"
            class="px-md-4"
            @click:row="handleClick"
          ></v-data-table>
          <div class="text-center py-4">
            <v-pagination color="#0D47A1" v-model="page" :length="pageCount" :total-visible="8"></v-pagination>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="6" xl="7" id="rightWindow">
        <v-container
          v-if="!selectedItem"
          class="d-flex justify-center align-center"
          style="height:100%"
        >
          <h1>請先選擇一位用戶</h1>
        </v-container>
        <div v-else class="d-flex flex-column-reverse flex-md-column">
          <v-card class="pa-8 ma-6 elevation-5">
            <v-row class="cus-icon" align="end">
              <v-btn class="mx-3 blue lighten" dark>
                <v-icon large dark>mdi-clock</v-icon>
              </v-btn>
              <h1 class style="display:inline">操作記綠</h1>
              <v-spacer />
              <h3 class="mr-4 d-none d-sm-flex">更多...</h3>
            </v-row>
            <v-list flat>
              <v-list-item-group color="indigo">
                <v-list-item v-for="(record, i) in records" :key="i">
                  <v-list-item-icon class="d-none d-md-inline-flex">
                    <v-icon v-text="record.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    <v-row no-gutters>
                      <v-col style="text-overflow: ellipsis; overflow:hidden;">{{ record.text }}</v-col>
                      <v-col cols="auto" class="d-none d-sm-flex ml-15">
                        {{
                        record.date
                        }}
                      </v-col>
                    </v-row>
                  </v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
          <v-card class="pa-8 ma-6 elevation-5" id="advanceFeatures">
            <v-row class="cus-icon" align="end">
              <v-btn class="mx-3 cyan darken" dark>
                <v-icon large dark>mdi-puzzle-outline</v-icon>
              </v-btn>
              <h1 class style="display:inline">進階功能</h1>
            </v-row>
            <v-row class="mt-2">
              <v-col>
                <v-btn block large color="success">更改雲盤空間上限</v-btn>
              </v-col>
              <v-col>
                <v-btn block large color="info">登入雲盤</v-btn>
              </v-col>
              <v-col>
                <v-btn block large color="warning">更改密碼</v-btn>
              </v-col>
              <v-col>
                <v-btn block large color="error">重置雲盤</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </div>
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
        studentno: "081079"
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
        高三: 7
      },
      page: 1,
      pageCount: 0,
      items: items,
      itemsPerPage: 1,
      selectedItem: null,
      search: "",
      headers: [
        {
          text: "學生班級",
          filterable: true,
          value: "class",
          hide: "mdAndDown"
        },
        { text: "學生姓名", filterable: true, value: "name" },
        {
          text: "學生編號",
          filterable: true,
          value: "studentno"
        }
      ],
      records: [
        {
          icon: "mdi-download",
          text: "下載了檔案ABCDEFB.ABCD",
          date: "07-06 04:00"
        },
        {
          icon: "mdi-upload",
          text: "上傳了檔案ABCDEFB.ABCD",
          date: "07-06 20:30"
        },
        {
          icon: "mdi-trash-can",
          text: "刪除了檔案ABCDEFB.ABCD",
          date: "07-06 10:40"
        },
        {
          icon: "mdi-pencil",
          text: "將檔案ABCDEF命名為ABCDEFB.ABCD",
          date: "07-06 00:00"
        },
        {
          icon: "mdi-download",
          text: "下載了檔案ABCDEFB.ABCD",
          date: "07-06 04:00"
        },
        {
          icon: "mdi-upload",
          text: "上傳了檔案ABCDEFB.ABCD",
          date: "07-06 20:30"
        },
        {
          icon: "mdi-trash-can",
          text: "刪除了檔案ABCDEFB.ABCD",
          date: "07-06 10:40"
        },
        {
          icon: "mdi-pencil",
          text:
            "將檔案ABCDEF命名為ABfskasdkfa;lghioerngihpoqerniohqgophrnvioqnopemoirrngihpoqerniohqgophrnvioqnopemoirrngihpoqerniohqgophrnvioqnopemoirrngihpoqerniohqgophrnvioqnopemoirrngihpoqerniohqgophrnvioqnopemoirrngihpoqerniohqgophrnvioqnopemoirrngihpoqerniohqgophrnvioqnopemoirrngihpoqerniohqgophrnvioqnopemoirrngihpoqerniohqgophrnvioqnopemoirqumfhCDEFB.ABCD",
          date: "07-06 00:00"
        }
      ]
    };
  },
  computed: {
    computedHeaders() {
      return this.headers.filter(
        h => !h.hide || !this.$vuetify.breakpoint[h.hide]
      );
    },
    computedClassNames() {
      return this.classNames.slice(0, this.classNums[this.selectedLevel] + 1);
    }
  },
  methods: {
    async handleClick(item) {
      this.selectedItem = item;
      this.$store.commit("setSelectedUser", item);
      await this.$nextTick();
      window.scrollTo({
        top: document.getElementById("rightWindow").offsetTop - 10,
        behavior: "smooth"
      });
    },
    async updateTable() {
      this.itemsPerPage = 1;
      await this.$nextTick();
      let rowHeight = document.getElementsByTagName("tbody")[0].offsetHeight;
      let left =
        document.getElementsByClassName("v-main")[0].offsetHeight -
        document.getElementsByClassName("v-card")[0].offsetHeight -
        65 - //appBar height
        32 - //leftWindow padding
        48; // card margin
      // console.log(document.getElementsByClassName("v-main")[0].offsetHeight);
      // console.log(document.getElementById("leftWindow").offsetHeight);
      // console.log(left);
      let rows = left / rowHeight + 1;
      if (rows < 3) rows = 3;
      this.itemsPerPage = parseInt(rows);
    }
  },

  mounted() {
    this.updateTable();
    window.onresize = (() => {
      this.updateTable();
    }).bind(this);
  }
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
#advanceFeatures .v-btn {
  font-size: 18px;
}
</style>
