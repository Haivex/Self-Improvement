-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Czas generowania: 01 Sty 2018, 10:49
-- Wersja serwera: 5.6.26
-- Wersja PHP: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `szkola`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `dane_osobowe`
--

CREATE TABLE IF NOT EXISTS `dane_osobowe` (
  `nr_u` int(11) NOT NULL,
  `Imie_m` text NOT NULL,
  `imie_o` text NOT NULL,
  `adres` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `dane_osobowe`
--

INSERT INTO `dane_osobowe` (`nr_u`, `Imie_m`, `imie_o`, `adres`) VALUES
(1, 'Anna', 'Tomasz', 'Wiejska 2'),
(2, 'Olga', 'Piotr', 'Blotna 5'),
(3, 'Ewa', 'Piotr', 'Wilenska 2'),
(4, 'Krystyna', 'Andrzej', 'Krzywa 25'),
(5, 'Teresa', 'Stefan', 'Prosta 65'),
(6, 'Grazyna', 'Jakub', 'Japonska 19'),
(7, 'Ryszarda', 'Jan', 'Ludowa 12'),
(8, 'Genowefa', 'Zygmunt', 'Wilenska 52'),
(9, 'Leokadia', 'Zbigniew', 'Pochyla 41'),
(10, 'Czeslawa', 'Kazimerz', 'Mokra 59'),
(11, 'Grazyna', 'Patryk', 'Chinska 52'),
(12, 'Natalia', 'Maciej', 'Lodowa 27'),
(13, 'Janina', 'Jan', 'Wakacyjna 2'),
(14, 'Milena', 'Krzysztof', 'Feryjna 25'),
(15, 'Lucyna', 'Dariusz', 'Blotna 58'),
(16, 'Danuta', 'Jakub', 'Czeska 15'),
(17, 'Elwira', 'Jan', 'Noakowskiego 12'),
(18, 'Malwina', 'Damian', 'Niemiecka 32'),
(19, 'Sylwia', 'Andrzej', 'Francuska 25');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `klasy`
--

CREATE TABLE IF NOT EXISTS `klasy` (
  `nr_kl` int(11) NOT NULL,
  `nazwa` text NOT NULL,
  `wychowawca_nr` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `klasy`
--

INSERT INTO `klasy` (`nr_kl`, `nazwa`, `wychowawca_nr`) VALUES
(1, 'TiA', 2),
(2, 'TiC', 3),
(3, 'TiB', 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `nauczyciele`
--

CREATE TABLE IF NOT EXISTS `nauczyciele` (
  `nr_n` int(11) NOT NULL,
  `nazwisko` text NOT NULL,
  `przedmiot_nr` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `nauczyciele`
--

INSERT INTO `nauczyciele` (`nr_n`, `nazwisko`, `przedmiot_nr`) VALUES
(1, 'Tamara', 4),
(2, 'Daszut', 2),
(3, 'Wlodarczyk', 1),
(4, 'Zasina', 3);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `przedmioty`
--

CREATE TABLE IF NOT EXISTS `przedmioty` (
  `nr_p` int(11) NOT NULL,
  `nazwa` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `przedmioty`
--

INSERT INTO `przedmioty` (`nr_p`, `nazwa`) VALUES
(1, 'j. polski'),
(2, 'WF'),
(3, 'j. angielski'),
(4, 'matematyka');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uczniowie`
--

CREATE TABLE IF NOT EXISTS `uczniowie` (
  `nr_u` int(11) NOT NULL,
  `imie` text NOT NULL,
  `nazwisko` text NOT NULL,
  `klasa_nr` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `uczniowie`
--

INSERT INTO `uczniowie` (`nr_u`, `imie`, `nazwisko`, `klasa_nr`) VALUES
(1, 'Adam', 'Zawada', 1),
(2, 'Kazimierz', 'Kulig', 1),
(3, 'Braian', 'Bury', 1),
(4, 'Celina', 'Dembska', 1),
(5, 'Stefan', 'Jastrzab', 2),
(6, 'Feliks', 'Chudy', 2),
(7, 'Danuta', 'Nogat', 2),
(8, 'Tymoteusz', 'Just', 3),
(9, 'Bernard', 'Zabawny', 3),
(10, 'Wieslaw', 'Krasny', 3),
(11, 'Henryk', 'Dobry', 3),
(12, 'Tobiasz', 'Cichy', 1),
(13, 'Robert', 'Mokry', 3),
(14, 'Franciszek', 'Waleczny', 3),
(15, 'Piotr', 'Fajny', 2),
(16, 'Sylwester', 'Kaminski', 1),
(17, 'Michal', 'Szybki', 3),
(18, 'Tomasz', 'Filut', 2),
(19, 'Damian', 'Walek', 2);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `dane_osobowe`
--
ALTER TABLE `dane_osobowe`
  ADD PRIMARY KEY (`nr_u`);

--
-- Indexes for table `klasy`
--
ALTER TABLE `klasy`
  ADD PRIMARY KEY (`nr_kl`);

--
-- Indexes for table `nauczyciele`
--
ALTER TABLE `nauczyciele`
  ADD PRIMARY KEY (`nr_n`);

--
-- Indexes for table `przedmioty`
--
ALTER TABLE `przedmioty`
  ADD PRIMARY KEY (`nr_p`);

--
-- Indexes for table `uczniowie`
--
ALTER TABLE `uczniowie`
  ADD PRIMARY KEY (`nr_u`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `dane_osobowe`
--
ALTER TABLE `dane_osobowe`
  MODIFY `nr_u` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT dla tabeli `klasy`
--
ALTER TABLE `klasy`
  MODIFY `nr_kl` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT dla tabeli `nauczyciele`
--
ALTER TABLE `nauczyciele`
  MODIFY `nr_n` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT dla tabeli `przedmioty`
--
ALTER TABLE `przedmioty`
  MODIFY `nr_p` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT dla tabeli `uczniowie`
--
ALTER TABLE `uczniowie`
  MODIFY `nr_u` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
