import { render } from "@testing-library/react";

import Panel from "components/Panel";
import Title from "components/Title";

describe("Panel", () => {
  it("should throw an error if we try and render something other than a BinarySwitch in a Panel", () => {
    expect(() =>
      render(
        <Panel on={() => null} off={() => null}>
          String
        </Panel>
      )
    ).toThrow();
    expect(() =>
      render(
        <Panel on={() => null} off={() => null}>
          <Title />
        </Panel>
      )
    ).toThrow();
  });
});
