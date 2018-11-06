TODO

1) create models and db schema
  -users
    + username
    + password
    + email
    + can login with facebook (uid = the user's id on fb)
  -hikes
    + name
    + has state_id (dropdown list)
    + users can write comments on the hike???
  -descriptions
    + join table between users and hikes
    + a user has many comments, and many hikes through comments
    + a hike has many comments, and many users through comments
  -states
    + state name and 2 letter code
    + f.select dropdown box in form

1.5) Controllers
  -Welcome
  -Sessions
  -Users
  -Hikes

1.67) Seed the db

2) user can check off/cross off hikes once they are created

3) user can create, edit, view, and destroy the hikes on their list

  -create views 

  -create forms

  -add all oauth info

  -refactor views with partials

  -refactor controllers  with helpers if needed

4) users can see other users' hike show page and leave a comment(?)

5) validation, and error messages using flash

6) use bootstrap framework???