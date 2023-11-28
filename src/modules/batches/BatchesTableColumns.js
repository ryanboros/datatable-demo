import { DateTimeRenderer } from "components/CellRenderers";

export default function columns() {
  return [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Timestamp",
      dataIndex: "createdAt",
      render: DateTimeRenderer,
    },
  ];
}
