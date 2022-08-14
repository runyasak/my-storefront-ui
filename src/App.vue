<script setup>
import { RouterView } from "vue-router";
import { SfProductCard } from "../node_modules/@storefront-ui/vue";
</script>

<template>
  <SfProductCard image="https://picsum.photos/200/300" />
  <RouterView />
</template>
