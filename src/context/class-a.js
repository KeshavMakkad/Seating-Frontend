import get_seating from "./fetch_seating";
import get_column_format from "../utils/get_column_format";
import make_classroom from "../utils/make_classroom";

const get_data = async () => {

    console.log("get_data called");

    const CLASS_A_URL = import.meta.env.VITE_CLASS_A_URL;
    try {
        const seating = await get_seating(CLASS_A_URL);
        format_data(seating.data)
    } catch (error) {
        console.error("Error fetching seating data:", error);
    }
};  

const format_data = (data) => {
    const column_format = get_column_format(data[0])
};

export default get_data;