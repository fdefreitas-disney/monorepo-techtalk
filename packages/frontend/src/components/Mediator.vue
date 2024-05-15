<template>
  <div class="card p-3">
    <InputText name="name" label="Nombre" @onChange="setPayload" />
    <InputText name="lastName" label="Apellido" @onChange="setPayload" />
    <InputText name="age" label="Edad" @onChange="setPayload" />
    <InputCheckbox
      name="confirmation"
      label="He leido los términos y condiciones"
      @onChange="setPayload"
    />
    <Button @click="savePayload" :valid="validPayload" />
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import InputText from "./InputText.vue";
import InputCheckbox from "./InputCheckbox.vue";
import Button from "./Button.vue";

const payload = reactive({
  name: "",
  lastName: "",
  age: "",
  confirmation: false,
});

const validPayload = ref(false);

const validatePayload = () => {
  validPayload.value = Object.keys(payload).every((key) => payload[key]);
};

const setPayload = (key, value) => {
  payload[key] = value;
  validatePayload();
};

const savePayload = () => {
  console.log(payload);
};
</script>
