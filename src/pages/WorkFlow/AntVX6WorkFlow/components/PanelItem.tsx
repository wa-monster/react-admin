import React, { Component } from "react";

function PanelItem(props: {
  children?: any;
  onMouseDown?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  return (
    <div
      onMouseDown={(e) => {
        props.onMouseDown ? props.onMouseDown(e) : null;
      }}
    >
      {props.children ? props.children : ""}
    </div>
  );
}

export default PanelItem;
