import get_data from "./context/class-a";
import { useEffect } from "react";

function App() {

    console.log('App rendered');


    // useEffect(() => {
    //     get_data();
    // }, []);

    get_data()

    return <></>;
}

export default App;
