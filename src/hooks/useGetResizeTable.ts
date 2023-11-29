//useGetResizeTable.ts
import { useEffect, useState } from "react";
import debounce from "lodash/debounce";
export function useGetResizeHeight(name: string) {
  //设置撑高表格外部包裹元素的高度
  const [tableHeight, setTableHeight] = useState(500);

  useEffect(() => {
    handleGetTableHeight();
    const debounced = debounce(handleGetTableHeight, 200);
    window.addEventListener("resize", debounced);
    return () => window.removeEventListener("resize", debounced);
  }, []);

  const handleGetTableHeight = () => {
    setTimeout(() => {
      let height = document.getElementById(name)!.clientHeight;
      height = height - 55 - 46 - 6; //55-表头高度，46-分页组件高度，6-微调高度
      setTableHeight(height);
    });
  };

  return [tableHeight];
}
