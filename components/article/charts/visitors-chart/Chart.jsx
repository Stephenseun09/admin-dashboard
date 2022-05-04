import React, { PureComponent } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { visitorsData } from "../../../../data/navdata";
import classes from "./index.module.scss";

export default class Chart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <ResponsiveContainer
        width="100%"
        height={400}
        className={classes.chart__container}
      >
        <AreaChart
          width={400}
          height={200}
          data={visitorsData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="uv"
            fill="var(--secondary)"
            stroke="var(--secondarySoft)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
