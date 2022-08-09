CREATE TABLE event (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name TEXT,
	start TIMESTAMPTZ NOT NULL UNIQUE,
	"end" TIMESTAMPTZ NOT NULL UNIQUE,
	title TEXT,
	content TEXT,
	phone TEXT
)

DROP TABLE event;

DELETE FROM event;

INSERT INTO event (name, start, "end", title, content, phone) values
(null,'2022/08/09 14:00', '2022/08/09 16:00', 'audi a3', 'stage 1', null),
(null,'2022/08/09 17:00', '2022/08/09 18:00', 'audi a3', 'remise origin', null),
(null,'2022/08/10 08:00', '2022/08/10 10:00', 'audi a3', 'stage 1', null),
(null,'2022/08/10 11:00', '2022/08/10 18:00', 'golf 7 r', 'stage 1 flex', null),
(null,'2022/08/17 14:00', '2022/08/17 16:00', 'audi a1', 'ethanol', null),
(null,'2022/08/18 14:00', '2022/08/18 16:00', 'audi a3', '4 pneus', null);


SELECT * FROM event;

SELECT * FROM event WHERE id = 30;

SELECT * FROM event WHERE start::text like '%12%';

SELECT * FROM event WHERE start::text like current_date::text;

-- Obtenir le numéro de la semaine courante
SELECT date_part('week', start) AS "semaine" FROM event;

-- Event de la semaine demandée
SELECT * FROM event WHERE date_part('week', start) = 32;

-- Event du jour
SELECT * FROM event WHERE start::date = current_date;

SELECT title || ' - ' || content AS "rendez-vous" 
FROM event;

