import React from "react";
import { observer } from "@/store";
import {
  DollarOutlined,
  UserOutlined,
  ArrowDownOutlined,
  MessageOutlined,
} from "@ant-design/icons";

function Home() {
  return (
    <div className="home">
      <div className="grid grid-cols-4 gap-4 h-16">
        <div className="home-card bg-[#33cabb]">
          <div>
            <DollarOutlined style={{ fontSize: "30px" }} />
          </div>
          <div>
            <span className="home-card-num">10000</span>
            <span>收入</span>
          </div>
        </div>
        <div className="home-card bg-[#f96868]">
          <div>
            <UserOutlined style={{ fontSize: "30px" }} />
          </div>
          <div>
            <span className="home-card-num">200000</span>
            <span>访问</span>
          </div>
        </div>
        <div className="home-card bg-[#15c377]">
          <div>
            <ArrowDownOutlined style={{ fontSize: "30px" }} />
          </div>
          <div>
            <span className="home-card-num">1000</span>
            <span>下载</span>
          </div>
        </div>
        <div className="home-card bg-[#926dde]">
          <div>
            <MessageOutlined style={{ fontSize: "30px" }} />
          </div>
          <div>
            <span className="home-card-num">203</span>
            <span>留言</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default observer(Home);
