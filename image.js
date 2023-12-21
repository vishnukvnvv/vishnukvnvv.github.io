document.getElementById("btn").addEventListener('click', (event) => {
    let url = document.getElementById("image").value;
    fetch(url, { method: 'GET' })
        .then((res) => res.blob()) // Gets the response and returns it as a blob
        .then((blob) => {
            const dataURL = URL.createObjectURL(new Blob([blob]));
            document.getElementById("load").src = dataURL
        }).catch((err) => console.log(err));
});
