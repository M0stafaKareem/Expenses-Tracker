import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const monthValues = props.dataPoints.map((item) => item.value);
  const maxMonthExpensesValue = Math.max(...monthValues);
  return (
    <div className="chart">
      {props.dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={maxMonthExpensesValue}
          label={item.label}
        />
      ))}
    </div>
  );
}
export default Chart;
