import get_seating from "./fetch_seating";

const get_data = async () => {
    const CLASS_A_URL = import.meta.env.VITE_CLASS_A_URL;
    try {
        const seating = await get_seating(CLASS_A_URL);
        format_data(seating);
    } catch (error) {
        console.error("Error fetching seating data:", error);
    }
};

const format_data = (data) => {
    console.log(data);
};

export default get_data;
