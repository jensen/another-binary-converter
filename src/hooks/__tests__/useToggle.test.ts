import { renderHook } from "@testing-library/react-hooks";
import useToggle from "hooks/useToggle";

describe("useToggle", () => {
  it("should throw an error if callbacks are not provided for on", () => {
    const { result } = renderHook(() => useToggle());
    expect(result?.error?.message).toBe("on callback not declared");
  });
  it("should throw an error if callbacks are not provided for off", () => {
    const { result } = renderHook(() => useToggle({ on: () => null }));
    expect(result?.error?.message).toBe("off callback not declared");
  });
});
