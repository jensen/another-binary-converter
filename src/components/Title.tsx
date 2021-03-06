import classnames from "classnames";

const Title = () => {
  return (
    <div className={classnames("flex justify-center", "w-full px-16 py-8")}>
      <span className="text-main-title font-black text-white select-none">
        ABC
      </span>
      <sup className="text-4xl w-24 leading-xtight font-light text-white select-none">
        Another Binary Converter
      </sup>
    </div>
  );
};

export default Title;
