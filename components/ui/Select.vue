<script lang="ts" setup>
import { ref } from 'vue'

interface Props {
  label?: string;
  options?: any[];
  classCustom?: string;
  optionValue: string;
  optionLabel: string;
  modelValue: string;
  error?: string;
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>()

const selectEl = ref<HTMLSelectElement | null>(null)
const selectId = props.optionValue

// Focus + simulate dropdown opening
const focusSelect = () => {
  if (selectEl.value) {
    selectEl.value.focus()
    selectEl.value.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
  }
}
</script>

<template>
  <div class="select">
    <label class="select__label" :for="selectId" @click="focusSelect">
      {{ label }}
    </label>
    <div :class="['select__wrapper', classCustom]">
      <select ref="selectEl" class="select__input" :id="optionValue" :value="modelValue"
        @change="emit('update:modelValue', $event.target.value)">
        <option v-for="(item, index) in options" :key="index" :value="item[optionValue]">
          {{ item[optionLabel] }}
        </option>
      </select>
    </div>
    <p v-if="error" class="select__error">{{ error }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  &__label {
    font-family: "DM Sans";
    font-weight: 400;
    font-size: clamp(1rem, calc(1vw + 0.5rem), 2rem);
    display: block;
  }

  &__input {
    min-width: 200px;
    font-family: "DM Sans";
    font-weight: 500;
    font-size: clamp(1rem, calc(1vw + 0.5rem), 2rem);

    border: 2px solid;
    border-color: white;
    outline: none;
    border-radius: 10px;
    padding: 5px 10px;
  }

  &__input:focus {
    border-color: $color8;
  }

  &__error {
    color: red;
    font-style: italic;
    margin-top: 5px;
  }
}
</style>
