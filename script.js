const fetchURL = 'https://picsum.photos/v2/list?limit=10';
const fetchURL2 = 'https://jsonplaceholder.typicode.com/posts/'
const getImgBtn = document.getElementById('get-task');
const imgContainer = document.getElementById('list-container');
const dataContainer = document.getElementById('vertical');

// const getAuthor = document.getElementById('author');

var sliderOptions = {
     container: '.my-slider',
     items: 1,
     slideBy: 'page',
     autoplay: true,
     nav: false,
     speed: 3000,
     controls: false,
     autoplayButtonOutput: false,
     mouseDrag: true,
};
var sliderSecond = {
     container: "#vertical",
     axis: "vertical",
     items: 5,
     autoplay: true,
     nav: false,
     speed: 2500,
     autoplayButtonOutput: false,
     mouseDrag: true,
     // autoplayTimeout: 30

};

// funkcja pobiera elementy
function getImages() {
     fetch(fetchURL).then(response => response.json())
          .then(json => {
               let imgList = json;
               console.log(imgList);
               imgList.forEach(function(img) {
                    let imgElement = document.createElement("div");
                    imgElement.innerHTML = `<div style="background-image: url('${img.download_url}')"><h3> ${img.author}</h3></div>`;
                    imgContainer.appendChild(imgElement);
               });
               tns(sliderOptions);

          })

}

function getText() {
     fetch(fetchURL2).then(response => response.json())
          .then(json => {
               let dataList = json;
               console.log(dataList);
               dataList.forEach(function(data) {
                    let dataElement = document.createElement("div");
                    dataElement.innerHTML = `<div ${data.id}')"><p> ${data.title}</p></div>`;
                    dataContainer.appendChild(dataElement);
               });
               tns(sliderSecond);

          })

}


// event callback for downloading elements
// getImgBtn.addEventListener('click', getImages);

getImages();
getText();