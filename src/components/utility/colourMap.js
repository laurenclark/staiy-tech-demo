export function statusColourMap(status) {
    status = status.toLowerCase();
    switch (status) {
        case "processing":
            return "geekblue";
        case "received":
            return "green";
        case "shipped":
            return "purple";
        case "partially shipped":
            return "cyan";
        case "partially canceled":
            return "orange";
        case "canceled":
            return "volcano";
        default:
            return false;
    }
}
