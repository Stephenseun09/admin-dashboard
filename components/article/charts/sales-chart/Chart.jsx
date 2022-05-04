import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { salesData } from "../../../../data/navdata";

export default class Chart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={300}
          data={salesData}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="var(--secondarySoft)" />
          <YAxis stroke="var(--secondarySoft)" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#f3afc6"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="orders" stroke="#89d4eb" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
