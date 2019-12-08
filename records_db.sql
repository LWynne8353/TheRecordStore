DROP DATABASE IF EXISTS records_DB;

CREATE DATABASE records_DB;

USE records_DB;

CREATE TABLE music(
    id INT AUTO_INCREMENT NOT NULL,
    Band VARCHAR (250) NOT NULL,
    Genre VARCHAR (250) NOT NULL,
    Record_Vinyl VARCHAR (12) NOT NULL,
    Price DECIMAL (10,2),
    Stock INT (100),
    PRIMARY KEY (id)
);

INSERT INTO music (Band, Genre, Record_Vinyl, Price, Stock)
VALUES ("Queen", "Rock", "LP", 12.99, 9);
INSERT INTO music (Band, Genre, Record_Vinyl, Price, Stock)
VALUES ("Beatles", "Rock", "7in Single", 6.99, 6);
INSERT INTO music (Band, Genre, Record_Vinyl, Price, Stock)
VALUES ("Red Hot Chili Peppers", "Funk", "LP", 16.99, 15);
INSERT INTO music (Band, Genre, Record_Vinyl, Price, Stock)
VALUES ("Drake", "Rap", "EP", 17.99, 10);
INSERT INTO music (Band, Genre, Record_Vinyl, Price, Stock)
VALUES ("Matt&Kim", "Indie", "12in Single", 10.99, 16);
INSERT INTO music (Band, Genre, Record_Vinyl, Price, Stock)
VALUES ("James Brown", "Funk", "LP", 19.99, 7);
INSERT INTO music (Band, Genre, Record_Vinyl, Price, Stock)
VALUES ("Nathaniel Raticliffe and the Night Sweats", "Blues Rock", "7in Single", 10.99, 7);
INSERT INTO music (Band, Genre, Record_Vinyl, Price, Stock)
VALUES ("Lizzo", "Rap", "EP", 19.99, 9);
INSERT INTO music (Band, Genre, Record_Vinyl, Price, Stock)
VALUES ("Elvis Costello", "Indie", "12in Single", 7.99, 8);
