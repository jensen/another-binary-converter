import { useState } from "react";

interface IUseToggle {
  on?: () => void;
  off?: () => void;
}

const useToggle = ({ on, off }: IUseToggle) => {
  if (!on || !off) throw new Error("on or off callback not declared");

  const [value, setValue] = useState(false);

  const onToggle = () => {
    const cb = value ? off : on;

    if (cb) {
      cb();
    }

    setValue((prev: boolean) => !prev);
  };

  return {
    toggle: value,
    onToggle,
  };
};

export default useToggle;
