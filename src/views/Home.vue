<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="tsx">
import { defineComponent } from "@vue/composition-api";
import HelloWorld from "@/components/HelloWorld.vue";

const helloCell = defineComponent({
  name: "HelloCell",
  props: {
    row: {
      type: Object
    }
  },
  setup(props: { row: { hello: string } }) {
    console.log("cell inner", props);
    const hello = props.row.hello;

    return () => (
      <el-button type="primary" size="mini">
        {hello}
      </el-button>
    );
  }
});

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
  },
  setup() {
    const column = [
      { label: "Hello", key: "hello", comp: helloCell },
      { label: "World", key: "world" }
    ];
    const data = [
      { hello: "hi", world: "wd" },
      { hello: "hello", world: "world" }
    ];

    return {
      column,
      data
    };
  }
});
</script>
