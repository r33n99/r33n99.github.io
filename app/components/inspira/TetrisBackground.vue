<script setup lang="ts">
import { cn } from "@inspira-ui/plugins";
import { useElementSize } from "@vueuse/core";
import { onMounted, onUnmounted, ref, watch } from "vue";

interface Props {
  class?: string;
  squareColor: string;
  base?: number;
}

const props = withDefaults(defineProps<Props>(), {
  base: 10,
});

type ThemeShades = Record<100 | 400 | 500 | 600 | 700 | 900, string>;

function buildThemeShades(color: string): ThemeShades {
  return {
    100: `color-mix(in oklab, ${color} 22%, white)`,
    400: `color-mix(in oklab, ${color} 45%, white)`,
    500: `color-mix(in oklab, ${color} 55%, white)`,
    600: `color-mix(in oklab, ${color} 22%, black)`,
    700: `color-mix(in oklab, ${color} 30%, black)`,
    900: `color-mix(in oklab, ${color} 55%, black)`,
  };
}

const theme = computed(() => buildThemeShades(props.squareColor));

const el = ref(null);
const grid = ref<(boolean | null)[][]>([]);
const rows = ref(0);
const cols = ref(0);

const { width, height } = useElementSize(el);

function createGrid() {
  grid.value = [];

  for (let i = 0; i < rows.value; i++) {
    grid.value.push(new Array(cols.value).fill(null));
  }
}

function createNewCell() {
  const topRow = grid.value[0];
  if (!topRow || cols.value <= 0) return;

  const x = Math.floor(Math.random() * cols.value);
  topRow[x] = true;
}

function moveCellsDown() {
  for (let row = rows.value - 1; row >= 0; row--) {
    for (let col = 0; col < cols.value; col++) {
      const cell = grid.value[row]?.[col];
      const below = grid.value[row + 1];
      const nextCell = Array.isArray(below) ? below[col] : cell;
      if (cell === true && nextCell === null && Array.isArray(below)) {
        below[col] = true;
        const currentRow = grid.value[row];
        if (currentRow) {
          currentRow[col] = null;
        }
      }
    }
  }

  setTimeout(() => {
    const bottomRow = grid.value[rows.value - 1];
    const isFilled = bottomRow?.every((c) => c !== null) ?? false;
    const overflowRow = grid.value[rows.value];
    if (Array.isArray(overflowRow) && isFilled) {
      for (let col = 0; col < cols.value; col++) {
        overflowRow[col] = null;
      }
    }
  }, 500);
}

function clearColumn() {
  const bottomRow = grid.value[rows.value - 1];
  const isFilled = bottomRow?.every((c) => c === true) ?? false;
  if (!isFilled || !bottomRow) return;

  for (let col = 0; col < cols.value; col++) {
    bottomRow[col] = null;
  }
}

function removeCell(row: number, col: number) {
  const r = grid.value[row];
  if (r) {
    r[col] = null;
  }
}

function calcGrid() {
  const cell = width.value / props.base;

  rows.value = Math.floor(height.value / cell);
  cols.value = Math.floor(width.value / cell);

  createGrid();
}

watch(width, calcGrid);

let intervalId: NodeJS.Timeout | undefined;

let timeoutId: NodeJS.Timeout | undefined;

onMounted(() => {
  timeoutId = setTimeout(calcGrid, 50);

  intervalId = setInterval(() => {
    clearColumn();
    moveCellsDown();
    createNewCell();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
  clearTimeout(timeoutId);
});
</script>

<template>
  <Transition
    appear
    name="fade"
  >
    <div
      :style="{
        '--cell-size': `${width / cols}px`,
        '--grid-rows': rows,
      }"
      :class="cn(`relative w-full`, props.class)"
    >
      <div
        ref="el"
        class="absolute inset-0 grid justify-center -space-y-px"
        :style="{ gridTemplateRows: `repeat(var(--grid-rows), var(--cell-size))` }"
      >
        <div
          v-for="(row, rowIndex) in grid"
          :key="rowIndex"
          class="grid flex-1 grid-flow-col -space-x-px"
          :style="{ gridTemplateColumns: `repeat(${cols}, var(--cell-size))` }"
        >
          <div
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
            :style="{
              '--border-light': theme[100],
              '--border-dark': theme[900],
              '--square-light': theme[500],
              '--square-hover-light': theme[400],
              '--square-dark': theme[700],
              '--square-hover-dark': theme[600],
            }"
            class="relative border border-(--border-light) dark:border-(--border-dark)"
          >
            <div
              :class="
                cn(
                  `absolute inset-0 bg-(--square-light) opacity-0 transition-opacity duration-1000 will-change-[opacity] hover:bg-(--square-hover-light) dark:bg-(--square-dark) dark:hover:bg-(--square-hover-dark)`,
                  cell && 'cursor-pointer opacity-35 dark:opacity-28',
                )
              "
              @click="cell && removeCell(rowIndex, cellIndex)"
            />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

