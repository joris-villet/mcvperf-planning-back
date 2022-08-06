const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {

  create: async (request, reply) => {
    console.log(request.body)
    await prisma.client.create({ data: request.body })
    reply.send('ok')
  }

}