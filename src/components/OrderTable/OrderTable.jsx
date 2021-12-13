import "antd/dist/antd.css";
import { columns } from "./OrderTableColumns";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { CustomTable } from "./OrderTableStyles";
import { Table, Button } from "antd";

function OrderTable() {
    const [styleToggleText, setStyleToggleText] = useState("AntD");
    const {
        isLoading,
        response: customerData,
        error
    } = useFetch("codingChallenge.json");

    const tableProps = {
        sorter: true,
        loading: isLoading,
        columns: columns,
        dataSource: customerData,
        rowKey: (customerData) => customerData.code
    };
    const BrandTable = () =>
        styleToggleText === "AntD" ? (
            <Table {...tableProps} />
        ) : (
            <CustomTable {...tableProps} />
        );

    if (error) {
        return "Sorry something went wrong - please refresh the page and try again.";
    }

    return (
        <>
            <Button
                onClick={() =>
                    setStyleToggleText(
                        styleToggleText === "AntD" ? "Custom" : "AntD"
                    )
                }>
                {styleToggleText}
            </Button>
            <BrandTable />
        </>
    );
}

export default OrderTable;
