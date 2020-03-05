$(document).ready(console.log("ready to go"));
	$("button").click(function() {
	    $.getJSON("http://api.icndb.com/jokes/random", function(data) {
			console.log(data);
			$("#joke").html(data.value.joke)
		});
    })
    
    
/* Using the basic Ajax function: $.ajax() function - used to perform basic AJAX requests, can be customized using a variety of parameters:
    
$("document").ready(function() {
    $("#request").on("click", getData);
});

function getData() {
    $.ajax({
        type: "GET", //whether this is a POST or GET request
        url: "http://api.icndb.com/jokes/random", //the URL for the request
        datatype: "text", //the type of data we expect back
        success: successFn, //function to call for success
        error: errorFn, //function to call on an error
        complete: function(xhr, status) { // code to run regardless of success or failure
            console.log("The request is complete");
        } 
    });
}

function successFn(data) {
    $("#joke").empty(data);
    console.log("Setting result", data);
    $("#joke").append(data.value.joke);
}

function errorFn(xhr, status, strErr) {
    console.log("There was an error!");
}*/