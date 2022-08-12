CREATE OR REPLACE FUNCTION new_event(event json)
	RETURNS event AS $$
	INSERT INTO event (name, start, "end", title, content, phone) VALUES
	(
		event->>'name',
		(event->>'start')::date,
		(event->>'end')::date,
		event->>'title',
		event->>'content',
		event->>'phone'
	)
RETURNING *;
$$ LANGUAGE sql STRICT;


CREATE OR REPLACE FUNCTION get_week_event(current_week int, current_month int) RETURNS SETOF event AS $$
	SELECT id, 
	name, 
	to_char("start", 'yyyy-mm-dd HH24:MI')::timestamptz AS start, 
	to_char("end", 'yyyy-mm-dd HH24:MI')::timestamptz AS end, 
	title, 
	content, 
	phone 
	FROM event 
	WHERE date_part('week', start) = current_week
	AND date_part('YEAR', start) = current_month
$$ LANGUAGE sql STRICT;