const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {

  create: async (request, reply) => {

    console.log(request.body)

    const rdv = await prisma.rendezvous.create({
      data: {
        start: request.body.start || "",
        end: request.body.end || "",
        title: request.body.title || "",
        content: request.body.content || "",
        phone: request.body.phone || "",
        name: request.body.name || ""
      }
    })

    reply.send(rdv)
   
  },

  read: async (request, reply) => {
    
    let result = null;

    if (!request.params.id) {
      result = await prisma.rendezvous.findMany();
    } else {
      result = await prisma.rendezvous.findUnique({
        where: { id: Number(request.params.id) }
      })
    }

    reply.send(result)
  },

  update: async (request, reply) => {

    const result = await prisma.rendezvous.update({
      where: { id: Number(request.params.id) },
      data: request.body
    })

    reply.send(result)
  },

  delete: async (request, reply) => {

    const result = await prisma.rendezvous.delete({
      where: { id: Number(request.params.id) },
    })

    reply.send(result)
  }

}