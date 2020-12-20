// created a variable for the desired city
var city = $("#searchTerm").val();
// stored my api key to easier reference throughout my code
const apiKey = "&appid=acb6eed2a44acddb065d1b40f8fc2e5d"; 

//Created a variable for the current date
var date = new Date();

$("#searchTerm").keypress(function(event) { 
	
	if (event.keyCode === 13) { 
		event.preventDefault();
		$("#searchBtn").click(); 
	} 
});

