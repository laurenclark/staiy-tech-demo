import "antd/dist/antd.css";
import { columns } from "./OrderTableColumns";
import { useFetch } from "../hooks/useFetch";
import { Table } from "antd";
import styled from "styled-components";

const BrandTable = styled(Table)`
    --antd-wave-shadow-color: #636d76;
    margin: "0 auto";
    max-width: "1100px";
    .ant-btn {
        text-transform: uppercase;
        display: inline-block;
        position: relative;
        border: 1px solid rgb(27, 27, 27);
        border-radius: 2px;
        background-color: rgb(255, 255, 255);
        transition: all 0.3s ease 0s;
    }
    .ant-btn:hover,
    .ant-btn:active,
    .ant-btn:focus {
        color: rgb(27, 27, 27);
        background-color: rgb(245, 245, 245);
        transition: all 0.3s ease 0s;
    }
    .ant-table-thead > tr > th {
        background: black;
        color: white;
    }
    .ant-select-selector,
    .ant-pagination-item-active,
    .ant-pagination-item-active a,
    .ant-pagination-item:hover,
    .ant-pagination-item:hover a {
        color: black;
        border-color: black;
    }
    .ant-table-thead th.ant-table-column-has-sorters:hover {
        background: rgb(30 30 30);
    }
    .ant-table-column-sorter-up.active,
    .ant-table-column-sorter-down.active {
        color: #e1e1e1;
    }
`;

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
        <BrandTable
            sorter={true}
            loading={isLoading}
            columns={columns}
            dataSource={customerData}
            rowKey={(customerData) => customerData.code}
        />
    );
}

export default OrderTable;
