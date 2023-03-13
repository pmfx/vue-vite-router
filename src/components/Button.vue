<template>
    <button @click="counter++">Click me! {{ counter }}</button>
</template>

<script setup>
import { ref } from 'vue'
const counter = ref(0)
</script>