import React from "react";
import classnames from "classnames";

import BinarySwitch from "components/BinarySwitch";

interface IPanel {
  on: (position: number) => void;
  off: (position: number) => void;
}

const Panel = (props: React.PropsWithChildren<IPanel>) => {
  const total = React.Children.count(props.children);
  const switches = React.Children.map(props.children, (child, index) => {
    if (React.isValidElement(child) && child.type === BinarySwitch) {
      const position = total - index - 1;

      return React.cloneElement(child as React.ReactElement, {
        ...(child as React.ReactElement).props,
        position,
        on: () => props.on(position),
        off: () => props.off(position),
      });
    }

    throw new Error("Use a BinarySwitch as a child of the Panel");
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

export default Panel;
