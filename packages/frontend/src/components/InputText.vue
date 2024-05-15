<template>
  <div class="form-group my-1">
    <label :for="name">{{ label }}</label>
    <input
      class="form-control form-input"
      autocomplete="off"
      :id="name"
      type="text"
      v-model="input"
    />
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
