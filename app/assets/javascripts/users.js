$(document).ready(function(){
	alert("users.js loaded!");
	// attachEventListeners()
});

// function attachEventListeners(){
	// listen for clicks
	// find a link or a button, with an ID or class to identify
	// getHikes();
// }

function getHikes() {
	$.ajax({
		// but make the url dynamic below
		url: 'https://localhost:3000/users/1.json', 
		dataType: 'json',
		method: 'get'
	}).done(function (data) {

		console.log("data: ", data);
		debugger;
		//  json data won't go on the DOM in its raw form

	})
}
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

//HTML prototype for listing user's hikes:
Hike.prototype.hikeListTemplate = function() {
  return `<li><h3><a href="/hikes/${this.id}", class="show-user-hikes">${this.name}</a></h3>
    <p>State: ${this.state}</p>
    <p>Description: ${this.description}</p></li>`
}


//use class Hike object to create a custom function that displays comments.   
//Assuming you’ve created:


//then you could use a custom function to create HTML that 
//shows the comments for an instance of Hike.

Hike.prototype.commentsHTML = function(){
 return (`
  <div>${this.content}</div>
    <div>${this.username}</div>
 `)
}

//list of things/index page
//users/:id  aka  users#show
//add button 'click here to see your hikes'



//hikes#show
//add 'next' button to view (and then maybe 'previous' button)
//add logic to hikes_controller #show


//Comments
//should I put this in it's own JS file?

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