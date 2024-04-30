type EllipsisProps = {
  current: number;
  total: number;
};

const Ellipsis = ({ current, total }: EllipsisProps) => {
  const ellipsis = [...new Array(total)].map((_, idx) => (
    <div
      className={`w-2 h-2 rounded-full ${
        idx + 1 <= current ? 'bg-primary-01' : 'bg-primary-04'
      }`}
      key={idx}
    />
  ));

  return <div className="flex gap-2">{ellipsis}</div>;
};

export default Ellipsis;
