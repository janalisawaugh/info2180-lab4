window.addEventListener('load', function(){

    let searchButton = document.querySelector(".searchButton");
    const search = searchButton.querySelector(".btn");

    search.addEventListener('click', function (element){
        element.preventDefault();


        // let httpRequest = new XMLHttpRequest();
        //Fetch API method
        let url = "http://localhost/info2180-lab4/info2180-lab4/superheroes.php";
        fetch(url)
            .then(response => {
                if (response.ok){
                    return response.text()
                }
                else {
                    return Promise.reject('There is an issue')
                }
            })                
                    
            .then(data => {
                let answers = document.querySelector(".answer");
                alert(data)

            })
            .catch(error => {
                console.log(error);
            })
        // httpRequest.onreadystatechange = loadData;
        // httpRequest.open('GET', url);
        // httpRequest.send();


    })
    // function loadData(){
    //     if (httpRequest.readyState === XMLHttpRequest.DONE){
    //         if (httpRequest.status === 200) {
    //             let response = httpRequest.responseText;
    //             let answers = document.querySelector(".answer");
    //             alert(response);
    //         }
    //         else {
    //             alert("There is an issue with the search request.")
    //         }
    //     }
    // }

    
       



});