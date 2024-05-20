import React, { Component } from "react";

function PanelItem(props: {
  children?: any;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  return (
    <div
      onClick={(e) => {
        props.onClick ? props.onClick(e) : null;
      }}
    >
      {props.children ? props.children : "222"}
    </div>
  );
}

export default PanelItem;
