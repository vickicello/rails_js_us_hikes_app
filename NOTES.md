#TODO

0) Fix navigation system - as per notes from project 3 review

0.0) Make sure everything is working with new repo and navigation system before proceeding
  a) New ENV file
  b) database

-----------------------------------------
##Rails + JS Project

1) User Show Page: display index of that user's hikes
  a) fetch hikes with AJAX GET request
  b) backend renders posts in JSON
  c) appends hikes to user show page

2) Hike Show Page: users can sift through hikes using a 'next' button
  a) fetch next hike with AJAX
  b) render with JS
  c) use Active Model Serializer
    <!-- i) add AMS gem -->
    ii) add next button to view

3) Hike Show Page: render comments (my has_many relationship)
  a) JSON through JS

4) Hike Show Page: comments form submits dynamically, creating a resource
  a) serialize
  b) submit via AJAX POST request
  c) response is new object in JSON
  d) append new comments to DOM using JS
    i) use ES6 template literals

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