import { useState } from "react";

interface IUseToggle {
  on?: () => void;
  off?: () => void;
}

const useToggle = (callbacks: IUseToggle = {}) => {
  if (!callbacks.on) throw new Error("on callback not declared");
  if (!callbacks.off) throw new Error("off callback not declared");

  const { on, off } = callbacks;

  const [value, setValue] = useState(false);

  const onToggle = () => {
    if (value) {
      off();
    } else {
      on();
    }

    setValue((prev: boolean) => !prev);
  };

  return {
    toggle: value,
    onToggle,
  };
};

export default useToggle;
