<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const isChecked = ref(props.modelValue)

function handleChange() {
  emit('update:modelValue', isChecked.value)
}
</script>

<template>
  <div class="flex items-center">
    <input
      id="switch"
      v-model="isChecked"
      type="checkbox"
      class="toggle-checkbox hidden"
      @change="handleChange"
    >
    <label for="switch" class="toggle-label cursor-pointer">
      <span class="toggle-inner" />
    </label>
  </div>
</template>

  <style>
  .toggle-checkbox {
    display: none; /* 隐藏原始复选框 */
  }

  .toggle-label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 16px;
    background-color: #ccc;
    border-radius: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .toggle-inner {
    position: absolute;
    width: 14px; /* 调整圆点的宽度 */
    height: 14px; /* 调整圆点的高度 */
    background-color: white;
    border-radius: 50%;
    top: 1px; /* 调整圆点的位置 */
    left: 1px;
    transition: transform 0.3s;
  }

  .toggle-checkbox:checked + .toggle-label {
    background-color: #4CAF50; /* 开关打开时的背景色 */
  }

  .toggle-checkbox:checked + .toggle-label .toggle-inner {
    transform: translateX(16px); /* 开关打开时的移动 */
  }
  </style>
