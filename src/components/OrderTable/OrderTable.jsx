import "antd/dist/antd.css";
import { formatDate } from "../utility/formatDate";
import { useFetch } from "../hooks/useFetch";
import { Table, Tag, Button } from "antd";

const columns = [
    {
        title: "Order ID",
        width: 200,
        dataIndex: "code",
        key: "code",
        fixed: "left",
        sorter: (a, b) => a.code - b.code
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
        title: "Customer",
        width: 150,
        dataIndex: "customer_name",
        key: "customer_name",
        sorter: (a, b) => a.customer_name - b.customer_name
    },
    {
        title: "Country",
        dataIndex: "country",
        width: 10,
        sorter: (a, b) => a.country - b.country
    },
    {
        title: "Created At",
        dataIndex: "created_at",
        key: "created_at",
        width: 300,
        sorter: (a, b) => a.created_at - b.created_at,
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
        key: "total",
        width: 150,
        sorter: (a, b) => a.total - b.total
    },
    {
        width: 50,
        render: () => <Button type="primary">View</Button>
    }
];

function OrderTable() {
    const {
        isLoading,
        response = [],
        error
    } = useFetch("codingChallenge.json");

    if (error) {
        return "Sorry something went wrong - please refresh the page and try again.";
    }

    return (
        <Table
            style={{
                margin: "0 auto",
                maxWidth: "1000px"
            }}
            loading={isLoading}
            columns={columns}
            dataSource={response}
            rowKey={(response) => response.code}
        />
    );
}

export default OrderTable;
