import React from "react";
// import useDash from "../../Hook/useDash";
import { XAxis, YAxis, Bar, ResponsiveContainer,  CartesianGrid, Tooltip, Area, Legend, Line, ComposedChart, BarChart } from "recharts";

const Dasboard = () => {
//   const [dash] = useDash();
const data = [
  {
      "month": "Mar",
      "investment": 100000,
      "sell": 170241,
      "revenue": 10401
  },
  {
      "month": "Apr",
      "investment": 200000,
      "sell": 200423,
      "revenue": 24500
  },
  {
      "month": "May",
      "investment": 500000,
      "sell": 250726,
      "revenue": 67010
  },
  {
      "month": "Jun",
      "investment": 500000,
      "sell": 130529,
      "revenue": 40405
  },
  {
      "month": "Jul",
      "investment": 600000,
      "sell": 180601,
      "revenue": 50900
  },
  {
      "month": "Aug",
      "investment": 700000,
      "sell": 211670,
      "revenue": 61000
  }
];    

  return (
      <>
       <div className="flex">
       <div style={{ width: '100%', height: 500 }}>
       <h1 className="text-center text-gray-800 capitalize text-4xl m-5 font-sansfont-bold">INVESTMENT, REVENUE AND Sells Per Month</h1>
        <ResponsiveContainer>
          <ComposedChart
            width={800}
            height={800}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="month" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="sell" barSize={30} fill="#413ea0" />
            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div style={{ width: '100%', height: 500 }}>
        <h1 className="text-center text-gray-800 capitalize text-4xl m-5 font-sansfont-bold">Sells Per Month</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" barSize={30} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      </div>
       </div>
      </>
  );
};

export default Dasboard;
