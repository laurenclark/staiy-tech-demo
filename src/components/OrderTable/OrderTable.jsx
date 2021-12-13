import "antd/dist/antd.css";
import { columns } from "./OrderTableColumns";
import { useFetch } from "../hooks/useFetch";
import { Table } from "antd";

function OrderTable() {
    const {
        isLoading,
        response: customerData,
        error
    } = useFetch("codingChallenge.json");

    if (error) {
        return "Sorry something went wrong - please refresh the page and try again.";
    }

    return (
        <Table
            style={{
                margin: "0 auto",
                maxWidth: "1100px"
            }}
            sorter={true}
            loading={isLoading}
            columns={columns}
            dataSource={customerData}
            rowKey={(customerData) => customerData.code}
        />
    );
}

export default OrderTable;
