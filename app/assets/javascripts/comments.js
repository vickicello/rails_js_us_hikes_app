$(document).ready(function(){
  
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