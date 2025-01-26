import get_seating from "./fetch_seating";
import get_column_format from "../utils/get_column_format";
import make_classroom from "../utils/make_classroom";
import fill_classroom from "../utils/fill_classroom";

const get_data = async () => {

    console.log("get_data called");

    const CLASS_A_URL = import.meta.env.VITE_CLASS_A_URL;
    try {
        const seating = await get_seating(CLASS_A_URL);
        return format_data(seating)
    } catch (error) {
        console.error("Error fetching seating data:", error);
    }
};  

const format_data = (seating) => {
    const column_format = get_column_format(seating.data[0])
    column_format.num_of_rows = seating.data.length - 2;
    const classroom_format = make_classroom(column_format)
    const classroom = fill_classroom(classroom_format, seating.data)

    return classroom
};

export default get_data;