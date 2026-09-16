import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis } from "recharts";

interface data {
  data: [];
  dataKey: string;
  stroke: string;
  fill: string;
}

export default function Grafic({ data, dataKey, stroke, fill }: data) {
  return (
    <section>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <Area type="monotone" dataKey={dataKey} stroke={stroke} fill={fill} />
          <XAxis dataKey="name" />
          <YAxis />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
}
