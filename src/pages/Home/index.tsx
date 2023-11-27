import React from "react";
import { observer } from "@/store";
import {
  DollarOutlined,
  UserOutlined,
  ArrowDownOutlined,
  MessageOutlined,
  TeamOutlined,
  AppstoreAddOutlined,
  AuditOutlined,
  DeploymentUnitOutlined,
  MehOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import ReactEcharts from "echarts-for-react";
import { useNavigate } from "react-router-dom";
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
  return <ReactEcharts style={{ height: "100%" }} option={props.option} />;
};
const QuickCard = (props: {
  children: any;
  bgColor: string;
  label: string;
  handleClick: any;
}) => {
  return (
    <div
      className="w-28 h-28 flex flex-col justify-center items-center hover:shadow-lg cursor-pointer"
      onClick={props.handleClick}
    >
      <div
        className="w-20 h-20 p-6 rounded-lg"
        style={{ backgroundColor: props.bgColor + "55", color: props.bgColor }}
      >
        <div className="w-full h-full">{props.children}</div>
      </div>
      <div
        style={{
          textAlign: "center",
          color: "000",
          margin: "5px 0",
          fontWeight: "500",
        }}
      >
        {props.label}
      </div>
    </div>
  );
};
function Home() {
  const navigate = useNavigate();
  const option1 = {
    xAxis: {
      type: "category",
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
    },
    yAxis: {
      type: "value",
      name: "访问趋势",
    },
    series: [
      {
        data: [15, 23, 24, 21, 35, 47, 60, 67, 77, 87, 91, 124],
        type: "line",
      },
    ],
  };
  const option2 = {
    xAxis: {
      type: "category",
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
    },
    yAxis: {
      type: "value",
      name: "每月收入",
    },
    series: [
      {
        data: [120, 200, 105, 80, 70, 101, 130, 102, 105, 140, 70, 505],
        type: "bar",
      },
    ],
  };

  const color = [
    "#c23531",
    "#2f4554",
    "#61a0a8",
    "#d48265",
    "#91c7ae",
    "#749f83",
    "#ca8622",
    "#bda29a",
    "#6e7074",
    "#546570",
    "#c4ccd3",
  ];
  const QuickCardList = [
    {
      label: "用户管理",
      handleClick: () => {
        navigate("/systemManage/userManage");
      },
      bgColor: "",
      children: <TeamOutlined style={{ fontSize: "32px" }} />,
    },
    {
      label: "角色管理",
      bgColor: "",
      handleClick: () => {
        navigate("/systemManage/roleManage");
      },
      children: <AuditOutlined style={{ fontSize: "32px" }} />,
    },
    {
      label: "菜单管理",
      bgColor: "",
      handleClick: () => {
        navigate("/systemManage/menuManage");
      },
      children: <AppstoreAddOutlined style={{ fontSize: "32px" }} />,
    },
    {
      label: "聚合蜂窝图",
      bgColor: "",
      handleClick: () => {
        navigate("/technicalStudy/aggregatedHex");
      },
      children: <DeploymentUnitOutlined style={{ fontSize: "32px" }} />,
    },
    {
      label: "个人中心",
      bgColor: "",
      handleClick: () => {
        navigate("/personal");
      },
      children: <MehOutlined style={{ fontSize: "32px" }} />,
    },
  ];
  QuickCardList.forEach((v, i) => {
    (v as any).bgColor = color[i];
  });
  return (
    <div
      className="home grid gap-3 h-full"
      style={{ gridTemplateRows: "6rem 14rem 34rem" }}
    >
      <div className="grid grid-cols-4 gap-4 h-24 bg-white p-4 box-border ">
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
      <Card title="快捷入口" bordered={false}>
        <div
          className="grid justify-between justify-items-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {QuickCardList.map((v, i) => {
            return (
              <QuickCard
                key={`QuickCard-${i}`}
                bgColor={v.bgColor}
                label={v.label}
                handleClick={v.handleClick}
              >
                {v.children}
              </QuickCard>
            );
          })}
        </div>
      </Card>
      <div className="grid grid-cols-2 gap-4 h-full bg-white">
        <ChartBox option={option1}></ChartBox>
        <ChartBox option={option2}></ChartBox>
      </div>
    </div>
  );
}
export default observer(Home);
