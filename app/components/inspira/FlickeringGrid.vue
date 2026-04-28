<template>
  <div ref="containerRef" :class="cn('h-full w-full', props.class)">
    <canvas ref="canvasRef" class="pointer-events-none h-full w-full" />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@inspira-ui/plugins'
import { computed, onBeforeUnmount, onMounted, ref, toRefs } from 'vue'

interface FlickeringGridProps {
  squareSize?: number
  gridGap?: number
  flickerChance?: number
  color?: string
  width?: number
  height?: number
  class?: string
  maxOpacity?: number
}

interface GridParams {
  cols: number
  rows: number
  squares: Float32Array
  dpr: number
}

const props = withDefaults(defineProps<FlickeringGridProps>(), {
  squareSize: 4,
  gridGap: 6,
  flickerChance: 0.3,
  color: '#ffffff',
  maxOpacity: 0.3,
})

const { squareSize, gridGap, flickerChance, color, maxOpacity, width, height } = toRefs(props)

const containerRef = ref<HTMLDivElement>()
const canvasRef = ref<HTMLCanvasElement>()
const context = ref<CanvasRenderingContext2D>()
const isInView = ref(false)
const gridParams = ref<GridParams>()

let animationFrameId: number | undefined
let resizeObserver: ResizeObserver | undefined
let intersectionObserver: IntersectionObserver | undefined
let lastTime = 0

const computedColor = computed((): string => {
  const value = color.value.trim()

  if (value.startsWith('rgb')) {
    return value.replace(/rgba?\((.*)\)/, 'rgba($1,')
  }

  const hex = value.replace(/^#/, '')
  const bigint = Number.parseInt(hex.length === 3 ? hex.split('').map((char) => char + char).join('') : hex, 16)

  if (Number.isNaN(bigint)) {
    return 'rgba(255, 255, 255,'
  }

  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return `rgba(${r}, ${g}, ${b},`
})

function setupCanvas(canvas: HTMLCanvasElement, canvasWidth: number, canvasHeight: number): GridParams {
  const dpr = window.devicePixelRatio || 1

  canvas.width = canvasWidth * dpr
  canvas.height = canvasHeight * dpr
  canvas.style.width = `${canvasWidth}px`
  canvas.style.height = `${canvasHeight}px`

  const cols = Math.floor(canvasWidth / (squareSize.value + gridGap.value))
  const rows = Math.floor(canvasHeight / (squareSize.value + gridGap.value))
  const squares = new Float32Array(cols * rows)

  for (let i = 0; i < squares.length; i += 1) {
    squares[i] = Math.random() * maxOpacity.value
  }

  return { cols, rows, squares, dpr }
}

function updateSquares(squares: Float32Array, deltaTime: number): void {
  for (let i = 0; i < squares.length; i += 1) {
    if (Math.random() < flickerChance.value * deltaTime) {
      squares[i] = Math.random() * maxOpacity.value
    }
  }
}

function drawGrid(ctx: CanvasRenderingContext2D, params: GridParams): void {
  const canvas = canvasRef.value

  if (!canvas) return

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (let i = 0; i < params.cols; i += 1) {
    for (let j = 0; j < params.rows; j += 1) {
      const opacity = params.squares[i * params.rows + j]
      ctx.fillStyle = `${computedColor.value}${opacity})`
      ctx.fillRect(
        i * (squareSize.value + gridGap.value) * params.dpr,
        j * (squareSize.value + gridGap.value) * params.dpr,
        squareSize.value * params.dpr,
        squareSize.value * params.dpr,
      )
    }
  }
}

function updateCanvasSize(): void {
  const canvas = canvasRef.value
  const container = containerRef.value

  if (!canvas || !container) return

  const newWidth = width.value || container.clientWidth
  const newHeight = height.value || container.clientHeight

  gridParams.value = setupCanvas(canvas, newWidth, newHeight)
}

function animate(time: number): void {
  if (!isInView.value || !gridParams.value || !context.value) return

  const deltaTime = (time - lastTime) / 1000
  lastTime = time

  updateSquares(gridParams.value.squares, deltaTime)
  drawGrid(context.value, gridParams.value)

  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  const canvas = canvasRef.value
  const container = containerRef.value

  if (!canvas || !container) return

  const canvasContext = canvas.getContext('2d')

  if (!canvasContext) return

  context.value = canvasContext
  updateCanvasSize()

  resizeObserver = new ResizeObserver(updateCanvasSize)
  resizeObserver.observe(container)

  intersectionObserver = new IntersectionObserver(([entry]) => {
    isInView.value = entry?.isIntersecting ?? false
    lastTime = performance.now()

    if (isInView.value) {
      animationFrameId = requestAnimationFrame(animate)
    }
  })
  intersectionObserver.observe(canvas)
})

onBeforeUnmount(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  resizeObserver?.disconnect()
  intersectionObserver?.disconnect()
})
</script>
