CREATE TABLE event (
	id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name text,
	start timestamptz NOT NULL UNIQUE,
	"end" timestamptz NOT NULL UNIQUE,
	title text,
	content text,
	phone text
);