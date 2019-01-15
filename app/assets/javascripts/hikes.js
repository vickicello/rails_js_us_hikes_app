$(document).ready(function(){
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

//HTML prototype for formatting and listing user's hikes
	Hike.prototype.formatHike = function() {
		return `<li><h4><a class='show_hike_details' href="/hikes/${this.id}">${this.name}</a></h4></li>`
	}

//prototype for displaying Hike details
	Hike.prototype.showHikeDetails = function() {
		return `<li>${this.description} - ${this.state}<br></li>`
	}

//render 'list of things' using function on the prototype 
//show a list of a user's hikes on the user show page
	$('a.show_user_hikes').on('click', function(event){
		$.ajax({
			url: this.href,
			method: "GET",
			dataType: "json",
			success: function(response){
				response.forEach(item =>{
					let newHike = new Hike(item)
					$('div.list_user_hikes ol').append(newHike.formatHike())
				})
				listenForShowDetailsClick();
			}
		});
		event.preventDefault();
	});

//render show page/'one thing'
//show more hike details on user show page
function listenForShowDetailsClick(){
	$('li h4 a').on('click', function(event){
		event.preventDefault();
		$.ajax({
			url: this.href,
			method: "GET",
			dataType: "json",
			success: function(response){
				// //clear ul html:
				// const $details_ul = $("div.hike_details ul");
				// $details_ul.html("") //emptied ul
				let hike = new Hike(response);
				let html = hike.showHikeDetails();
				$('div.hike_details ul').html(html)
			}
		});	
	});
}
	
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

//prototype for displaying Hike details
Comment.prototype.formatComment = function() {
	return `<li>${this.commentBody}<br>${this.commentorUsername}<br></li>`
}

	//render comments on the hike using AJAX - show 'has many' relationship
	$("a.load_comments").on("click", function(e){
		$.ajax({
			url: this.href,
			type: "GET",
			dataType: "json",
			success: function(data){
				//clear ul html:
				const $list_comments_ul = $("div.hike_comments ul");
				$list_comments_ul.html("")
				debugger;
				data.forEach((comment, index)=>{
					let oneComment = new Comment(comment)
					let oneCommentHTML = oneComment.formatComment()
					$list_comments_ul.append(oneCommentHTML)
				})
			}
		});
		e.preventDefault();
	});

//submit comment form using AJAX
 $(".new_comment").on("submit", function(e){
	 $.ajax({
		 type: "POST",
		 url: this.action,
		 data: $(this).serialize()
		}).success(function(response){
			$("#comment_content").val("");
			const $comment_ul = $("div.fancy_hike_comments ul")
			$comment_ul.append(response);
		});
	  e.preventDefault();
  });
});