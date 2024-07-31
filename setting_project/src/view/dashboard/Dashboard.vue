<template>
  <v-container>
    <div ref="gridContainer" class="grid-stack">
      <div
        v-for="item in gridItems"
        :key="item.id"
        class="grid-stack-item"
        :data-gs-x="item.x"
        :data-gs-y="item.y"
        :data-gs-w="item.w"
        :data-gs-h="item.h"
        :data-id="item.id"
      >

      </div>
    </div>
  </v-container>
</template>
<script setup>
import {ref, onMounted} from 'vue';
import {GridStack} from 'gridstack';
import 'gridstack/dist/gridstack.min.css';

// 기본 Gridstack 항목 데이터
const defaultGridItems = [
  {id: 1, x: 0, y: 0, w: 4, h: 2, content: 'Item 1'},
  {id: 2, x: 4, y: 0, w: 4, h: 2, content: 'Item 2'},
  {id: 3, x: 8, y: 0, w: 4, h: 2, content: 'Item 3'},
];

const gridContainer = ref(null);
const gridItems = ref([]);

// localStorage에서 상태를 로드하거나 기본 항목 설정
const loadGridItems = () => {
  const savedItems = localStorage.getItem('station_monitoring');
  if (savedItems) {
    gridItems.value = JSON.parse(savedItems).map(item => ({
      ...item,
      // component: getItemComponentById(item.id)
    }));
  } else {
    gridItems.value = defaultGridItems;
  }
};

// Gridstack  localStorage에 저장
const saveGridItems = () => {
  const items = gridContainer.value.gridstack.engine.nodes.map(node => ({
    id: node.el.dataset.id,
    x: node.x,
    y: node.y,
    w: node.w,
    h: node.h,
    content: node.el.querySelector('.grid-stack-item-content').innerText
  }));
  localStorage.setItem('station_monitoring', JSON.stringify(items));
};

// Gridstack 초기화
onMounted(() => {
  loadGridItems();
  const grid = GridStack.init({}, gridContainer.value);
  grid.load(gridItems.value);
  grid.on('change', saveGridItems);
});


</script>

<style>
.grid-stack-item-content {
  position: relative;
  background-color: rgba(169, 169, 169, 0.62);
}
.scroll::-webkit-scrollbar {
  display: none;
}
.scroll {
  -ms-overflow-style: none;
}
</style>
