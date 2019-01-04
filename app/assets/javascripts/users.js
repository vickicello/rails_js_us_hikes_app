$(document).ready(function(){
	console.log("users.js loaded!");
});



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