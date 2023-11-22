import React from "react";
import { observer } from "@/store";
import {
  DollarOutlined,
  UserOutlined,
  ArrowDownOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import ReactEcharts from "echarts-for-react";
// import echarts from "echarts";
const HomeCard = ({
  children,
  className,
}: {
  children: any;
  className: string;
}) => {
  return <div className={`home-card ${className}`}>{children}</div>;
};
const ChartBox = (props: { option: Record<string, any> }) => {
  return <ReactEcharts option={props.option} />;
};

function Home() {
  const option1 = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };
  const option2 = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };
  return (
    <div className="home grid gap-3">
      <div className="grid grid-cols-4 gap-4 h-24 bg-white p-4 box-border">
        <HomeCard className="bg-[#33cabb]">
          <div>
            <DollarOutlined style={{ fontSize: "30px" }} />
          </div>
          <div>
            <span className="home-card-num">10000</span>
            <span>收入</span>
          </div>
        </HomeCard>
        <HomeCard className="bg-[#f96868]">
          <div>
            <UserOutlined style={{ fontSize: "30px" }} />
          </div>
          <div>
            <span className="home-card-num">200000</span>
            <span>访问</span>
          </div>
        </HomeCard>
        <HomeCard className="bg-[#15c377]">
          <div>
            <ArrowDownOutlined style={{ fontSize: "30px" }} />
          </div>
          <div>
            <span className="home-card-num">1000</span>
            <span>下载</span>
          </div>
        </HomeCard>
        <HomeCard className="bg-[#926dde]">
          <div>
            <MessageOutlined style={{ fontSize: "30px" }} />
          </div>
          <div>
            <span className="home-card-num">203</span>
            <span>留言</span>
          </div>
        </HomeCard>
      </div>
      <div className="grid grid-cols-2 gap-4 h-80 bg-white">
        <ChartBox option={option1}></ChartBox>
        <ChartBox option={option2}></ChartBox>
      </div>
    </div>
  );
}
export default observer(Home);
