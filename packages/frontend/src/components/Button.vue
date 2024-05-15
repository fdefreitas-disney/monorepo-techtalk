<template>
  <button class="btn btn-primary my-3" :disabled="!valid">Aceptar</button>
</template>

<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  valid: Boolean,
});

const { valid } = toRefs(props);
</script>
