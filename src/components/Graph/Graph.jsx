import "./graph.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// eslint-disable-next-line react/prop-types
const Graph = ({ transactions }) => {
  // eslint-disable-next-line react/prop-types
  const transactionData = transactions.reduce((acc, transaction) => {
    const date = transaction.date;
    if (!acc[date]) {
      acc[date] = 0;
    }
    acc[date] += transaction.amount;
    return acc;
  }, {});

  const data = Object.keys(transactionData).map((date) => ({
    date,
    amount: transactionData[date],
  }));

  return (
    <div className="graph">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis style={{ fill: "#d2e3c8" }} dataKey="date" />
          <YAxis style={{ fill: "#d2e3c8" }} />
          <Tooltip
            contentStyle={{
              background: "#4f6f52",
              borderRadius: "5px",
              border: "none ",
              color: "#d2e3c8",
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
            labelStyle={{ color: "#d2e3c8" }}
            cursor={{ fill: "none" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#d2e3c8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
