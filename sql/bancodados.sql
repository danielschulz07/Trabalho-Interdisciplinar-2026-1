-- Criar Banco de Dados --
DROP DATABASE IF EXISTS trabalho_interdiciplinar_mobs;
CREATE DATABASE IF NOT EXISTS trabalho_interdiciplinar_mobs;
USE trabalho_interdiciplinar_mobs;

-- Criar Usuário e Conceder Privilégios --
CREATE USER 'mobs_interdiciplinar1'@'localhost' IDENTIFIED BY 'm0bs@12345';

GRANT ALL PRIVILEGES ON trabalho_interdiciplinar_mobs TO mobs_interdiciplinar1;

-- GRANT SELECT, SHOW VIEW ON trabalho_interdiciplinar_mobs.vw_mobs_maior_vida TO 'mobs_interdiciplinar1'@'localhost'; --

FLUSH PRIVILEGES;

-- Criar Tabelas --
DROP TABLE IF EXISTS Biomas;
CREATE TABLE IF NOT EXISTS Biomas (
	id_bioma INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    dimensao VARCHAR(100),
    categoria VARCHAR(90),
    CHECK (dimensao >= 0)
);

DROP TABLE IF EXISTS Mobs;
CREATE TABLE IF NOT EXISTS Mobs (
	id_mobs INT AUTO_INCREMENT PRIMARY KEY,
    id_bioma INT NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL,
    vida INT,
    tipo ENUM('Passivo','Hostil') NOT NULL,
    CONSTRAINT fk_mob_bioma FOREIGN KEY (id_bioma) REFERENCES Biomas(id_bioma) ON DELETE CASCADE,
    CHECK (vida >= 0)
);

DROP TABLE IF EXISTS Mobspassivos;
CREATE TABLE IF NOT EXISTS Mobspassivos (
	id_mobspassivos INT AUTO_INCREMENT PRIMARY KEY,
    id_mobs INT NOT NULL UNIQUE,
    CONSTRAINT fk_passivo_mob FOREIGN KEY (id_mobs) REFERENCES Mobs(id_mobs)
);

DROP TABLE IF EXISTS Mobshostis;
CREATE TABLE IF NOT EXISTS Mobshostis (
	id_mobshostis INT AUTO_INCREMENT PRIMARY KEY,
    id_mobs INT NOT NULL UNIQUE,
	dano INT NOT NULL,
	CONSTRAINT fk_hostil_mob FOREIGN KEY (id_mobs) REFERENCES Mobs(id_mobs),
    CHECK (dano >= 0)
);

-- Criar View --
CREATE VIEW vw_mobs_maior_vida AS
SELECT nome, vida, tipo
FROM Mobs
WHERE vida > 10;

SELECT * FROM vw_mobs_maior_vida;

-- Criar consulta usando Join --
SELECT 
    Mobs.nome AS nome_do_mob,
    Biomas.nome AS nome_do_bioma
FROM Mobs
JOIN Biomas ON Mobs.id_bioma = Biomas.id_bioma;

-- Criar consulta usando Group by --
SELECT 
    tipo, 
    COUNT(*) AS total_de_tipos 
FROM Mobs
GROUP BY tipo;





       


