$(document).ready(function(){
	console.log("users.js loaded!");
	attachEventListeners()
});

function attachEventListeners(){
	// listen for clicks
	// find a link or a button, with an ID or class to identify
	getHikes();
}

function getHikes() {
	$.ajax({
		// but make the url dynamic below
		url: 'http://localhost:3000/users/1.json', 
		dataType: 'json',
		method: 'get'
	}).done(function (data) {

		console.log("data: ", data);
		debugger;
		//  json data won't go on the DOM in its raw form

	})
}

//use class Hike object to create a custom function that displays comments.   
//Assuming you’ve created:
class Hike {
	constructor(obj){
		this.name = obj.name
		this.etc = this.etc
	}
}

//then you could use a custom function to create HTML that 
//shows the comments for an instance of Hike.

Hike.prototype.commentsHTML = function(){
 return (`
  <div>${this.name}</div>
    <div>${this.etc}</div>
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
		return commentHTML
	}


// Comment.prototype.formatHTML = function() {
//   //display formatted comment with commentor username
// }