const rdvController = require('../controllers/rdvController.js');


module.exports = (fastify, options, done) => {

  fastify.route({
    method: 'POST',
    url: '/rdv/create',
    handler: rdvController.create
  })

  fastify.route({
    method: 'GET',
    url: '/rdv/read/:id?',
    handler: rdvController.read
  })

  fastify.route({
    method: 'PUT',
    url: '/rdv/update/:id',
    handler: rdvController.update
  })

  fastify.route({
    method: 'DELETE',
    url: '/rdv/delete/:id',
    handler: rdvController.delete
  })


  done();

}