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
        "xs:h-16 sm:h-16 md:h-32 lg:h-48 xl:h-64 xs:p-1 sm:p-2",
        "xs:border-2 md:border-8 border-gray-100",
        "rounded-full shadow:md",
        "bg-gray-800"
      )}
      onClick={onToggle}
      data-testid={`binary-switch-${props.position}`}
    >
      <div
        className={classnames(
          "flex justify-center items-center",
          "xs:w-4 sm:w-4 md:w-8 lg:w-12 xl:w-24",
          "xs:h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24",
          "rounded-full hover:cursor-pointer",
          { "bg-green-400": toggle === true, "bg-red-400": toggle === false },
          {
            transform: true,
            "duration-300 ease-in-out": true,
            "xs:translate-y-4 sm:translate-y-4 md:translate-y-8 lg:translate-y-20 xl:translate-y-32":
              toggle === false,
          }
        )}
      >
        <span className="text-white xs:text-sm sm:text-xl md:text-4xl lg:text-6xl font-bold select-none">
          {toggle ? "1" : "0"}
        </span>
      </div>
    </div>
  );
};

export default BinarySwitch;
