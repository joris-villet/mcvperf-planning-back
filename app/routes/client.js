const clientController = require('../controllers/clientController.js')


module.exports = (fastify, options, done) => {

  fastify.route({
    url: '/client/create',
    method: 'POST',
    handler: clientController.create
  })


  done();

}