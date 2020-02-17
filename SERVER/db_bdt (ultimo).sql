-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Feb 17, 2020 alle 16:17
-- Versione del server: 10.1.34-MariaDB
-- Versione PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_bdt`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `utente`
--

CREATE TABLE `utente` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `cognome` varchar(50) NOT NULL,
  `data_nascita` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `sesso` varchar(50) NOT NULL,
  `titolo_studio` varchar(50) NOT NULL,
  `esperienze_lavorative` varchar(500) NOT NULL,
  `conoscenze_linguistiche` varchar(200) NOT NULL,
  `competenze` varchar(500) NOT NULL,
  `password` varchar(50) NOT NULL,
  `cap` int(5) NOT NULL,
  `citta` varchar(100) NOT NULL,
  `provincia` varchar(100) NOT NULL,
  `indirizzo` varchar(100) NOT NULL,
  `regione` varchar(100) NOT NULL,
  `nazione` varchar(100) NOT NULL,
  `saldo_tempo` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `utente`
--

INSERT INTO `utente` (`id`, `nome`, `cognome`, `data_nascita`, `email`, `tel`, `sesso`, `titolo_studio`, `esperienze_lavorative`, `conoscenze_linguistiche`, `competenze`, `password`, `cap`, `citta`, `provincia`, `indirizzo`, `regione`, `nazione`, `saldo_tempo`) VALUES
(1, 'Mario', 'Rossi', '06-06-1906', 'mario.rossi@gmail.com', '+39 324569871225', 'f', 'Laurea Magistrale in Informatica', 'Animatore\r\n- Cameriere', 'Inglese liv. B2 -\r\nFrancese liv. A1', 'Conoscenza linguaggi di programmazione: Java, C++, PHP, Javascript', 'prova', 46512, 'Padula', 'Salerno', 'Via G.V. Quaranta', 'Campania', 'Italia', 300),
(2, 'Pinco', 'Pallino', '1986-12-12', 'pincopallino@gmail.com', '+39 78456123', 'm', 'Diploma Tecnico ind. Meccanica', 'Capo officina Audi', 'Italiano', 'Conoscenze Meccaniche ed elettroniche motori autovetture audi', 'prova', 78456, 'Napoli', 'NA', 'via Roma n.75', 'Campania', 'Italia', 240),
(3, 'a', 'a', '--', 'a', '', 'm', 'a', 'a', 'a', 'a', 'a', 0, 'a', 'a', 'a', 'a', 'a', 0),
(4, 'Daniele', 'Calabrò', '05--05-1989', 'daniele.calabro@gmail.com', '123456789', 'm', 'Laurea Triennale in Informatica', 'Insegnante Scuola Superiori', 'Italiano\r\nInglese   B1\r\nFrancese  A1', '', 'prova', 84081, 'Baronissi', 'SA', 'Via Roma n.45', 'Campania', 'Italia', 300),
(5, 'Giovanni', 'Cammarano', '04-06-1996', 'giovanni.cammarano@gmail.com', '123456789', 'm', 'Laurea Triennale in Informatica', '', 'Italiano \r\nInglese C1', '', 'prova', 84100, 'Padula', 'SA', 'Via delle Calabrie n.34', 'Campania', 'Italia', 240),
(6, 'Diletta', 'Leotta', '16-08-1991', 'diletta.leotta@gmail.com', '123456789', 'm', '', 'Giornalista sportiva', 'Italiano\r\nInglese', '', 'prova', 100, 'Milano', 'MI', 'via Mediaset n.32', 'Lazio', 'Italia', 120);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `utente`
--
ALTER TABLE `utente`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `utente`
--
ALTER TABLE `utente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
