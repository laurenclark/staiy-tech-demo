import "antd/dist/antd.css";
import { Table, Layout, Tag } from "antd";

const testData = [
    {
        code: "STY-2021-96016",
        order_status: "Processing",
        customer_name: "Amelia De Vries",
        country: "DE",
        created_at: "2021-01-01T00:32:07",
        total: "€372.17"
    },
    {
        code: "STY-2021-98094",
        order_status: "Partially shipped",
        customer_name: "Jack M\u00fcller",
        country: "IT",
        created_at: "2020-12-31T07:56:10",
        total: "€451.97"
    }
];

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
        key: "1",
        width: 10
    },
    {
        title: "Created At",
        dataIndex: "created_at",
        key: "1",
        width: 200
    },
    {
        title: "Total",
        dataIndex: "total",
        key: "1",
        width: 150
    },
    {
        key: "1",
        fixed: "right",
        width: 50,
        render: () => <a>View</a>
    }
];

function OrderTable() {
    return (
        <div className="App">
            <Layout
                style={{
                    height: "100vh",
                    display: "grid",
                    placeItems: "center"
                }}>
                <Table
                    style={{
                        margin: "0 auto",
                        maxWidth: "1000px"
                    }}
                    columns={columns}
                    dataSource={testData}
                />
            </Layout>
        </div>
    );
}

export default OrderTable;
