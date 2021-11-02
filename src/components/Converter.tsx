import React, { useState } from "react";
import classnames from "classnames";
import BinarySwitch, { IBinarySwitch } from "components/BinarySwitch";

interface IPanel {
  on: (position: number) => void;
  off: (position: number) => void;
}

const Panel = (props: React.PropsWithChildren<IPanel>) => {
  const total = React.Children.count(props.children);
  const switches = React.Children.map(props.children, (child, index) => {
    if (
      typeof child === "string" ||
      typeof child === "number" ||
      typeof child === "boolean"
    ) {
      throw new Error("Use a BinarySwitch as a child of the Panel");
    }

    if ((child as React.ReactElement).props) {
      const position = total - index - 1;
      return React.cloneElement(child as React.ReactElement, {
        ...(child as React.ReactElement).props,
        position,
        on: () => props.on(position),
        off: () => props.off(position),
      });
    }

    return child;
  });

  return <div className="flex border-t border-b">{switches}</div>;
};

interface IDecimal {
  value: number;
}

const Decimal = (props: IDecimal) => {
  return (
    <div className="border-t border-b p-2">
      <span className="text-6xl font-bold" data-testid="decimal-result">
        {props.value}
      </span>
    </div>
  );
};

const Converter = () => {
  const [decimal, setDecimal] = useState(0);

  const on = (position: number) =>
    setDecimal((prev) => prev + Math.pow(2, position));
  const off = (position: number) =>
    setDecimal((prev) => prev - Math.pow(2, position));

  return (
    <>
      <Panel on={on} off={off}>
        <BinarySwitch />
        <BinarySwitch />
        <BinarySwitch />
        <BinarySwitch />
        <BinarySwitch />
        <BinarySwitch />
        <BinarySwitch />
        <BinarySwitch />
      </Panel>
      <Decimal value={decimal} />{" "}
    </>
  );
};

export default Converter;
