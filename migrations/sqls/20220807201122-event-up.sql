CREATE TABLE event (
	id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name text,
	start timestamptz NOT NULL UNIQUE,
	"end" timestamptz NOT NULL UNIQUE,
	title text,
	content text,
	phone text
);

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