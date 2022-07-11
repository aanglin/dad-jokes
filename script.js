var bottomRight = document.getElementById('bottomRight')
$('#bottomRight').on('click', function(){
    startJokes()
})








function startJokes(){
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2b4e532ae3msh54b5f70921ddc65p1b9fcejsn1929ae6001ba',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
.then(function (response) {
           return response.json();
          })
         .then(function (data) {
            console.log(data); 
            
            var getJoke = document.createElement('p')
            getJoke.textContent=data.body[0].setup

            var getPunch = document.createElement('p')
            getPunch.textContent=data.body[0].punchline
            
            
            
              
            document.getElementById('jokes').append(getJoke,getPunch);     
        });
    }         
            