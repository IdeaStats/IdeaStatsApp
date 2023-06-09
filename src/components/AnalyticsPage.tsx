// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicAnalyticsPage,
  DefaultAnalyticsPageProps
} from "./plasmic/idea_stats_v_1/PlasmicAnalyticsPage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const adsData = [
  {
    weekText: "Week of Apr 2, 2023",
    date: 17,
    clicks: 127,
    impressions: 1657,
    cpc: 2
  },
  {
    weekText: "Week of Apr 17, 2023",
    date: 2,
    clicks: 23,
    impressions: 200,
    cpc: 4
  },
  {
    weekText: "Week of May 5, 2023",
    date: 2,
    clicks: 260,
    impressions: 2900,
    cpc: 7
  }
]

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface AnalyticsPageProps extends Omit<DefaultAnalyticsPageProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultAnalyticsPageProps altogether and have
// total control over the props for your component.
export interface AnalyticsPageProps extends DefaultAnalyticsPageProps {}

function AnalyticsPage_(
  props: AnalyticsPageProps,
  ref: HTMLElementRefOf<"div">
) {
  // Use PlasmicAnalyticsPage to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicAnalyticsPage are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all AnalyticsPageProps here, but feel free
  // to do whatever works for you.

  const [impressionsSelected, setImpressionsSelected] = React.useState(true);
  const [clicksSelected, setClicksSelected] = React.useState(true);
  const [cpcSelected, setCpcSelected] = React.useState(true);

  return <PlasmicAnalyticsPage 
            root={{ ref }}
            graph={
              // <ResponsiveContainer 
              // width="100%" height="100%"
              // >
                <LineChart
                  width={700}
                  height={400}
                  data={adsData}
                  margin={{
                    top: 5,
                    right: 40,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="weekText" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  
                  <Line display={ impressionsSelected ? "inline" : "none" } type="monotone" dataKey="impressions" stroke="#1677ff" />
                  <Line display={ clicksSelected ? "inline" : "none" } type="monotone" dataKey="clicks" stroke="#ff5154" />
                  <Line display={ cpcSelected ? "inline" : "none" } type="monotone" dataKey="cpc" stroke="#f6ad06" />
                </LineChart>
                // </ResponsiveContainer>
            }

            impressionsButton={{
              style: {
                background: impressionsSelected ? "#1677ff" : "#d1d1d1"
              },
              onClick() {
                // Toggle impressionsSelected.
                setImpressionsSelected( impressionsSelected ? false : true );
              }
            }}

            clicksButton={{
              style: {
                background: clicksSelected ? "#ff5154" : "#d1d1d1"
              },
              onClick() {
                // Toggle impressionsSelected.
                setClicksSelected( clicksSelected ? false : true );
              }
            }}

            cpcButton={{
              style: {
                background: cpcSelected ? "#f6ad06" : "#d1d1d1"
              },
              onClick() {
                // Toggle impressionsSelected.
                setCpcSelected( cpcSelected ? false : true );
              }
            }}


          {...props} />;
}

const AnalyticsPage = React.forwardRef(AnalyticsPage_);
export default AnalyticsPage;
