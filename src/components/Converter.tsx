import { useState } from "react";

import BinarySwitch from "components/BinarySwitch";
import Panel from "components/Panel";
import Decimal from "components/Decimal";
import Title from "components/Title";

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
