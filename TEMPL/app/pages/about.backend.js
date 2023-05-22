function getStuff(){
    fetch("/api/example").then(response => response.json()).then((r) =>{
        document.getElementById('hellobtn').innerText = `API Called: ${r['random']}`
    })
}