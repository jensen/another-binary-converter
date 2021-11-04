import { useState } from "react";

import BinarySwitch from "components/BinarySwitch";
import Panel from "components/Panel";
import Decimal from "components/Decimal";
import Title from "components/Title";

const Converter = () => {
  /* We store our starting decimal value. */
  const [decimal, setDecimal] = useState(0);

  /*
    The conversion is done as users toggle switches.
    
    We either add or remove the value at the position
    of the toggled switch.
  */
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
