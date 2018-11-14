# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users: do we need to add seed data for oauth gem?

User.create([
  { username: "Vicki", email: "vh@gmail.com", password: "hello" },
  { username: "Jen", email: "jen@gmail.com", password: "wow" },
  { username: "Tom", email: "tom@gmail.com", password: "Looooo" },
  { username: "Kara", email: "kara@hotmail.com", password: "111" }
])

Hike.create([
  { name: "Big Sur Trails", state: "CA", description: "Breathtaking mountains and coastal views", user_id: 1, completed: true },
  { name: "Badlands National Park Trails", state: "SD", description: "Its dramatic landscapes span layered rock formations, steep canyons and towering spires. Bison, bighorn sheep and prairie dogs inhabit its sprawling grasslands", user_id: 3, completed: false },
  { name: "Joshua Tree National Park Trails", state: "CA", description: "Characterized by rugged rock formations and stark desert landscapes. Named for the region’s twisted, bristled Joshua trees, the park straddles the cactus-dotted Colorado Desert and the Mojave Desert", user_id: 4, completed: false },
  { name: "Stowe Pinnacle Trail", state: "VT", description: "Located in Stowe, VT. Features a great forest setting and is rated as moderate", user_id: 1, completed: true }
])

comments = Comment.create([
  { content: "Looks amazing!", user_id: 2, hike_id: 1 },
  { content: "I love those whacky trees", user_id: 4, hike_id: 3 },
  { content: "Just a beautiful hike in Southern California", user_id: 2, hike_id: 3 },
  { content: "Can't wait to go there next spring!", user_id: 1, hike_id: 2 }
])