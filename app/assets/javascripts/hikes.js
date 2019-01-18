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


	$('a.alphabetized').on('click', function(e){
		e.preventDefault();
		$.ajax({
			url: this.href,
			method: 'GET',
			dataType: 'json',
			success: function(response){
				//console.log(response.hikes[0].name)
				//'Big Sur'

				let newData = (response.hikes);
				//newData is an array of 6 objects
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
				console.log(newData.sort(alphabetize("name")))
				// for(let name in newData) {
				// 	alert(name)
				debugger;
				// }

					// let newData = Object.keys(responseData).map((function(key){
					// 	return [Number(key), responseData[key]];
					// 	})
					// )
				//create a function that operates on 'response' to alphabetize/sort the list of hikes and append to the DOM
				//it seems that I am sorting by hike id though, not name, have to drill in more?
			}
		})
	})

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