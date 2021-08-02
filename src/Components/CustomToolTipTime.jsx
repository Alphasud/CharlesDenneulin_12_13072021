export default function CustomTooltipTime({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};