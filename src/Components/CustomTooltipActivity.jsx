export default function CustomTooltipActivity({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-activity">
            <p className="label-activity">{`${payload[0].value}kg`}</p>
            <p className="label-activity">{`${payload[1].value}kCal`}</p>
      </div>
    );
  }

  return null;
};