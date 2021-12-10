import OrderTable from "./components/OrderTable/OrderTable";
import { Layout } from "antd";

function App() {
    return (
        <Layout
            style={{
                display: "grid",
                placeItems: "center",
                minHeight: "100vh",
                minWidth: "100vw"
            }}>
            <OrderTable />
        </Layout>
    );
}

export default App;
