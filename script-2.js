
const cat_api_key = 
"clive_PB9dv0kFnyyGaVo4JGyJrX12pMCixEiwYpkBRJX1E84MH5ybCDY8H0JZtawBRskh"

const quote_api_key = 
"vJsbFGTtBmSzTF0b14PMBg==aBUQmSK70a4gaZoj"

const catApiUrl = 
"https://api.thecatapi.com/v1/images/search"

const quoteApiUrl_base = 
"https://api.api-ninjas.com/v1/quotes?category="



let emotion;

let btn = document.getElementById("submit");

btn.addEventListener('click', ()=> {
    let form = document.getElementById("form");
    emotion = form.elements[0].value;

    fetchCat();
    fetchQuote(emotion);
    displayBy();

})

async function fetchCat(){

    try {
        const response = await fetch(catApiUrl);

        if(!response.ok){
            throw new Error (`HTTP error. status: ${response.status}`)
        }
        const data = await response.json();
    
        displayCat(data[0].url)
    }
    catch (error){
        console.error("fetch error", error)
    }

}

async function fetchQuote(emotion){

   

    let apiUrlSuccess = `${quoteApiUrl_base}${emotion}`
   


    try {
        const response = await fetch(apiUrlSuccess, {
               headers: { 
                    'X-Api-Key': quote_api_key
            }
        });
        console.log("response: ")
        console.log(response)
 

        if(!response.ok){
            throw new Error (`HTTP error. status: ${response.status}`)
        }
        const data = await response.json();
        console.log("data")
        console.log(data)
       
        displayQuote(data[0].quote)
        displayBy(data[0].author)
        console.log(data[0].author)
    }
    catch (error){
        console.error("fetch error", error)
    }

}

function displayCat(url) {

    let img = document.getElementById('pic');
    img.src = url;
}



function displayQuote(quoteResult) {

    


    let feeling = document.querySelector('#dropdown');

    // console.log(feeling.value)


    let quote = document.getElementById('quote');

    quote.innerHTML = `"${quoteResult}"`
   
    

}

function displayBy(author){
    let by = document.getElementById('by');

    by.innerHTML = `-${author}`
}