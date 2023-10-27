export interface hexDataOBjType {
  hexPointsArr: Record<string, any>[];
  pointsArr: Record<string, any>[];
  showHexPointsMap: Map<any, any>;
  edge: number;
}
// 获取一个六边形的顶点
function calcHexPoint(centerX: number, centerY: number, edge: number) {
  const x = edge * (Math.sqrt(3) / 2);
  const y = edge / 2;
  const top = centerY - 2 * y;
  const left = centerX - x;
  //   let x1, x2, x3, x4, x5, x6;
  //   let y1, y2, y3, y4, y5, y6;
  const x1 = centerX;
  const x2 = centerX + x;
  const x3 = centerX + x;
  const x4 = centerX;
  const x5 = centerX - x;
  const x6 = centerX - x;

  const y1 = centerY - edge;
  const y2 = centerY - y;
  const y3 = centerY + y;
  const y4 = centerY + edge;
  const y5 = centerY + y;
  const y6 = centerY - y;

  const points = [
    { x: x1, y: y1 },
    { x: x2, y: y2 },
    { x: x3, y: y3 },
    { x: x4, y: y4 },
    { x: x5, y: y5 },
    { x: x6, y: y6 },
  ];
  return points;
}
// 根据 范围宽高 和正六边形 得出所有六边形的顶点
function calcHexPosition(width: number, height: number, edge: number) {
  const HexW = edge * (Math.sqrt(3) / 2) * 2;
  const HexH = edge * 2;
  const columns = Math.ceil(width / HexW) + 2;
  const rows = Math.ceil(height / ((HexH / 2) * 3)) * 2;
  const oddLeft = 0 - edge * (Math.sqrt(3) / 2);
  const oddTop = 0 - (edge / 2) * 3;
  const evenLeft = 0;
  const evenTop = 0;
  const hexPointsArr = [];

  for (let i = 0; i < rows; i++) {
    const rowHexCenterPoints = [];
    let centerY;
    if ((i + 1) % 2 === 1) {
      centerY = oddTop + ((i * HexH) / 4) * 3 + HexH / 2;
    } else {
      centerY = evenTop + (((i - 1) * HexH) / 4) * 3 + HexH / 2;
    }

    for (let j = 0; j < columns; j++) {
      let centerX;
      if ((i + 1) % 2 === 1) {
        centerX = oddLeft + j * HexW + HexW / 2;
      } else {
        centerX = evenLeft + j * HexW + HexW / 2;
      }
      const polygon = calcHexPoint(centerX, centerY, edge);
      rowHexCenterPoints.push({
        polygon,
        id: `${i + 1}-${j + 1}`,
      });
    }
    hexPointsArr.push(rowHexCenterPoints);
  }
  return hexPointsArr;
}
// 射线判断点和几何图形的关系
function rayCasting(
  point: Record<string, any>,
  polygon: Record<string, any>[]
) {
  let flag;
  const px = point.x;
  const py = point.y;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i, i++) {
    const sx = polygon[i].x;
    const sy = polygon[i].y;
    const ex = polygon[j].x;
    const ey = polygon[j].y;
    // 点在当前线段的顶点上
    if ((px === sx && py === sy) || (px === ex && py === ey)) {
      return true;
    }
    // 点的平行射线和线段重合同时点在线段上
    if (
      py === sy &&
      py === ey &&
      ((sx < px && ex > px) || (sx > px && ex < px))
    ) {
      return true;
    }

    // 线段的两端在点的平行线两边
    if (
      (sy > py && ey < py) ||
      (sy < py && ey > py) ||
      (sy === py && ey !== py) ||
      (ey === py && sy !== py)
    ) {
      // if((sy>=py&&ey<py)||(sy<py&&ey>=py)){
      // 拿到交点的坐标
      const x = sx + (ex - sx) * ((sy - py) / (sy - ey));
      // p点是不是就是交点
      if (x === px) {
        return true;
      }
      // 做的射线是一个起点为point点 向右的水平线,如果在左边不考虑相交
      if (x > px) {
        flag = !flag;
      }
    }
  }
  return flag ? true : false;
}
// 根据点位画正六边形
function drawHex(
  ctx: CanvasRenderingContext2D,
  points: Record<string, any>,
  color: string
) {
  ctx.beginPath();
  points.forEach(function (point: Record<string, any>, i: number) {
    if (i === 0) {
      ctx.moveTo(point.x, point.y);
    } else {
      ctx.lineTo(point.x, point.y);
    }
    // ctx.fillStyle="#fff";
  });
  ctx.closePath();

  ctx.fillStyle = color;
  ctx.fill();
  // Promise.resolve().then(()=>{
  //     ctx.font="40px Arial";
  //     ctx.fillStyle = '#FFF'
  //     ctx.fillText(i,points[0].x-30,points[0].y+70)
  // })
  // ctx.strokeText(i,points[0].x+40,points[0].y+40)
  // ctx.stroke()
}
// 显示某个六边形的数字
function drawNum(
  ctx: CanvasRenderingContext2D,
  points: Record<string, any>,
  i: string,
  edge: number
) {
  Promise.resolve().then(function () {
    ctx.font = Math.floor(edge / 2) + "px Arial";
    ctx.fillStyle = "#FFF";
    ctx.fillText(
      i,
      points[0].x - Math.floor(edge / 3),
      points[0].y + Math.floor(edge * 1.2)
    );
  });
}
// 渲染要显示的数组里的正六边形
export function renderHex(
  ctx: CanvasRenderingContext2D,
  hexDataOBj: hexDataOBjType
) {
  const hexPointsArr = [...hexDataOBj.showHexPointsMap.values()];
  const colors = [
    "#7cb5ec",
    "#434348",
    "#90ed7d",
    "#f7a35c",
    "#8085e9",
    "#f15c80",
    "#e4d354",
    "#2b908f",
    "#f45b5b",
    "#91e8e1",
    "#058DC7",
    "#50B432",
    "#ED561B",
    "#DDDF00",
    "#24CBE5",
    "#64E572",
    "#FF9655",
    "#FFF263",
    "#6AF9C4",
    "#D47F00",
    "#00FFFF",
    "#D4FF55",
    "#4572A7",
    "#AA4643",
    "#89A54E",
    "#80699B",
    "#3D96AE",
    "#DB843D",
    "#92A8CD",
    "#A47D7C",
    "#7FBF55",
    "#a5c2d5",
    "#cbab4f",
    "#76a871",
    "#a56f8f",
    "#c12c44",
    "#9f7961",
    "#76a871",
    "#6f83a5",
    "0f4fb8",
    "106dcf",
    "#b3d74c",
    "#74aae3",
    "#5cdec6",
    "#3526de",
    "#9d65ee",
    "#a8b3e3",
    "#6bc1b7",
    "549ee2",
    "#6e98d6",
  ];
  hexPointsArr.forEach(function (hexPoint, i) {
    drawHex(ctx, hexPoint.hex.polygon, colors[i % colors.length]);
    drawNum(ctx, hexPoint.hex.polygon, hexPoint.num, hexDataOBj.edge);
  });
}

