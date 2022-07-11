var bottomRight = document.getElementById('bottomRight')
$('#bottomRight').on('click', function(){
    startJokes()
})

function startJokes(){
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2b4e532ae3msh54b5f70921ddc65p1b9fcejsn1929ae6001ba',
            'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
        }
    };
    
    fetch('https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&blacklistFlags=nsfw,racist,religious,explicit', options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data); 
        
        var getJoke = document.createElement('p')
        getJoke.setAttribute('class','newJoke')
        getJoke.textContent=data.setup
        
        var getPunch = document.createElement('p')
        getPunch.setAttribute('class','newPunch')
        getPunch.textContent=data.delivery
        
        document.getElementById('jokes').append(getJoke,getPunch);     
        
        
        
    });
}         

//   var finish = document.getElementById('next-joke')
//   $('#next-joke').on('click', function(){
//       document.getElementById('jokes').value=''
//       startJokes()
     
// })



