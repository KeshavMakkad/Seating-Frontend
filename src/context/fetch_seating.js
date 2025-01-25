import axios from "axios";
import fs from "fs/promises"; // Using fs.promises to work with async/await

const get_seating = async (url) => {
    console.log("get_seating called");
    try {
        const response = await axios.get(url);
        return response.data;
        
    } catch (err) {
        console.log("Error fetching seating data:", err);
        throw err;
    }
};

export default get_seating;
