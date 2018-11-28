TODO

<!-- 1) create models and db schema -->
  <!-- -users
    + username
    + password
    + email
    +
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
    + f.select dropdown box in form -->

1.5) Controllers
  <!-- -Welcome -->
  -Sessions
  -Users
  -Hikes
  -comments

<!-- 1.67) Seed the db -->

<!-- 2) user can check off/cross off hikes once they are created
2.5) omniauth  can login with facebook (uid = the user's id on fb) -->
3) user can create, edit, view, and destroy the hikes on their list

  -create views 

  -create forms

  <!-- -add all oauth info -->

  -refactor views with partials

<!-- 4) users can see other users' hike show page and leave a comment(?) -->

5) validation, and error messages using flash

<!-- 6) use bootstrap framework??? - CDN -->

<!-- 7) dropdown states list in hike new view -->

11/27/18

-need to work out 'My Hikes' Button to show users/user_id/hikes/index in navbar

-need to show error messages (not showing at the moment)

-create new hike form isn't working

-weird comment stuff from active record at the bottom of hike show page

-need to create scope info in view somewhere

-figure out if we want to keep 'with comments' scope

-add username to comments somehow

-figure out which actions and routes are needed for comments