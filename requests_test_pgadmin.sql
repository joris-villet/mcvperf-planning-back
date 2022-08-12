CREATE TABLE event (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name TEXT DEFAULT null,
	start TIMESTAMPTZ NOT NULL UNIQUE,
	"end" TIMESTAMPTZ NOT NULL UNIQUE,
	title TEXT,
	content TEXT,
	phone TEXT DEFAULT null
)

-- REVERT
DELETE FROM event;
DROP TABLE event;
DROP VIEW v_week_event;
DROP FUNCTION new_event;

----------------------------

INSERT INTO event (name, start, "end", title, content, phone) values
(null,'2022/08/09 14:00', '2022/08/09 16:00', 'audi a3', 'stage 1', null),
(null,'2022/08/09 17:00', '2022/08/09 18:00', 'audi a3', 'remise origin', null),
(null,'2022/08/10 08:00', '2022/08/10 10:00', 'audi a3', 'stage 1', null),
(null,'2022/08/10 11:00', '2022/08/10 18:00', 'golf 7 r', 'stage 1 flex', null),
(null,'2022/08/17 14:00', '2022/08/17 16:00', 'audi a1', 'ethanol', null),
(null,'2022/08/18 14:00', '2022/08/18 16:00', 'audi a3', '4 pneus', null);
----------------------------
CREATE OR REPLACE FUNCTION new_event(event json)
	RETURNS event AS $$
	INSERT INTO event (name, start, "end", title, content, phone) VALUES
	(
		event->>'name',
		(event->>'start')::timestamptz,
		(event->>'end')::timestamptz,
		event->>'title',
		event->>'content',
		event->>'phone'
	)
RETURNING *;
$$ LANGUAGE sql STRICT;
--------------------------------------
-- EVENT de la semaine et année en court
SELECT id, name, to_char("start", 'yyyy-mm-dd HH24:MI') AS start, to_char("end", 'yyyy-mm-dd HH24:MI') AS end, title, content, phone
	FROM event WHERE date_part('week', start) = 32 
	AND date_part('year', start) = 2022;

--------------------------------------
CREATE OR REPLACE FUNCTION get_week_event(current_week int, current_year int) RETURNS SETOF event AS $$
	SELECT 
	id, 
	name, 
	to_char("start", 'yyyy-mm-dd HH24:MI')::timestamptz AS "start", 
	to_char("end", 'yyyy-mm-dd HH24:MI')::timestamptz AS "end", 
	title, 
	content, 
	phone 
	FROM event 
	WHERE date_part('week', start) = current_week
	AND date_part('YEAR', start) = current_year
$$ LANGUAGE sql STRICT;
----------------------------------
DROP FUNCTION get_week_event;

SELECT * FROM get_week_event(32, 2022);

SELECT * FROM event;

SELECT current_date;

-- Event du mois
SELECT to_char("start", 'yyyy-mm-dd HH24:MI') AS start, to_char("end", 'yyyy-mm-dd HH24:MI') AS end, title, content, name, phone
	FROM event WHERE date_part('month', start) = 8;
	
-- Event de l'année
SELECT to_char("start", 'yyyy-mm-dd HH24:MI') AS start, to_char("end", 'yyyy-mm-dd HH24:MI') AS end, title, content, name, phone
	FROM event WHERE date_part('year', start) = 2022;

SELECT to_char(start,'yyyy-mm-dd HH24:MI'), to_char("end",'yyyy-mm-dd HH24:MI') FROM event;

SELECT * FROM event WHERE id = 30;

SELECT * FROM event WHERE start::text like '%12%';

SELECT * FROM event WHERE start::text like current_date::text;

SELECT date_part('week', start) AS "semaine" FROM event;

-- obtenir le mois
SELECT date_part('month', current_date) AS "mois" FROM event;

SELECT * FROM event WHERE start::date = current_date;

SELECT title || ' - ' || content AS "rendez-vous" 
FROM event;

