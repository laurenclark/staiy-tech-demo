import { formatDate } from "../utility/formatDate";
import { statusColourMap } from "../utility/colourMap";
import { Tag, Button } from "antd";

export const columns = [
    {
        title: "Order ID",
        width: 300,
        dataIndex: "code",
        fixed: "left"
    },
    {
        title: "Order Status",
        width: 150,
        dataIndex: "order_status",
        render: (tag) => (
            <>
                <Tag color={statusColourMap(tag)}>{tag.toUpperCase()}</Tag>
            </>
        )
    },
    {
        title: "Customer",
        width: 170,
        dataIndex: "customer_name"
    },
    {
        title: "Country",
        dataIndex: "country",
        width: 10
    },
    {
        title: "Created At",
        dataIndex: "created_at",
        width: 300,
        render: (created_at) => {
            const { fullDate, time } = formatDate(created_at);
            return (
                <>
                    {fullDate} at {time}
                </>
            );
        }
    },
    {
        title: "Total",
        dataIndex: "total",
        width: 100
    },
    {
        width: 50,
        render: () => <Button type="primary">View</Button>
    }
];
