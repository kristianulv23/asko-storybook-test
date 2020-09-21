import { shallowMount } from "@vue/test-utils";
import AskoMessage from "@/components/AskoMessage/AskoMessage.vue";

describe("AskoMessage.vue", () => {
  it("renders props.label when passed", () => {
    const label = "AskoMessage";
    const wrapper = shallowMount(AskoMessage, {
      propsData: { label }
    });
    expect(wrapper.text()).toMatch(label);
  });
});
