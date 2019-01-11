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
		return `<li><h4><a href="/hikes/${this.id}">${this.name}</a></h4></li>`
	}

	Hike.prototype.showHikeDetails = function() {
		return `<li>${this.description}<br>${this.state}<br></li>`
	}

// request via HTML - keep!
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

//request via JSON without prototype = keep !!!
// $('a.show_user_hikes').on('click', function(e){
// 	$.ajax({
//     url: this.href,
//     type: "GET",
//     dataType: "json",
// 	  success: function(data){
// 			//clear ol html:
// 	   	var $ol = $("div.list_user_hikes ol");
//     	$ol.html("") //emptied ol
// 	   	//iterate over each hike with JSON:
// 			data.forEach(function(hike){
// 				$ol.append('<li>' + hike.name + ' - ' + hike.state + ' - ' + hike.description + '</li>');
// 			});
// 		}
// 	});
// 	e.preventDefault();
// });

//render 'list of things' using function on the prototype = finished product!!!
//show user's hikes on the user show page
	$('a.show_user_hikes').on('click', function(e){
		$.ajax({
			url: this.href,
			type: "GET",
			dataType: "json",
			success: function(data){
				//clear ol html:
				const $ol = $("div.list_user_hikes ol");
				$ol.html("") //emptied ol
				data.forEach((hike, index)=>{
					let newHike = new Hike(hike)
					let newHikeHTML = newHike.formatHike()
					$ol.append(newHikeHTML)
				})
			}
		});
		e.preventDefault();
	});

//render show page/one thing - not working
//show more hike details on hike show page
//not working
	$('a.show_hike_details').on('click', function(e){
		e.preventDefault();
		$.ajax({
			url: this.href,
			type: "GET",
			dataType: "json",
			success: hikeDetails(data)
		});	
		
	function hikeDetails(data) {
  const theHikeDetails = data
  let hikeDetailsHTML = ``

  for (i = 0; i < theHikeDetails.length; i++) {
    const hikeDetails = new Hike(theHikeDetails[i])
    hikeDetailsHTML += hikeDetails.showHikeDetails()
  }

  let $thisUl = $("div.hike_details ul")
  $thisUl.html(`${hikeDetailsHTML}`)
  // $('div#show-user-beers div#add-beer-form').html(`<button id="add-beer">Add Beer</button>`)
	}
});

//this didn't work
	// for data((hike)=>{
	// 	let newHikeWithDetails = new Hike(hike)
	// 	let newHikeWithDetailsHTML = newHikeWithDetails.showHikeDetails()
	// 	$ul.append(newHikeWithDetailsHTML)
	// });
	
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
// 			$ul.append(commentHTML);
// 		})
// 	})
// 	e.preventDefault();
// });

//this is working to show comments via AJAX when you click the show comments button - keep!!!!
// $("a.load_comments").on("click", function(e){
// 	$.ajax({
// 		url: this.href,
//     type: "GET",
//     dataType: "json",
// 	}).success(function(data){
// 			//clear ul html:
// 			var $ul = $("div.hike_comments");
// 			$ul.html("")
// 	   	//iterate over each hike with JSON:
// 			data.forEach(function(comment){
// 				$ul.append('<li>' + comment.content + ' - by : ' + comment.commentor.username + '</li>');
// 			}).error(function(ifNeeded){
// 				alert("eeeee!")
// 			})
// 		});
	
// 	e.preventDefault();
// });

 // $.post(this.action, $(this).serialize(), function(comment){
	// 		const $ol = $("div.hike_comments");
	// 		const newComment = new Comment(comment);
	// 		const commentHTML = newComment.formatComment();
	// 			$ol.html(commentHTML);

//submit comment form using AJAX
 $(".new_comment").on("submit", function(e){
	 $.ajax({
		 type: "POST",
		 url: this.action,
		 data: $(this).serialize()
		}).success(function(response){
			$("#comment_content").val("");
			var $ul = $("div.fancy_hike_comments ul")
			$ul.append(response);
		//  }).error(function(ifNeeded){
		// 		alert("eeeee!")
		});
	  e.preventDefault();
  });

});