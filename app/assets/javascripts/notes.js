//file for keeping code that worked but wanted to keep main js file clean

// request a list of user's hikes on user show page via HTML - keep!
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

//request request a list of user's hikes on user show page via JSON without prototype = keep !!!
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

