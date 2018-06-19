
function getSearchValue(){
    let userSearchTerm = document.getElementById('searchTermTextBox').value.toLowerCase();
    let myArr = userSearchTerm.split(' ');
    let myStr = '';
    for(let i = 0; i < myArr.length; i++){
        myStr += myArr[i];
        if(i !== myArr.length - 1){
            myStr += '+';
        }
    }
    return `term=${myStr}`;
}

function getExplicitValue(){
   if(document.getElementById('explicitYes').checked === true){
       return document.getElementById('explicitYes').value;
   } else {
       return document.getElementById('explicitNo').value;
   }
}

function getURLString(userSearchTerm){
    let country = 'country=us&';
    let media = 'media=music&';
    let explicit = getExplicitValue();
    let language = 'lang=en_us&';
    let url = `https://itunes.apple.com/search?${country}${media}${language}${explicit}${userSearchTerm}`;
    console.log(url);
    return url;

}


function searchButton(){
    let userSearchTerm = getSearchValue();
    let url = getURLString(userSearchTerm);
    loadJSON(url);
}
document.addEventListener('keypress', function(e){
    let key = e.which || e.keyCode;
    if (key === 13) {
        let userSearchTerm = getSearchValue();
        let url = getURLString(userSearchTerm);
        loadJSON(url);
    }
});
function secondMaster(myObj){
    let songPreviewUrl = myObj.results[0].previewUrl;
    let audioObject = document.getElementById('audio');
    let audioTag = document.getElementById('audioTag');
    audioObject.src = songPreviewUrl;
    audioTag.src = songPreviewUrl;
    document.getElementById('displayOneSong').innerHTML = myObj.results[0].trackName;
}

function loadJSON(url){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            let bacon = JSON.parse(this.responseText);
            console.log(bacon);
            secondMaster(bacon);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

