$(document).ready(function(){
	// alert("users.js loaded!");

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

Hike.prototype.hikeInfoTemplate = function() {
  return `<h3>${this.name}</h3>
    <p>${this.hike.name}</p>
    <p>State: ${this.state}</p>
    <p>Description: ${this.description}</p>`
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
				$ol.append('<li>' + hike.name + ' - ' + hike.state + ' - ' + hike.description + '</li>');
			});
		}
	});
	e.preventDefault();
});


//hikes#show
//use class Hike object to create a custom function that displays comments.   

//then you could use a custom function to create HTML that 
//shows the comments for an instance of Hike.

class Comment {
	constructor(commentData){
		this.id = commentData.id
		this.userId = commentData.user_id
		this.hikeId = commentData.hike_id
		this.commentBody = commentData.content
		this.commentorId = commentData.commentor.id
		this.commentorUsername = commentData.commentor.username
		this.commentorEmail = commentData.commentor.email		
	}
}

//Get comment data via AJAX
// $("a.load_comments").on("click", function(e){
// 	$.get(this.href).success(function(comments){
// 		var $ul = $("div.hike_comments");
// 		$ul.html("")
// 		comments.forEach(function(comment){
// 			const oneComment = new Comment(comment);
// 			const commentHTML = oneComment.formatComment();
// 			// debugger;
// 			$ul.append(commentHTML);
// 		})
// 	})
// 	e.preventDefault();
// });


$("a.load_comments").on("click", function(e){
	$.ajax({
		url: this.href,
    type: "GET",
    dataType: "json",
	}).success(function(data){
			//clear ul html:
			var $ul = $("div.hike_comments");
			$ul.html("")
			
	   	//iterate over each hike with JSON:
			data.forEach(function(comment){
				$ul.append('<li>' + comment.content + ' - by : ' + comment.commentor.username + '</li>');
			}).error(function(ifNeeded){
				alert("eeeee!")
			})
		}
	);
	e.preventDefault();
});

// // JS constructor 
// function Comment(comment) {
// 	this.commentUsername = comment.commentor.username
// 	this.commentContent = comment.content
// }

// // Prototype method
// Comment.prototype.formatComment = function() {
// 	return `<li>${this.commentContent} by: ${this.commentUsername}</li>`
// }

//submit comment using AJAX
 $(".new_comment").on("submit", function(e){
  $.post(this.action, $(this).serialize(), function(comment){
		debugger;
			const $ol = $("div.hike_comments");
			const newComment = new Comment(comment);
			const commentHTML = newComment.formatComment();
				$ol.html(commentHTML);

	});
	e.preventDefault();
});

});