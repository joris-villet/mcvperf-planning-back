const eventController = require('../controllers/eventController.js');


module.exports = (fastify, options, done) => {

  fastify.route({
    method: 'POST',
    url: '/event/create',
    handler: eventController.create
  })

  fastify.route({
    method: 'GET',
    url: '/event/read/:id?',
    handler: eventController.read
  })

  fastify.route({
    method: 'GET',
    url: '/event/day',
    handler: eventController.findDayEvent
  })

  fastify.route({
    method: 'GET',
    url: '/event/week/:currentWeek/:currentYear',
    handler: eventController.findWeekEvent
  })

  fastify.route({
    method: 'PUT',
    url: '/event/update/:id',
    handler: eventController.update
  })

  fastify.route({
    method: 'DELETE',
    url: '/event/delete/:id',
    handler: eventController.delete
  })


  done();

}