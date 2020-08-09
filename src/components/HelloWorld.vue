<template>
  <div class="hello">
    Hello world
    <test-comp :comp="MM"></test-comp>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "@vue/composition-api";
import TestComp from "./TestComp";
import AA from "./AA.vue";
import MM from "./MM";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    TestComp,
    AA,
    MM
  },
  setup(props, ctx) {
    console.log(getCurrentInstance());
    console.log(ctx);
    return {
      AA,
      MM
    };
  }
});
</script>
