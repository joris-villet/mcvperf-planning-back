const db = require('../db.js');


class Event {

  static async create(event) {
    const result = await db.query(`SELECT new_event($1);`, [event]);
    return result.rows;
  }

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

  // static async findWeekEvent(week) {
  //   const result = await db.query(`SELECT id, to_char(\"start\", 'yyyy-mm-dd HH24:MI') AS start, to_char(\"end\", 'yyyy-mm-dd HH24:MI') AS end, title, content, name, phone
  //   FROM event WHERE date_part('week', start) = $1;`, [week]);
  //   return result.rows;
  // }
  static async findWeekEvent(currentWeek, currentYear) {
    const result = await db.query("SELECT * FROM get_week_event($1, $2);", [currentWeek, currentYear]);
    return result.rows;
  }

}

module.exports = Event;



