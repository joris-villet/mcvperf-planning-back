// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()

const Event = require('../models/Event.js');

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
    const eventId = Number(request.params.id);

    result = !eventId ? await Event.findAll() : await Event.findOne(eventId);

    // if (!request.params.id) {
    //   result = await Event.findOne(Number(request.params.id));
    // } else {
    //   result = await Event.findAll();
    // }

    reply.send(result)
  },

  findDayEvent: async (_, reply) => {
    const events = await Event.findDayEvent();
    return reply.send(events);
  },

  findWeekEvent: async (request, reply) => {
    const week = Number(request.params.id);
    const events = await Event.findWeekEvent(week);
    return reply.send(events);
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