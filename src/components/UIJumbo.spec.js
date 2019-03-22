import React from "react";
import { mount } from "../enzyme";
import Jumbo from "./UIJumbo";

describe("<UIJumbo />", () => {
  it("renders elements passed as a children in a page in a fixed format", () => {
    const text = "This is a test text";
    const jsx = (
      <Jumbo>
        <h1>{text}</h1>
      </Jumbo>
    );
    const wrapper = mount(jsx);
    expect(wrapper.find(".row")).toBeDefined();
    expect(wrapper.find(".row")).toHaveLength(1);
    expect(wrapper.find(".col")).toBeDefined();

    // We expect it have to two columns
    expect(wrapper.find(".col")).toHaveLength(2);

    // And the second column should render the children
    expect(
      wrapper
        .find(".col")
        .at(1)
        .text()
    ).toEqual(text);
  });
});
