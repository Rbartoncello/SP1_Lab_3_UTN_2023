function Get(apiUrl){
    var xhttp = new XMLHttpRequest(); //Instancio el objeto
    xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        // Parse the JSON in the response
        return JSON.parse(xhttp.responseText);
    }
    };
    xhttp.open("GET", apiUrl, true);
    xhttp.setRequestHeader("encabezado", "valor");
    xhttp.send();
}
