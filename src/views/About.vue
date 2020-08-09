<template>
  <div class="about">
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
    <p @click="changeStatus">{{ status }}</p>
  </div>
</template>

<script>
import {
  reactive,
  computed,
  ref,
  watch,
  watchEffect,
  onMounted
} from "@vue/composition-api";

export default {
  setup() {
    const status = ref(false);
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    });
    function increment() {
      state.count++;
    }
    function changeStatus() {
      status.value = !status.value;
    }
    watchEffect(() => {
      console.log(state.count);
    });
    watch(status, (o, n) => {
      console.log(o, n);
    });
    onMounted(() => {
      console.log("onMounted");
    });
    return {
      state,
      increment,
      status,
      changeStatus
    };
  }
};
</script>
