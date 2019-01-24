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

// HTML prototype for formatting and listing user's hikes
	Hike.prototype.formatHike = function() {
		return `<li><h4><a class='show_hike_details' href="/hikes/${this.id}">${this.name}</a></h4></li>`
	}

// prototype for displaying Hike details
	Hike.prototype.showHikeDetails = function() {
		return `<li>${this.description} - ${this.state}<br></li>`
	}

	$('a.alphabetized').on('click', function(e){
		e.preventDefault();
		$.ajax({
			url: this.href,
			method: 'GET',
			dataType: 'json',
			success: function(response){
				let newData = (response.hikes);

				function alphabetize(property){
					let sortOrder = 1;

					if(property[0] === "-"){
						sortOrder = -1
						property = property.substr(1)
					}

					return function(a, b){
						if(sortOrder == -1){
							return b[property].localeCompare(a[property]);
						} else {
							return a[property].localeCompare(b[property])
						}
					}		
				}

				let result =  newData.sort(alphabetize("name")).filter(function(hike){
					return hike.name[0] === 'C'
				})

	     	result.forEach(item =>{
					let newHike = new Hike(item)
					$('div.list_user_hikes ol').append(newHike.formatHike())
				})
			
			}
		})
	})

// space for working on JS Review:
$(".filter_by_state").on("click", function(e){
	e.preventDefault();
	$.ajax({
		type: "GET",
		url: this.href, //the hikes index url from the form
		dataType: 'json',
	 }).success(compareState);
	})

		function compareState(response){
			let stateInput = $('#state').val(); //grab the user's selected state
			let result = response.filter(function(hike){
				return hike.state === stateInput;
			});

		// iterate over each instance of Hike that was filtered 
		// create new JS models using the class constructor
		// append to DOM
	  result.forEach(item =>{
			let filteredHike = new Hike(item);
			$('div.by_state ul').append(filteredHike.formatHike());
			});
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
});