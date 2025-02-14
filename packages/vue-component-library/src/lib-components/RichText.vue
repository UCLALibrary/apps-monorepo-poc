<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import accessibleExternalLinks from '@/utils/accessibleExternalLinks'
import stripCraftURLFromText from '@/utils/stripCraftURLFromText'

// UTILITY FUNCTIONS
import { computed } from 'vue'

const props = defineProps({
  richTextContent: {
    type: String,
    default: '',
  },
})

const theme = useTheme()

const classes = computed(() => {
  return ['rich-text', theme?.value || '']
})

const parsedContent = computed(() => {
  const content = stripCraftURLFromText(props.richTextContent)

  return accessibleExternalLinks(content)
})
</script>

<template>
  <div :class="classes">
    <div
      class="parsed-content"
      v-html="parsedContent"
    />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/default/_rich-text.scss";
@import "@/styles/ftva/_rich-text.scss";
</style>
