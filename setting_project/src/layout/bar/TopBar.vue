<template>

  <div class="pa-0 header-btn">
    <v-dialog
      width="auto"
      scrollable
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          prepend-icon="mdi-brightness-4"
          text="테마변경"
          variant="tonal"
          v-bind="activatorProps"
        ></v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card
          prepend-icon="mdi-earth"
          title="테마 선택"
        >
          <v-divider class="mt-0"></v-divider>
          <v-card style="text-align: center; margin-top: 10px">
            <v-row class="pa-3">
              <v-col cols="12">
                <v-btn
                  :color="item.color"
                  :style="{ color: item.textColor }"
                  v-for="item in themeList"
                  @click="setTheme(item.name)"
                >
                  {{ item.title }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
          <v-divider></v-divider>
          <br/>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text="Close"
              variant="tonal"
              @click="isActive.value = false"
            ></v-btn>
          </v-card-actions>


        </v-card>
      </template>
    </v-dialog>
  </div>
</template>
<script setup>
import {useTheme} from "vuetify";

let themeList = [
  {name: 'CustomDark', title: 'Dark', color: '#1E2631', textColor: 'white'},
  {name: 'CustomIvory', title: 'Ivory', color: '#FFFFF0', textColor: 'black'},
  {name: 'CustomBlue', title: 'Blue', color: '#f0fcff', textColor: 'black'},
  {name: 'CustomBlack', title: 'Black', color: '#2b2a28', textColor: 'white'},
  {name: 'CustomMint', title: 'Mint', color: '#f0feff', textColor: 'black'},
  {name: 'CustomPink', title: 'Pink', color: '#fff2f0', textColor: 'black'},
  {name: 'CustomGreen', title: 'Green', color: '#153733', textColor: 'white'},
  {name: 'CustomBrown', title: 'Brown', color: '#362d20', textColor: 'white'}
]

const theme = useTheme();

function setTheme(val) {
  window.localStorage.setItem("gis-theme", val)
  theme.global.name.value = val
  location.reload();
}

</script>

<style scoped>
button{
  margin: 10px 10px 10px 20px;
}

.header-btn{
  display: inline-block;
}


</style>
