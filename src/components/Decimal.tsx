import classnames from "classnames";

interface IDecimal {
  value: number;
}

const Decimal = (props: IDecimal) => {
  return (
    <div
      className={classnames(
        "flex justify-center",
        "w-1/2 p-2",
        "rounded-full shadown:md select-none",
        "bg-gray-50"
      )}
    >
      <span className="text-9xl font-bold" data-testid="decimal-result">
        {props.value}
      </span>
    </div>
  );
};

export default Decimal;
