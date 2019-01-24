#TODO
Link to repo:
https://github.com/vickicello/rails_js_us_hikes_app/tree/js_review

1) Hard code a form in the hikes index view, which will allow
  the user to filter hikes by state
    a) Chose to use text input
    b) how will I grab what the user entered via JS?
      I grabbed the input using a jQuery selector for the id on the text box, which is #state, and then got whatever value was entered using the .val() method

2) hijack form submit event
  a) using JS, submit a request to the backend to get all hikes (JSON)
  I did this by hijacking the click event on the submit button, to which I added a class of .filter_by_state.  I made an AJAX get request to the hikes/index URL, and asked for JSON back.  JSON is available to me because of the hike serializer I have and the 'respond to' json method in my hike controller's index action.  The JSON response is a string of all of the hikes (and their associated data) that the user created.  

3) filter the incoming JSON response according to the chosen state
  First I made a named function, compareState(), which was passed in as a promise to my success() function during the previously described ajax method.

  The function first assigns the user's state input into a variable, stateInput, so that it can be used later.  Next, I use the filter() function on the AJAX response, which takes hike as an argument.  This filter method looks for all hikes with a state attribute that is equal to stateInput, and returns them.  I set the filter function equal to a variable, result, so that I could iterate over the resulting hikes later on.


4) create new JS 'Hike' objects (using the contructor + prototype method)
  a) append the filtered list to the DOM

  I was able to use the forEach() method on the result variable from before.  This iterates over all of the returned hikes that match the state that the user selected, and then creates new JS Hike objects using my Hike constructor method declared earlier.  After each instance of Hike is constructed, I am able to format them into HTML using my formatHike prototype method, and append them to the DOM using the append() jQuery method.  