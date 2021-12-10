import "antd/dist/antd.css";
import { useFetch } from "../hooks/useFetch";
import { Table, Tag, Button } from "antd";

const columns = [
    {
        title: "Order ID",
        width: 200,
        dataIndex: "code",
        key: "code",
        fixed: "left"
    },
    {
        title: "Order Status",
        width: 150,
        dataIndex: "order_status",
        key: "order_status",
        render: (tag) => (
            <>
                <Tag>{tag.toUpperCase()}</Tag>
            </>
        )
    },
    {
        title: "Country",
        dataIndex: "country",
        key: "country",
        width: 10
    },
    {
        title: "Created At",
        dataIndex: "created_at",
        key: "created_at",
        width: 200
    },
    {
        title: "Total",
        dataIndex: "total",
        key: "total",
        width: 150
    },
    {
        key: "1",
        width: 50,
        render: () => <Button type="primary">View</Button>
    }
];

function OrderTable() {
    const { isLoading, response, error } = useFetch("codingChallenge.json");

    if (error) {
        return "Sorry something went wrong - please refresh the page and try again.";
    }

    if (isLoading) {
        return "Loading...";
    }
    return (
        <Table
            style={{
                margin: "0 auto",
                maxWidth: "1000px"
            }}
            columns={columns}
            dataSource={response}
        />
    );
}

export default OrderTable;
