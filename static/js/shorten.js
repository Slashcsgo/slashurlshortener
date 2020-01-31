let xhr = new XMLHttpRequest();
let shrinkBtn = document.getElementById('shorten');

shrinkBtn.addEventListener('click', function(){
    let urlIn = document.getElementById('url-in');
    let postRequest = JSON.stringify({
        "url": urlIn.value
    });

    console.log(postRequest);

    xhr.open('POST', '/');

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(postRequest);

    xhr.onload = function(){
        let urlOut = document.getElementById('url-out');
        console.log(xhr.response);
        urlOut.innerText = xhr.response;
    }
});