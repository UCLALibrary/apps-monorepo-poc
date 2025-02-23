<script lang="ts" setup>
import type { PropType } from 'vue'

import SvgIconSharePrinter from 'ucla-library-design-tokens/assets/svgs/icon-share-printer.svg'
import { computed, defineAsyncComponent } from 'vue'

const props = defineProps({
  amenities: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
})

const SvgIconClock = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-clock.svg'),
)
const SvgIconAccessible = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-accessible.svg'),
)
const SvgIconChair = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-chair.svg'),
)
const SvgIconVirtual = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-virtual.svg'),
)
const SvgIconLaptop = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-laptop.svg'),
)
const SvgIconLocker = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-locker.svg'),
)
const SvgIconLight = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-light.svg'),
)
/* const SvgIconSharePrinter = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-share-printer.svg')
) */
const SvgIconBook = defineAsyncComponent(() =>
  import('ucla-library-design-tokens/assets/svgs/icon-book.svg'),
)

const amenitiesMapping = {
  'icon-clock': {
    icon: SvgIconClock,
    label: '24 Hour Study Space',
  },
  'icon-accessible': {
    icon: SvgIconAccessible,
    label: 'ADA Stations',
  },
  'icon-chair': {
    icon: SvgIconChair,
    label: 'Cafe',
  },
  'icon-virtual': {
    icon: SvgIconVirtual,
    label: 'Computer/Laptop Access',
  },
  'icon-laptop': {
    icon: SvgIconLaptop,
    label: 'Laptop Lending',
  },
  'icon-locker': {
    icon: SvgIconLocker,
    label: 'Locker',
  },
  'icon-light': {
    icon: SvgIconLight,
    label: 'Makerspace',
  },
  'icon-share-printer': {
    icon: SvgIconSharePrinter,
    label: 'Print, Copy and Scan',
  },
  'icon-book': {
    icon: SvgIconBook,
    label: 'Research Help',
  },
}

const parsedAmenities = computed(() => {
  return props.amenities.map((key) => {
    const amenitiesItem = amenitiesMapping[key as keyof typeof amenitiesMapping]
    return {
      svgIcon: amenitiesItem.icon,
      svgLabel: amenitiesItem.label,
    }
  })
})
</script>

<template>
  <div class="block-amenities">
    <h3 class="amenities-title">
      At This Location
    </h3>
    <div class="amenity-column">
      <ul class="amenities-list">
        <li v-for="(item, index) in parsedAmenities" :key="`${item.svgLabel}-${index}`" class="amenitiy-row">
          <component :is="item.svgIcon" v-if="item.svgIcon" />

          <span class="amenity-name">{{ item.svgLabel }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block-amenities {
  //max-height: 200px;
  max-width: $container-l-main + px;
  width: 100%;

  .amenities-title {
    @include step-2;
    color: var(--color-primary-blue-03);
    margin-bottom: 16px;
    margin-left: 2px;
  }

  .amenity-column ul {
    display: flex;
    flex-wrap: wrap;
  }

  .amenity-column ul li {
    list-style: none;
    flex-basis: 32%;
  }

  .amenitiy-row {
    margin-bottom: 16px;
    display: flex;
    align-content: center;
  }

  .amenity-name {
    color: var(--color-black);
    @include step-0;
    padding-left: 5px;
  }

  // Adjusts: Svg shareprinter to white bg and blue stroke
  :deep(.svg__fill--secondary-grey-01) {
    fill: var(--color-white);
  }

  :deep(.svg__stroke--black) {
    stroke: var(--color-primary-blue-03);
  }

  :deep(.svg__fill--black) {
    fill: var(--color-primary-blue-03);
  }

  // Breakpoints

  @media #{$medium} {
    .amenity-column ul {
      display: flex;
      flex-wrap: wrap;
    }

    .amenity-column ul li {
      list-style: none;
      flex-basis: 50%;
    }
  }

  @media #{$small} {
    .amenity-column ul {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }

    .amenity-column ul li {
      list-style: none;
      flex-basis: 20%;
    }
  }
}
</style>
