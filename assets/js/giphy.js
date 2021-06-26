function showGif() {

    let gif = document.getElementById("name").value;

    fetch("https://api.giphy.com/v1/gifs/search?api_key=MV1cH2bhtw5dqmDhkE5wMjsw3XTMJQJG&q=" + gif + "&limit=1&offset=0&rating=g&lang=en")
        .then(Response => Response.json())
        .then(giphy => {
            console.log(giphy)
            document.getElementById("gif").src = giphy.data[0].images.original.url;
        })
}