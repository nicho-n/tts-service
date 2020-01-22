CREATE TABLE shoes (
  brand VARCHAR(30) NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (brand, name)
);

CREATE TABLE ttsData (
  id serial,
  ttsData INTEGER NOT NULL,
  brand VARCHAR(30) NOT NULL, 
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id), 
  FOREIGN KEY (brand, name) REFERENCES shoes(brand, name) ON DELETE CASCADE,
  CHECK (ttsData>=1),
  CHECK (ttsData<=5)
);

INSERT INTO shoes (brand, name) VALUES ('adidas', 'yeezy');
