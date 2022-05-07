document.querySelector('#searchButton').addEventListener('click', getNASAImg)


function getNASAImg() {
    let dateChoice = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=mQF9ZZzausX9GNwYBRj6sAhgSnPLHdnuVTcYq4un&date=${dateChoice}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#name').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
            if(data.media_type==="image"){
                if(document.querySelector('img').classList.contains('hideMe')){
                    document.querySelector('img').classList.remove('hideMe')
                }
                document.querySelector('#vid').classList.add('hideMe')
                document.querySelector('img').src = data.url
            }
            else if (data.media_type==="video"){
                if(document.querySelector('#vid').classList.contains('hideMe')){
                   document.querySelector('#vid').classList.add('hideMe')
                }
                document.querySelector('img').classList.add('hideMe')
                document.querySelector('#vid').src=data.url
            }
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

let coll = document.getElementsByClassName('collapsible');

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
        this.classList.toggle("active")
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none"
        } else {
            content.style.display = "block"
        }
    })
}