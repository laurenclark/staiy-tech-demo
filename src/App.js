import OrderTable from "./components/OrderTable/OrderTable";
import { Layout } from "antd";

function App() {
    return (
        <Layout
            style={{
                height: "100vh",
                display: "grid",
                placeItems: "center"
            }}>
            <OrderTable />
        </Layout>
    );
}

export default App;
