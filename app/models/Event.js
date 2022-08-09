const db = require('../db.js');


class Event {

  static async findAll() {
    const result = await db.query("SELECT * FROM event");
    return result.rows;
  }

  static async findOne(id) {
    const result = await db.query("SELECT * FROM event WHERE id = $1;", [id]);
    return result.rows;
  }

  static async findDayEvent() {
    const result = await db.query("SELECT * FROM event WHERE start::date = current_date;");
    return result.rows;
  }

  static async findWeekEvent(week) {
    const result = await db.query("SELECT * FROM event WHERE date_part('week', start) = $1;", [week]);
    return result.rows;
  }

}

module.exports = Event;



