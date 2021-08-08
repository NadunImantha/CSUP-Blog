import { useEffect, useState } from "react";

function FetchData(url) {
    const [data, setData] = useState();

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => res.json())
                .then((data) => setData(data))
                .catch((err) => {
                    console.log(err.message);
                });
        }, 1000);
    }, [url]);

    return data;
}

export default FetchData;
