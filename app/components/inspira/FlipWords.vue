<script setup lang="ts">
import { cn } from "@inspira-ui/plugins";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

interface Props {
  words: string[];
  duration?: number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 3000,
  class: "",
});

defineEmits(["animationStart", "animationComplete"]);

const firstWord = computed(() => props.words[0] ?? "");
const currentWord = ref(firstWord.value);
const isVisible = ref(true);
const timeoutId = ref<number | null>(null);

function startAnimation() {
  if (props.words.length <= 1) return;

  isVisible.value = false;

  setTimeout(() => {
    const currentIndex = props.words.indexOf(currentWord.value);
    const nextIndex = currentIndex >= 0 ? currentIndex + 1 : 0;
    const nextWord = props.words[nextIndex] ?? firstWord.value;
    currentWord.value = nextWord;
    isVisible.value = true;
  }, 600);
}

const splitWords = computed(() => {
  return currentWord.value.split(" ").map((word) => ({
    word,
    letters: word.split(""),
  }));
});

function startTimeout() {
  if (props.words.length <= 1) return;

  timeoutId.value = window.setTimeout(() => {
    startAnimation();
  }, props.duration);
}

onMounted(() => {
  startTimeout();
});

onBeforeUnmount(() => {
  if (timeoutId.value) {
    clearTimeout(timeoutId.value);
  }
});

watch(isVisible, (newValue) => {
  if (newValue) {
    startTimeout();
  }
});
</script>

<template>
  <div class="relative inline-grid px-2 align-top">
    <span
      v-for="word in props.words"
      :key="`sizer-${word}`"
      aria-hidden="true"
      :class="cn('pointer-events-none invisible col-start-1 row-start-1 inline-block text-left text-neutral-900 dark:text-neutral-100', props.class)"
    >
      {{ word }}
    </span>
    <Transition
      @after-enter="$emit('animationStart')"
      @after-leave="$emit('animationComplete')"
    >
      <div
        v-show="isVisible"
        :class="
          cn(
            `relative z-10 col-start-1 row-start-1 inline-block text-left text-neutral-900 dark:text-neutral-100`,
            props.class,
          )
        "
      >
        <template
          v-for="(wordObj, wordIndex) in splitWords"
          :key="wordObj.word + wordIndex"
        >
          <span
            class="inline-block whitespace-nowrap opacity-0"
            :style="{
              animation: `fadeInWord 0.3s ease forwards`,
              animationDelay: `${wordIndex * 0.3}s`,
            }"
          >
            <span
              v-for="(letter, letterIndex) in wordObj.letters"
              :key="wordObj.word + letterIndex"
              class="inline-block opacity-0"
              :style="{
                animation: `fadeInLetter 0.2s ease forwards`,
                animationDelay: `${wordIndex * 0.3 + letterIndex * 0.05}s`,
              }"
            >
              {{ letter }}
            </span>
            <span class="inline-block">&nbsp;</span>
          </span>
        </template>
      </div>
    </Transition>
  </div>
</template>

<style>
@keyframes fadeInWord {
  0% {
    opacity: 0;
    transform: translateY(10px);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes fadeInLetter {
  0% {
    opacity: 0;
    transform: translateY(10px);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.v-enter-active {
  animation: enterWord 0.6s ease-in-out forwards;
}

.v-leave-active {
  animation: leaveWord 0.6s ease-in-out forwards;
}

@keyframes enterWord {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes leaveWord {
  0% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
  100% {
    opacity: 0;
    transform: scale(2);
    filter: blur(8px);
  }
}
</style>

