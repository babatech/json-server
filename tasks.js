let faker = require('faker')
const { date } = require('faker')
function generateTasks () {
    let tasks = []
  for (let id = 0; id < 10; id++) {
    tasks.push({
      "id": id,
      "state": id%2 ? true : false,
      "title": faker.name.title(),
      "description": faker.lorem.paragraph(),
      "created_at":  faker.date.recent(id).toISOString().substring(0, 10),
      "update_at": (new Date()).toISOString().substring(0, 10),
      "datetime": faker.date.between(new Date(),new Date('2020-09-09') ).toISOString().substring(0, 10)
    })
  }
  return { "tasks": tasks }
}
module.exports = generateTasks