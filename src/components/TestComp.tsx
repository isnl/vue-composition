import { defineComponent } from "@vue/composition-api";
import { VueConstructor } from "vue/types/umd";

type TestCompProps = {
  comp: VueConstructor<Vue>;
};
export default defineComponent<TestCompProps>({
  name: "TestComp",
  props: {
    comp: {
      type: Object
    }
  },
  setup(props) {
    const { comp: Comp } = props;
    return () => <Comp />;
  }
});
