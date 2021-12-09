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
    },
    {
        code: "STY-2021-23677",
        order_status: "Processing",
        customer_name: "Olivia M\u00fcller",
        country: "IT",
        created_at: "2020-12-30T07:31:38",
        total: "€390.87"
    },
    {
        code: "STY-2021-44882",
        order_status: "Canceled",
        customer_name: "Mateo Maier",
        country: "PT",
        created_at: "2020-12-29T10:24:28",
        total: "€248.39"
    },
    {
        code: "STY-2021-13970",
        order_status: "Canceled",
        customer_name: "Lily Esposito",
        country: "DE",
        created_at: "2020-12-26T08:35:05",
        total: "€356.61"
    },
    {
        code: "STY-2021-38045",
        order_status: "Partially shipped",
        customer_name: "Leo Maier",
        country: "IT",
        created_at: "2020-12-23T17:18:32",
        total: "€245.42"
    },
    {
        code: "STY-2021-81352",
        order_status: "Partially canceled",
        customer_name: "Charlotte Smith",
        country: "DE",
        created_at: "2020-12-22T01:16:18",
        total: "€583.46"
    },
    {
        code: "STY-2021-54439",
        order_status: "Processing",
        customer_name: "Ethan Garc\u00eda",
        country: "BE",
        created_at: "2020-12-20T00:14:31",
        total: "€422.55"
    },
    {
        code: "STY-2021-06002",
        order_status: "Shipped",
        customer_name: "Harper G\u00f3mez",
        country: "DE",
        created_at: "2020-12-19T08:56:45",
        total: "€351.20"
    },
    {
        code: "STY-2021-91949",
        order_status: "Partially shipped",
        customer_name: "Noah Bianchi",
        country: "PT",
        created_at: "2020-12-19T00:45:48",
        total: "€502.62"
    },
    {
        code: "STY-2021-60251",
        order_status: "Partially shipped",
        customer_name: "Evelyn M\u00fcller",
        country: "SP",
        created_at: "2020-12-18T08:59:29",
        total: "€593.18"
    }
];

function App() {
    return (
        <div className="App">
            {testData.map((item) => (
                <pre>{JSON.stringify(item, null, 4)}</pre>
            ))}
        </div>
    );
}

export default App;
