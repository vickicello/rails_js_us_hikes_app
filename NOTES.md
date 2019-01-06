#TODO
Link to repo:
https://github.com/vickicello/rails_js_us_hikes_app

Link to Kickoff Branch: https://github.com/vickicello/rails_js_us_hikes_app/tree/kickoff

0.5) How to structure JS files?  What methods do I wish to use?

0.75) What buttons do I need to add in views to get this to work?
-----------------------------------------
##Rails + JS Project

1) User Show Page: display index of that user's hikes
  a) fetch hikes with AJAX GET request
  b) backend renders posts in JSON
  c) appends hikes to user show page

2) Hike Show Page: users can sift through hikes using a 'next' button
  a) fetch next hike with AJAX
    i) do I need to use fetch function for this?
  b) render with JS
  c) use Active Model Serializer
    i) add next button to view
    ii) what about back, return buttons?
  d) hikes/:id
  e) hikes#show

3) Hike Show Page: render comments (my has_many through relationship)
  a) JSON through JS
  b) hikes/:id
  c) hikes#show
  d) add 'load comments' button
  e) create <div> that will display if no comments exist

4) Hike Show Page: comments form submits dynamically, creating a resource
  a) serialize
  b) submit via AJAX POST request
  c) response is new object in JSON
  d) append new comments to DOM using JS
    i) use `(${ES6 template literals})`
  e) hikes/:id
  f) hikes#show
  g) comments form submits dynamically and is appended to the DOM upon submission
  h) How do I make link to a simple comments partial? Before comments were just rendering on the hike#show page via a partial, they didn't have their own template.
  i) Add in conditional material in case of no comments:

   <% if @hike.comments.any? %> 
      <%= link_to "Load All Comments", hike_comments_path(@hike), :class => 'load_comments' %>
  <% else %>
    <div class="no-comments">
      <p>There are no comments for this hike.</p>
  <% end %>
    </div> 

Ex show more button: 

$('#show-brewery').on('click', 'button.show-more', function(e) {
    e.preventDefault();
    $.ajax({
      type: "GET",
      url: "/breweries/23",
      dataType: 'json',
      success: function(response) {
        showMoreBreweryBeers(response)
      },
      error: function(response) {
        console.log(response)
        alert("Oops! Something went wrong!")
       }
    })
  })

^^If there is no URL to grab, add data-url="whatever_url"  inside the button tag and then you can access it later by calling `this.dataset.url`   

5) Create comment prototype object
  a) add function to the prototype to concatenate/format comments
    i) have 1 or more formatters, method on the prototype
    ii) ex: commentor's username and content of comment
  b) append comment info to the DOM
------------------------------------------
6) 30 mins working on project

7) blog post

8) 5 min recorded walkthrough

9) Debug and submit!
-------------------------------------------
##Log/end of sprint notes:

1/2/19
* Edited out line 42 of config/environments/production due to active storage error
* reconfigured routes to be more RESTful.  Woo!

1/3/19


-----------------------------------------------
##Labs to Reference:

JS Classes: https://learn.co/tracks/full-stack-web-development-v6/javascript/object-oriented-js/classes

Prototypes:
https://learn.co/tracks/full-stack-web-development-v6/javascript/object-oriented-js/prototypes

Loading Comments with AJAX (Video):
https://learn.co/tracks/full-stack-web-development-v6/rails-and-javascript/using-ajax-and-rails/video-review-loading-comments-via-get-ajax

Using to_json:
https://learn.co/tracks/full-stack-web-development-v6/rails-and-javascript/building-apis/using-to_json

AMS: https://learn.co/tracks/full-stack-web-development-v6/rails-and-javascript/building-apis/using-active-model-serializer

Receiving API POST Requests:
https://learn.co/tracks/full-stack-web-development-v6/rails-and-javascript/building-apis/receiving-api-posts