// 检查点在那个正六边形，过滤出应该显示的正六边形并且给这个六边形的点数量+1
export function pointInHex(hexDataOBj: hexDataOBjType): Map<any, any> {
  const { hexPointsArr, pointsArr } = hexDataOBj;
  const showHexPointsMap = new Map();
  pointsArr.forEach(function (point) {
    const py = point.y;
    try {
      hexPointsArr.forEach(function (rows) {
        // 每一行的高度是一样的，所以这里取每行第一个的最高和最低，直接判断点在哪一行
        if (py >= rows[0].polygon[0].y && py <= rows[0].polygon[3].y) {
          rows.forEach(function (hex: any) {
            if (rayCasting(point, hex.polygon)) {
              if (!showHexPointsMap.has(hex.id)) {
                showHexPointsMap.set(hex.id, {
                  hex,
                  num: 1,
                });
              } else {
                const obj = showHexPointsMap.get(hex.id);
                obj.num += 1;
                showHexPointsMap.set(hex.id, obj);
              }
              throw "err";
            }
          });
        }
      });
    } catch (error) {
      // console.log(error);
    }
  });
  return showHexPointsMap;
}

export function initHexData(
  canvas: HTMLCanvasElement,
  edge: number
): hexDataOBjType {
  const hexDataOBj: hexDataOBjType = {
    hexPointsArr: [],
    pointsArr: [],
    showHexPointsMap: new Map(),
    edge: edge,
  };
  try {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    hexDataOBj.hexPointsArr = calcHexPosition(w, h, edge);
  } catch (error: any) {
    throw new Error(error);
  }
  return hexDataOBj;
}
