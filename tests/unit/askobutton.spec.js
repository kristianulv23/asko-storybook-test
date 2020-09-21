import { shallowMount } from "@vue/test-utils";
import AskoButton from "@/components/AskoButton/AskoButton.vue";

describe("AskoButton.vue", () => {
  it("renders props.label when passed", () => {
    const label = "Button";
    const wrapper = shallowMount(AskoButton, {
      propsData: { label },
    });
    expect(wrapper.text()).toMatch(label);
  });
});
