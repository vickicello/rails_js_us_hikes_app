#TODO
Link to repo:
https://github.com/vickicello/rails_js_us_hikes_app

Link to Kickoff Branch: https://github.com/vickicello/rails_js_us_hikes_app/tree/kickoff

0.5) How to structure JS files?  What methods do I wish to use?

0.75) What buttons do I need to add in views to get this to work?
-----------------------------------------
##Rails + JS Project

<!-- 1) User Show Page: display index of that user's hikes
  a) fetch hikes with AJAX GET request
  b) backend renders posts in JSON
  c) appends hikes to user show page -->

2) Hike Show Page: users can click on 'show comments' button (displays has_many relationship)
  a) fetch comment data with AJAX
  b) render with JS
  c) use Active Model Serializer
  d) hikes/:id
  e) hikes#show
  f) create <div> that will display if no comments exist

3) Hike Show Page: render comments form (my has_many through relationship)
  a) JSON through JS (or do through partial)
  b) hikes/:id
  c) hikes#show
  d) add 'new comment' button

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

    -should I add comment form via JS to Hike Prototype or make Comment Prototype???

Misc:
  <% if @hike.comments.any? %> 
    <%= link_to "Load All Comments", hike_comments_path(@hike), :class => 'load_comments' %>
  <% else %>
    <div class="no-comments">
      <p>There are no comments for this hike.</p>
  <% end %>
    </div> 


^^If there is no URL to grab, add data-url="whatever_url"  inside the button tag and then you can access it later by calling `this.dataset.url`   

<!-- 5) Create comment prototype object
  a) add function to the prototype to concatenate/format comments
    i) have 1 or more formatters, method on the prototype
    ii) ex: commentor's username and content of comment
  b) append comment info to the DOM -->
------------------------------------------
<!-- 6) 30 mins working on project -->

7) blog post

8) 5 min recorded walkthrough

9) Debug and submit!
-------------------------------------------
##Log/end of sprint notes:

1/2/19
* Edited out line 42 of config/environments/production due to active storage error
* reconfigured routes to be more RESTful.  Woo!




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

