//ResizeTable.tsx
import React from "react";
import { Table } from "antd";
import { useGetResizeHeight } from "@/hooks/useGetResizeTable";
import styles from "./index.module.less";

/**
 * 自适应高度表格
 * @功能
 * 1、自动占满页面剩余高度
 * 2、改变浏览器窗口时自动适应剩余高度不出现外部滚动条
 * @前提 页面自身设置的有高度，而非根据子元素撑开高度
 * @使用方法
 * 1、安装lodash--yarn add lodash，仅使用里面的防抖方法
 * 2、在需要使用的地方导入--import ResizeTable from '@/components/ResizeTable/ResizeTable'
 * 3、使用--<ResizeTable api和antd的Table一样/>
 * @demo
 * import ResizeTable from '@/components/ResizeTable/ResizeTable';
 * const Demo = () => {
 *     return (
 *         <div style={{height: '900px'}}>
 *             查询条件
 *             <Form .../>
 *             自适应表格
 *             <ResizeTable
 *                  rowKey="id"
 *                  columns={columns}
 *                  dataSource={data}
 *                  pagination={{
 *                      total: total,
 *                      current: condition.pageIndex,
 *                      pageSize: condition.pageSize,
 *                 }}
 *         </div>
 *     )
 * }
 * @author GuanJ
 */
const ResizeTable: React.FC<any> = (props) => {
  const [tableHeight] = useGetResizeHeight("resize-table");

  const tableProps = {
    ...props,
    scroll: {
      y: tableHeight,
    },
  };
  if (props && props.scroll && props.scroll.x) {
    tableProps.scroll.x = props.scroll.x;
  }

  return (
    <div className={styles.tableWrap}>
      <div id="resize-table" className={styles.table}>
        <Table {...tableProps} />
      </div>
    </div>
  );
};

export default ResizeTable;
