import { useState } from "react";
import classnames from "classnames";

export interface IBinarySwitch {
  position?: number;
  on?: () => void;
  off?: () => void;
}

const BinarySwitch = (props: IBinarySwitch) => {
  const [on, toggle] = useState(false);

  const onClick = () => {
    const cb = on ? props.off : props.on;

    if (cb) {
      cb();
    }

    toggle((prev: boolean) => !prev);
  };

  return (
    <div
      className={classnames("flex flex-col", "w-24 h-64", "p-2", "bg-gray-50")}
      data-testid={`binary-switch-${props.position}`}
    >
      <div
        className={classnames(
          "flex justify-center items-center",
          "w-full h-24",
          "rounded hover:cursor-pointer",
          { "bg-green-400": on === true, "bg-red-400": on === false },
          {
            transform: true,
            "duration-300 ease-in-out": true,
            "translate-y-36": on === false,
          }
        )}
        onClick={onClick}
      >
        <span className="text-white text-6xl font-bold select-none">
          {on ? "1" : "0"}
        </span>
      </div>
    </div>
  );
};

export default BinarySwitch;
