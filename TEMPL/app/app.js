function replace() {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href.startsWith('/')) {
      link.setAttribute('href', href.replace('/', '#/'));
    }
  });
}



function loadPage() {
    let hash = window.location.hash.substr(1) // Get the value after the '#'
    const contentDiv = document.getElementById('content')
    if (!hash){
      if (window.location.pathname == '/'){
        location.href = "#/"
      }
    }

    if (hash == "/" ) {
        hash = "index"
    }
    if (!hash || !window.location.hash){
        return location.href = "#/"

    }
    const pageUrl = `pages/${hash}.html`
    fetch(pageUrl)
      .then(response => response.text())
      .then(html => {
        // console.log(html, document.documentElement.innerHTML)
        if (html.includes(document.querySelector('title').innerText)){
          location.href = "#/404"
          replace()
          return
        }

        contentDiv.innerHTML = html
        loadScript('pages/' + hash + ".backend.js", function(){
          console.log(`Script for ${hash} page loaded.`)
        })
        replace()

      })
      .catch(error => {
        return location.href = "#/404"
      })
  }
  

  


// initilize

console.log('%c⚡React Legacy', 'color: yellow;font-size:medium;')

window.addEventListener('hashchange', loadPage)
window.addEventListener('hashchange', replace)
loadPage()
function loadScript(url, callback) {
  // Check if the script already exists
  var existingScript = document.querySelector("script[src='" + url + "']");
  if (existingScript) {
    // Remove the existing script
    existingScript.parentNode.removeChild(existingScript);
  }

  // Create a new script element
  var script = document.createElement("script");
  script.src = url;
  script.onload = callback;
  document.head.appendChild(script);
}