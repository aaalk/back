-- SQLite
-- https://sqliteonline.com/
-- https://www.sqlitetutorial.net/

CREATE TABLE colors (id INTEGER PRIMARY KEY, sortorder INTEGER, value TEXT);
CREATE TABLE chaptersList (id INTEGER PRIMARY KEY, sortorder INTEGER, icon TEXT, title TEXT);
CREATE TABLE videoList (id INTEGER PRIMARY KEY, chapterId INTEGER, added INTEGER, title TEXT, url TEXT);
CREATE TABLE notesList (id INTEGER PRIMARY KEY, videoId INTEGER, time INTEGER, colorId INTEGER, text TEXT);

INSERT INTO colors (sortorder, value) VALUES (10, "#0af");
INSERT INTO colors (sortorder, value) VALUES (20, "#4d0");
INSERT INTO colors (sortorder, value) VALUES (30, "#f90");
INSERT INTO colors (sortorder, value) VALUES (40, "#f30");
INSERT INTO colors (sortorder, value) VALUES (50, "#a3f");

INSERT INTO chaptersList (sortorder, icon, title) VALUES (10, "<SchoolIcon/>", "Школа");
INSERT INTO chaptersList (sortorder, icon, title) VALUES (20, "<SportsGymnasticsIcon/>", "Спорт");
INSERT INTO chaptersList (sortorder, icon, title) VALUES (30, "<MicrowaveIcon/>", "Рецепты");
INSERT INTO chaptersList (sortorder, icon, title) VALUES (40, "<MovieFilterIcon/>", "Разное");

INSERT INTO notesList (videoId, time, colorId, text) VALUES (4, 988, 1, "Как создать Реакт-проект");
INSERT INTO notesList (videoId, time, colorId, text) VALUES (4, 1042, 1, "Структура Реакт-приложения");
INSERT INTO notesList (videoId, time, colorId, text) VALUES (4, 1175, 4, "Как запустить");
INSERT INTO notesList (videoId, time, colorId, text) VALUES (4, 1723, 1, "Реакт-компоненты");
INSERT INTO notesList (videoId, time, colorId, text) VALUES (4, 2525, 3, "JSX - JS XML");
INSERT INTO notesList (videoId, time, colorId, text) VALUES (4, 3957, 1, "Что такое Хуки (Hooks), useState");

INSERT INTO notesList (videoId, time, colorId, text) VALUES (1, 10, 1, "10 secs");
INSERT INTO notesList (videoId, time, colorId, text) VALUES (1, 200, 2, "200 secs");
INSERT INTO notesList (videoId, time, colorId, text) VALUES (1, 320, 3, "300 secs");

INSERT INTO notesList (videoId, time, colorId, text) VALUES (2, 30, 2, "30 secs");
INSERT INTO notesList (videoId, time, colorId, text) VALUES (2, 120, 3, "120 secs");
INSERT INTO notesList (videoId, time, colorId, text) VALUES (2, 420, 4, "420 secs");

-- UPDATE colors SET sortorder = 30 WHERE id = 3;
-- DELETE FROM colors WHERE id > 5;
-- DELETE FROM colors;
-- ALTER TABLE videoList RENAME COLUMN date TO added;
ALTER TABLE notesList RENAME COLUMN time TO noteTime;
UPDATE videoList SET title = 'Прыжки со скакалкой', url = 'https://www.youtube.com/watch?v=gzm2VGvfTbY', chapterId = 2 WHERE id = 2; 
UPDATE videoList SET chapterId = 3 WHERE id = 1;
UPDATE videoList SET chapterId = 1 WHERE id = 4;
DELETE FROM videoList WHERE id = 1;
DELETE FROM videoList WHERE title = 'Название загружается...';
DELETE FROM notesList WHERE videoId = 1;
DELETE FROM notesList WHERE text = 'jgfjgf';
DELETE FROM notesList
DROP TABLE notesList