#TODO
Link to repo:
https://github.com/vickicello/rails_js_us_hikes_app

1) Hard code a form in the hikes index view, which will allow
  the user to filter hikes by state
    a) use either a text input box or drop-down menu
    b) how will I grab what the user entered via JS?

2) hijack form submit event
  a) using JS, submit a request to the backend to get all hikes (JSON)

3) filter the incoming JSON response according to the chosen state

4) create new JS 'Hike' objects (using the contructor + prototype method)
  a) append the filtered list to the DOM