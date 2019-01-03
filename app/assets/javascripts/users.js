$(document).ready(function() {
	attachEventListeners()
});




//Comments
//should I put this in it's own JS file?
class Comment {
  //do I have access to commentor here?
	constructor(commentor, content, id) {
		this.commentor = commentor;
		this.content = content;
		this.id = id;
	}
}

Comment.prototype.someFunction = function() {
	//do something
}

Comment.prototype.formatHTML = function() {
  //display formatted comment with commentor username
}