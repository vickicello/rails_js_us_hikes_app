$(document).ready(function(){
	alert("users.js loaded!");

class Hike {
	constructor(hikeData){
		this.name = hikeData.name
		this.description = hikeData.description
		this.state = hikeData.state
		this.completed = hikeData.completed
		this.id = hikeData.id
		this.userId = hikeData.user_id
	}
}

//HTML prototype for formatting and listing user's hikes:
Hike.prototype.formatHike = function() {
  return `<li><h3><a href="/hikes/${this.id}", class="show_user_hikes">${this.name}</a></h3>
    <p>State: ${this.state}</p>
    <p>Description: ${this.description}</p></li>`
}

// request via HTML
//  $('a.show_user_hikes').on('click', function(e){
// 	$.ajax({
// 		method: "GET",
// 		url: this.href,

// 	}).success(function(response){
// 		$("div.list_user_hikes").html(response)
// 	}).error(function(ifNeeded){
// 		alert("Error!");
// 	})
// 	e.preventDefault();
// })

//request via JSON
$('a.show_user_hikes').on('click', function(e){
	$.ajax({
    url: this.href,
    type: "GET",
    dataType: "json",
		success: function(data){
			//clear ol html:
	   	var $ol = $("div.list_user_hikes ol");
    	$ol.html("") //emptied ol
	   	//iterate over each hike with JSON:
			data.forEach(function(hike){
				$ol.append("<li>" + hike.name + " - " + hike.state + " - " + hike.description + "</li>");
			});
		}
	});
	e.preventDefault();
});


//hikes#show
//add 'next' button to view (and then maybe 'previous' button)
//add logic to hikes_controller #show



//use class Hike object to create a custom function that displays comments.   


//then you could use a custom function to create HTML that 
//shows the comments for an instance of Hike.







//Comments
//should I put this in it's own JS file?
Hike.prototype.commentsHTML = function(){
	return (`
	 <div>${this.content}</div>
		 <div>${this.username}</div>
	`)
 }

// JS constructor 
function Comment(comment) {
	this.username = comment.commentor.username
	this.comment = comment.content
}

// Prototype method
	Comment.prototype.formatComment = function() {
		commentHTML =  `<li>${this.comment} by: ${this.username}</li>`
		return commentsHTML
	}

//submit comment using JSON
});