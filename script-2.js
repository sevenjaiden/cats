
const api_key = 
"clive_PB9dv0kFnyyGaVo4JGyJrX12pMCixEiwYpkBRJX1E84MH5ybCDY8H0JZtawBRskh"

const apiUrl = 
"https://api.thecatapi.com/v1/images/search"

let emotion;
let btn = document.addEventListener('click', () => {
    let form = document.getElementById("form");
    emotion = form.elements[0].value;
    fetchCat();
    getEmotion();

})

async function fetchCat(){

    try {
        const response = await fetch(apiUrl);

        if(!response.ok){
            throw new Error (`HTTP error. status: ${response.status}`)
        }
        const data = await response.json();
        console.log(data)
        console.log(data[0].url)
        displayCat(data[0].url)
    }
    catch (error){
        console.error("fetch error", error)
    }

}

function displayCat(url) {

    let img = document.getElementById('pic');
    img.src = url;
}


function getEmotion() {

    happy_quote = "i am happy"
    sad_quote = "i am sad"
    angry_quote = "i am angry"

    let feeling = document.querySelector('#dropdown');

    console.log(feeling.value)


    let quote = document.getElementById('quote');
   
    if(feeling.value = 'happy'){
        quote.innerHTML = happy_quote;
    }

    else if(feeling.value = 'sad'){
        quote.innerHTML = sad_quote;
    }

    else{
        quote.innerHTML = angry_quote;
    }
}