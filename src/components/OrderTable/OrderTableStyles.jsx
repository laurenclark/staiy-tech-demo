import styled from "styled-components";
import { Table } from "antd";

export const CustomTable = styled(Table)`
    --antd-wave-shadow-color: #636d76;
    margin: "0 auto";
    max-width: "1100px";
    .ant-btn {
        text-transform: uppercase;
        display: inline-block;
        color: black;
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
    .ant-table-tbody > tr > td {
        border-bottom: 10px solid #f0f0f0;
    }
`;
