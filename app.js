const input = document.querySelector("input");
const btn = document.querySelector('button');

btn.addEventListener('click' , (event)=>{
    event.preventDefault();
    downloadFile(input.value);
})

function downloadFile(url){
    if(!url) return;

  
    fetch(url, {method: 'GET'}).then(response => response.blob())
    .then(data =>{
        const urlFichier = URL.createObjectURL(data)
        console.log(urlFichier);


        const a = document.createElement('a');
        a.href = urlFichier;
        a.setAttribute('download' ,urlFichier.replace(/^.*[\\\/]/, ""))

        document.querySelector('body').appendChild(a);

        a.click();

        document.querySelector('body').remove(a);

        URL.revokeObjectURL(urlFichier);
        location.reload()
    }).catch( error=>{
        console.log(error);
    })
}

function startDownload() {
    // Show the progress bar
    document.getElementById("progressBarContainer").style.display = "block";

    var progressBar = document.getElementById("progressBar");
    var width = 0;

    // Simulate the progress with an interval
    var interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + "%";
        }
    }, 50); // Adjust the interval duration as needed
}






//Ajout d'une icône : à côté du champ de collage de l'url
//Indicateur de progression 
//Etat visuel : exemple : votre fichier est en cours de telechargement



