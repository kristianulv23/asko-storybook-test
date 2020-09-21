import { shallowMount } from "@vue/test-utils";
import AskoIcon from "@/components/AskoIcon/AskoIcon.vue";

describe("AskoIcon.vue", () => {
  it("renders props.label when passed", () => {
    const label = "AskoIcon";
    const wrapper = shallowMount(AskoIcon, {
      propsData: { label }
    });
    expect(wrapper.text()).toMatch(label);
  });
});
