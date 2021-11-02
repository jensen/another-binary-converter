import React, { useState } from "react";
import classnames from "classnames";

import BinarySwitch from "components/BinarySwitch";
import Decimal from "components/Decimal";
import Title from "components/Title";

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

    if (React.isValidElement(child)) {
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

  return (
    <div
      className={classnames(
        "flex justify-center space-x-2",
        "p-8",
        "bg-gray-900"
      )}
    >
      {switches}
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
    <main className="h-full bg-gray-900">
      <Title />
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
      <section className="flex justify-center">
        <Decimal value={decimal} />
      </section>
    </main>
  );
};

export default Converter;
