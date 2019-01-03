#TODO

<!-- 0) Fix navigation system - as per notes from project 3 review

0.0) Make sure everything is working with new repo and navigation system before proceeding -->
  <!-- a) New ENV file
  b) database -->

0.5) How to structure JS files?  What methods do I wish to use?

0.75) What buttons do I need to add in views to get this to work?

0.8) What serializers do I need to create, and what attributes do I need to add to them?
-----------------------------------------
##Rails + JS Project

1) Hikes Index Page: display index of that user's hikes
  a) fetch hikes with AJAX GET request
  b) backend renders posts in JSON
  c) appends hikes to user show page
  d) users/:id/hikes
  e) hikes#index

2) Hike Show Page: users can sift through hikes using a 'next' button
  a) fetch next hike with AJAX
  b) render with JS
  c) use Active Model Serializer
    <!-- i) add AMS gem -->
    ii) add next button to view
  d) hikes/:id
  e) hikes#show

3) Hike Show Page: render comments (my has_many through relationship)
  a) JSON through JS
  b) hikes/:id
  c) hikes#show

4) Hike Show Page: comments form submits dynamically, creating a resource
  a) serialize
  b) submit via AJAX POST request
  c) response is new object in JSON
  d) append new comments to DOM using JS
    i) use ES6 template literals
  e) hikes/:id
  f) hikes#show

5) Create comment prototype object
  a) add function to the prototype to concatenate/format comments
    i) have 1 or more formatters, method on the prototype
    ii) ex: comment author's first + last name
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

