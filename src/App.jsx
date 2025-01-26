import get_data from "./context/class-a";
import { useEffect, useState } from "react";

function App() {
    const [classA, setClassA] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await get_data();
                setClassA(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    if (!classA) {
        return <div>Loading...</div>; // Show a loading state until data is fetched
    }

}

export default App;
