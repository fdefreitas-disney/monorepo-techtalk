<template>
  <div class="form-check my-1">
    <input
      class="form-check-input"
      :id="name"
      type="checkbox"
      v-model="input"
    />
    <label class="form-check-label" :for="name">{{ label }}</label>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, ref, toRefs, watch } from "vue";

const props = defineProps({
  name: String,
  label: String,
});
const { name, label } = toRefs(props);

const input = ref("");
const emit = defineEmits(["onChange"]);

watch(input, (newValue) => {
  emit("onChange", name.value, newValue);
});
</script>
