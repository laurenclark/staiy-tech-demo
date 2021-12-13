import { formatDate } from "../utility/formatDate";
import { statusColourMap } from "../utility/colourMap";
import { Tag, Button } from "antd";

export const columns = [
    {
        title: "Order ID",
        width: 300,
        dataIndex: "code",
        fixed: "left",
        sorter: (a, b) => {
            a = a.code;
            b = b.code;
            return a.localeCompare(b);
        }
    },
    {
        title: "Order Status",
        width: 150,
        dataIndex: "order_status",
        sorter: (a, b) => {
            a = a.order_status;
            b = b.order_status;
            return a.localeCompare(b);
        },
        filters: [
            {
                text: "Canceled",
                value: "Canceled"
            },
            {
                text: "Partially Canceled",
                value: "Partially canceled"
            },
            {
                text: "Shipped",
                value: "Shipped"
            },
            {
                text: "Partially Shipped",
                value: "Partially shipped"
            },
            {
                text: "Received",
                value: "Received"
            },
            {
                text: "Processing",
                value: "Processing"
            }
        ],
        onFilter: (value, record) => record.order_status.indexOf(value) === 0,
        render: (tag) => (
            <>
                <Tag color={statusColourMap(tag)}>{tag.toUpperCase()}</Tag>
            </>
        )
    },
    {
        title: "Customer",
        width: 170,
        dataIndex: "customer_name",
        sorter: (a, b) => {
            a = a.customer_name;
            b = b.customer_name;
            return a.localeCompare(b);
        }
    },
    {
        title: "Country",
        dataIndex: "country",
        sorter: (a, b) => {
            a = a.country;
            b = b.country;
            return a.localeCompare(b);
        },
        width: 10
    },
    {
        title: "Created At",
        dataIndex: "created_at",
        width: 300,
        sorter: (a, b) => {
            a = new Date(a.created_at);
            b = new Date(b.created_at);
            return a - b;
        },
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
        title: "Action",
        width: 50,
        render: () => <Button type="primary">View</Button>
    }
];
