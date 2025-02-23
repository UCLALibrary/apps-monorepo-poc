<script lang="ts" setup>
import type { DepartmentItemType, LocationItemType } from '@/types/types'
import type { PropType } from 'vue'

import IconWithLink from '@/lib-components/IconWithLink.vue'
// COMPONENTS
import SmartLink from '@/lib-components/SmartLink.vue'

// UTILITY FUNCTIONS
import removeHtmlTruncate from '@/utils/removeHtmlTruncate'

import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  alternativeFullName: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  jobRequisitionNumber: {
    type: String,
    default: '',
  },
  jobPostingURL: {
    type: String,
    default: '',
  },
  departments: {
    type: Array as PropType<DepartmentItemType[]>,
    default: () => [],
  },
  associatedLocations: {
    type: Array as PropType<LocationItemType[]>,
    default: () => [],
  },
  payRate: {
    type: String,
    default: '',
  },
})

const parsedText = computed(() => {
  return props.text ? removeHtmlTruncate(props.text, 250) : ''
})
</script>

<template>
  <li class="block-generic-list">
    <div
      v-if="jobRequisitionNumber"
      class="category"
    >
      JOB #{{ jobRequisitionNumber }}
    </div>
    <SmartLink
      v-if="jobPostingURL"
      :to="jobPostingURL"
      class="title"
    >
      {{ title }}
      <span
        v-if="alternativeFullName"
        :lang="language"
        class="translation"
      >
        {{ alternativeFullName }}</span>
    </SmartLink>
    <h3
      v-else
      class="title-no-link"
    >
      {{ title }}
    </h3>

    <div
      v-if="departments.length || payRate"
      class="byline-group"
    >
      <div
        v-if="departments.length || payRate"
        class="schedule-item"
      >
        <div
          v-for="(item, index) in departments"
          :key="`block-generic-${item.title}-${index}`"
          class="schedule-item"
        >
          {{ item.title }}
        </div>
        <div
          v-if="payRate"
          class="schedule-item"
        >
          {{ payRate }}
        </div>
      </div>
    </div>

    <div
      v-if="associatedLocations.length > 0"
      class="location-group"
    >
      <IconWithLink
        v-for="(location, index) in associatedLocations"
        :key="`block-generic-${location.title}-${index}`"
        :text="location.title"
        icon-name="svg-icon-location"
        :to="location.to"
      />
    </div>
    <div
      v-if="text"
      class="text"
    >
      {{ parsedText }}
    </div>
  </li>
</template>

<style lang="scss" scoped>
.block-generic-list {
  background-color: var(--color-theme, var(--color-white));
  font-family: var(--font-primary);
  position: relative;

  display: flex;
  flex-direction: column;

  .section-title {
    margin-bottom: var(--space-m);
    @include step-3;
    color: var(--color-primary-blue-03);
  }

  .category {
    @include overline;
    color: var(--color-primary-blue-05);
    margin-bottom: var(--space-s);
  }

  .title {
    @include card-clickable-area;
    display: block;

    .translation {
      display: block;
    }
  }

  .title,
  .title-no-link {
    @include step-1;
    color: var(--color-primary-blue-03);
    margin-bottom: var(--space-s);
    line-height: $line-height--1;
  }

  .byline-group {
    display: flex;
    flex-direction: column;

    @include step-0;
    color: var(--color-secondary-grey-05);
    margin-bottom: var(--space-s);

    &:last-child {
      margin-bottom: 0;
    }
  }

  .text {
    @include step-0;
    color: var(--color-black);
    @include truncate(4);
    margin-left: initial;
    margin-right: initial;
  }

  .location-group {
    display: flex;
    flex-direction: column;

    color: var(--color-primary-blue-03);
    font-family: var(--font-secondary);
    font-size: 20px;
    line-height: 1;
    margin-bottom: var(--space-s);
    z-index: 10;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .location-link,
  .location-text {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;

    margin-bottom: 8px;
  }

  .location-link {
    z-index: 20;
  }

  // Hovers
  @media #{$has-hover} {
    .title:hover {
      @include link-hover;
    }
  }
}
</style>
