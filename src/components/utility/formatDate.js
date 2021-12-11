export const formatDate = (date, long = true) => {
    if (!date) return;

    const newDate = new Date(date);

    const day = newDate.toLocaleString("en-GB", {
        day: "numeric"
    });

    const monthYear = newDate.toLocaleString("en-GB", {
        year: "numeric",
        hour12: false,
        month: long ? "long" : "short"
    });

    function getDateOrdinal(value) {
        const suffixArray = ["th", "st", "nd", "rd"];
        const ones = value % 100;
        const over20 = (value - 20) % 10;
        return (
            value + (suffixArray[over20] || suffixArray[ones] || suffixArray[0])
        );
    }

    const fullDate = `${(day, getDateOrdinal(day))} ${monthYear}`;

    if (!long) return fullDate;

    const time = newDate.toLocaleString("en-GB", {
        hour12: false,
        hour: "numeric",
        minute: "numeric"
    });

    return { fullDate, time };
};
