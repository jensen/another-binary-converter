import classnames from "classnames";

import useToggle from "hooks/useToggle";

export interface IBinarySwitch {
  position?: number;
  on?: () => void;
  off?: () => void;
}

const BinarySwitch = (props: IBinarySwitch) => {
  const { on, off } = props;

  const { toggle, onToggle } = useToggle({ on, off });

  return (
    <div
      className={classnames(
        "flex flex-col",
        "h-64 p-2",
        "border-8 border-gray-100",
        "rounded-full shadown:md",
        "bg-gray-800"
      )}
      onClick={onToggle}
      data-testid={`binary-switch-${props.position}`}
    >
      <div
        className={classnames(
          "flex justify-center items-center",
          "w-24 h-24",
          "rounded-full hover:cursor-pointer",
          { "bg-green-400": toggle === true, "bg-red-400": toggle === false },
          {
            transform: true,
            "duration-300 ease-in-out": true,
            "translate-y-32": toggle === false,
          }
        )}
      >
        <span className="text-white text-6xl font-bold select-none">
          {toggle ? "1" : "0"}
        </span>
      </div>
    </div>
  );
};

export default BinarySwitch;
