window.addEventListener('load', function(){

    let searchButton = document.querySelector(".searchButton");
    const search = searchButton.querySelector(".btn");

    //Adding listener to search button
    search.addEventListener('click', function (element){
        element.preventDefault();
        
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
        
    })

    // function searchSupers() {
    //     let input = document.getElementById('searchbar').value
    //     var supers = <?php echo json_encode($superheroes); ?>;
    // }
    
    

});