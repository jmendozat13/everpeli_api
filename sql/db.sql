CREATE TABLE IF NOT EXISTS movie_rental (
    id INT NOT NULL AUTO_INCREMENT,
    conditions TEXT NOT NULL,
    userid VARCHAR(256) NOT NULL,
    returndate DATE,
    daterental DATE,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS movie_rental_details(
    id INT NOT NULL AUTO_INCREMENT, 
    movieid VARCHAR(256) NOT NULL,
    state VARCHAR(25) NOT NULL,
    isreturn BOOLEAN,
    PRIMARY KEY (id),
    movie_rentalId INTEGER REFERENCES movie_rental(id)
);