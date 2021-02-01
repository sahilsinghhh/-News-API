console.log(`this is news api tutorial`);

// 5d9c7a36bacf464bb4ed8013e4d76a38

let newsaccordion = document.getElementById("newsaccordion")

let source = 'google-news';
let apikey = '5d9c7a36bacf464bb4ed8013e4d76a38'
const xhr = new XMLHttpRequest();

xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true)
// xhr.getResponseHeader('Content-type', 'application/json');

function onprogress() {
    console.log('on progress');
}

xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);

        let newshtml = "";

        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = ` <div class="accordion accordion-flush" id="newsAccordion">
                                               <div class="accordion-item">
                                                      <h2 class="accordion-header" id="flush-heading${index}">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                                                              <b>Breaking News - </b>   ${element["title"]}
                                                        </button>
                                                       </h2>
                                                   <div id="flush-collapse${index}" class="accordion-collapse collapse show" aria-labelledby="flush-heading${index}" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">${element['content']} <a href ="${element ['url']}" target="_blank" >Read More </a></div>
                                                   </div>
                                                </div>
                        </div>`

                        newshtml += news;
        });

        newsAccordion.innerHTML =newshtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();



