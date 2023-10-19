'use client';

import { routes } from '@/config/routes';
import { orderData } from '@/data/order-data';
import { invoiceData } from '@/data/invoice-data';
import { productsData } from '@/data/products-data';
import { getColumns } from '@/app/shared/invoice/invoice-list/columns';
import { getColumns as getOrderColumns } from '@/app/shared/ecommerce/order/order-list/columns';
import { getColumns as getProductColumns } from '@/app/shared/ecommerce/product/product-list/columns';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';
import { exportToCSV } from '@/utils/export-to-csv';
import TableLayout from '../table-layout';

const pageHeader = {
  title: 'Basic Table',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      name: 'Tables',
    },
    {
      name: 'Basic',
    },
  ],
};

export default function BasicTablePage() {
  function handleExportData() {
    exportToCSV(
      orderData,
      'Order ID,Name,Email,Avatar,Items,Price,Status,Created At,Updated At',
      'order_data'
    );
  }

  return (
    <TableLayout
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      onExport={() => handleExportData()}
    >
      <div className="grid grid-cols-1 gap-6 3xl:gap-8">
        <BasicTableWidget
          variant="classic"
          title="Classic Table"
          data={orderData}
          // @ts-ignore
          getColumns={getOrderColumns}
          enableSearch={false}
        />

        <BasicTableWidget
          title="Modern Table"
          variant="modern"
          data={productsData}
          // @ts-ignore
          getColumns={getProductColumns}
          enableSearch={false}
          className="[&_.rc-table-content_table_tbody_tr:last-child_td]:border-0"
        />

        <BasicTableWidget
          title="Minimal Table"
          variant="minimal"
          data={invoiceData}
          // @ts-ignore
          getColumns={getColumns}
          enableSearch={false}
        />

        <BasicTableWidget
          title="Elegant Table"
          variant="elegant"
          data={productsData}
          // @ts-ignore
          getColumns={getProductColumns}
          enableSearch={false}
          className="[&_.rc-table-content_table_tbody_tr:last-child_td]:border-0"
        />

        <BasicTableWidget
          variant="retro"
          title="Retro Table"
          data={orderData}
          // @ts-ignore
          getColumns={getOrderColumns}
          enableSearch={false}
          className="[&_.rc-table-content_table_tbody_tr:last-child_td]:border-0"
        />
      </div>
    </TableLayout>
  );
}
