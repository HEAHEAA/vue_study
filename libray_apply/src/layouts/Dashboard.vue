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
        <div class="grid-stack-item-content">{{ item.content }}</div>
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

// Gridstack 컨테이너 참조
const gridContainer = ref(null);
const gridItems = ref([]);

// localStorage에서 상태를 로드하거나 기본 항목 설정
const loadGridItems = () => {
  const savedItems = localStorage.getItem('gridItems');
  if (savedItems) {
    gridItems.value = JSON.parse(savedItems);
  } else {
    gridItems.value = defaultGridItems;
  }
};

// Gridstack 항목을 localStorage에 저장
const saveGridItems = () => {
  const items = gridContainer.value.gridstack.engine.nodes.map(node => ({
    id: node.el.dataset.id,
    x: node.x,
    y: node.y,
    w: node.w,
    h: node.h,
    content: node.el.querySelector('.grid-stack-item-content').innerText
  }));
  localStorage.setItem('gridItems', JSON.stringify(items));
};

// Gridstack 초기화
onMounted(() => {
  loadGridItems();
  const grid = GridStack.init({}, gridContainer.value);

  // Gridstack 초기화 후 항목 데이터 로드
  grid.load(gridItems.value);

  // Gridstack 항목 위치/크기 변경 시 로컬 스토리지에 저장
  grid.on('change', saveGridItems);
});
</script>

<style>
.grid-stack {
  background: #eee;
  margin-top: 20px;
}

.grid-stack-item-content {
  background: #ddd;
  border: 1px solid #ccc;
  padding: 20px;
  box-sizing: border-box;
}
</style>
