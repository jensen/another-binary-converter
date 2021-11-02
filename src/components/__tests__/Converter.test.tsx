import { render, fireEvent, getByText } from "@testing-library/react";

import Converter from "components/Converter";

describe("Converter", () => {
  it("should display 8 digits of binary", () => {
    const { getByTestId } = render(<Converter />);

    expect(getByTestId("binary-switch-0")).toBeInTheDocument();
    expect(getByTestId("binary-switch-1")).toBeInTheDocument();
    expect(getByTestId("binary-switch-2")).toBeInTheDocument();
    expect(getByTestId("binary-switch-3")).toBeInTheDocument();
    expect(getByTestId("binary-switch-4")).toBeInTheDocument();
    expect(getByTestId("binary-switch-5")).toBeInTheDocument();
    expect(getByTestId("binary-switch-6")).toBeInTheDocument();
    expect(getByTestId("binary-switch-7")).toBeInTheDocument();
  });

  it("should switch from 0 to 1 when clicked on", async () => {
    const { getByTestId } = render(<Converter />);

    expect(getByTestId("binary-switch-0")).toHaveTextContent("0");

    fireEvent.click(getByText(getByTestId("binary-switch-0"), "0"));

    expect(getByTestId("binary-switch-0")).toHaveTextContent("1");
  });

  it("should convert from binary to decimal when switches are toggled", () => {
    const { getByTestId } = render(<Converter />);

    fireEvent.click(getByText(getByTestId("binary-switch-0"), "0"));

    expect(getByTestId("decimal-result")).toHaveTextContent("1");

    fireEvent.click(getByText(getByTestId("binary-switch-1"), "0"));

    expect(getByTestId("decimal-result")).toHaveTextContent("3");

    fireEvent.click(getByText(getByTestId("binary-switch-0"), "1"));

    expect(getByTestId("decimal-result")).toHaveTextContent("2");

    fireEvent.click(getByText(getByTestId("binary-switch-7"), "0"));

    expect(getByTestId("decimal-result")).toHaveTextContent("130");
  });
});
