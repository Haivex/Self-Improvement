-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Czas generowania: 13 Mar 2018, 10:16
-- Wersja serwera: 10.1.9-MariaDB
-- Wersja PHP: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `ogrod`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `dostawcy`
--

CREATE TABLE `dostawcy` (
  `ID_dostawcy` int(11) NOT NULL,
  `nazwa` varchar(30) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `adres` varchar(30) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `miasto` varchar(30) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `wojewodztwo` varchar(30) CHARACTER SET utf8 COLLATE utf8_polish_ci DEFAULT NULL,
  `telefon` varchar(30) CHARACTER SET utf8 COLLATE utf8_polish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `dostawcy`
--

INSERT INTO `dostawcy` (`ID_dostawcy`, `nazwa`, `adres`, `miasto`, `wojewodztwo`, `telefon`) VALUES
(1, 'Ogrodowe', 'Leśna', 'Warszawa', 'maz', '225648556'),
(2, 'Sasanka', 'Morska', 'Puck', 'pomorskie', '47625654632'),
(3, 'Rolnik', 'Glebowa', 'Radom', 'łódzkie', '4236554565'),
(4, 'Uprawiamy', 'Rolnicza', 'Tarnów', 'małopolskie', '6125645665'),
(5, 'Kwiatek', 'Traktorowa', 'Lublin', 'lubelskie', '4665258545');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kategorie`
--

CREATE TABLE `kategorie` (
  `ID_kategorii` int(11) NOT NULL,
  `nazwa` varchar(30) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `opis` text CHARACTER SET utf8 COLLATE utf8_polish_ci
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `kategorie`
--

INSERT INTO `kategorie` (`ID_kategorii`, `nazwa`, `opis`) VALUES
(1, 'cebule', 'Rośliny cebulowe. Wysadzać na wiosnę. Wykopywać po kwitnieniu.'),
(2, 'trawy', 'Odpowiednie do upraw gruntowych'),
(3, 'wodne', 'Odpowiednie do upraw w oczkach wodnych'),
(4, 'słonorośla/sucholubne', 'Odpowiednie do upraw w piaskach lub zasolonych glebach'),
(5, 'drzewa', 'iglaste i liściate'),
(6, 'róże', 'wiele odmian, kolorów i wielkości kwiatu'),
(7, 'rododendrony', 'wymagają mocnych gleb'),
(8, 'pestycydy', 'do pielęgnacji chemicznej. Nietoksyczne!'),
(9, 'krzewy owocowe', 'porzeczki, pigwy, agresty i inne'),
(10, 'narzędzia', 'niezbędne do uprawiania ziemi i pielęgnacji roślin na działce');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `produkty`
--

CREATE TABLE `produkty` (
  `ID_produktu` int(11) NOT NULL,
  `nazwa` varchar(30) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `dostawca_ID` int(11) NOT NULL,
  `kategoria_ID` int(11) NOT NULL,
  `ilosc_na_jedn` int(11) NOT NULL,
  `jedn_na_stanie` int(11) NOT NULL,
  `wyczerpano` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `produkty`
--

INSERT INTO `produkty` (`ID_produktu`, `nazwa`, `dostawca_ID`, `kategoria_ID`, `ilosc_na_jedn`, `jedn_na_stanie`, `wyczerpano`) VALUES
(1, 'tulipan', 2, 1, 15, 16, 0),
(2, 'hiacynt', 3, 1, 10, 18, 0),
(3, 'raygrass', 1, 2, 20, 20, 0),
(4, 'lilie wodne', 3, 3, 3, 31, 0),
(5, 'bylica nadmorska', 5, 4, 5, 5, 0),
(6, 'daglezja', 4, 5, 1, 8, 0),
(7, 'świerk srebrzysty', 2, 5, 2, 6, 0),
(8, 'sosna pospolita', 5, 5, 5, 7, 0),
(9, 'róża herbaciana', 4, 6, 3, 5, 0),
(10, 'róża sztamowa', 3, 6, 4, 5, 0),
(11, 'randalph', 1, 8, 5, 6, 0),
(12, 'porzeczka czarna', 4, 9, 3, 9, 0),
(13, 'agrest zwyczajny', 5, 9, 5, 17, 0),
(14, 'pigwowiec japoński', 3, 9, 4, 6, 0),
(15, 'porzeczka czerwona', 4, 9, 3, 2, 0),
(16, 'aronia', 3, 9, 2, 5, 0),
(17, 'szpadel', 1, 10, 2, 6, 0),
(18, 'widły ogrodnicze', 3, 10, 1, 20, 0),
(19, 'widły gnojne', 5, 10, 3, 4, 0),
(20, 'jabłoń - McIntosh', 2, 5, 3, 4, 0),
(21, 'cebulica', 2, 1, 25, 18, 0),
(22, 'krokus', 3, 1, 10, 68, 0),
(23, 'wimbledon', 1, 2, 20, 210, 0),
(24, 'pałka wodna', 3, 3, 35, 31, 0),
(25, 'piaskownica', 5, 4, 5, 5, 0),
(26, 'grusza', 4, 5, 1, 8, 0),
(27, 'świerk zwyczajny', 2, 5, 32, 96, 0),
(28, 'śliwa', 5, 5, 25, 97, 0),
(29, 'tawuła', 4, 6, 3, 15, 0),
(30, 'róża pnąca', 3, 6, 4, 0, 1),
(31, 'piękny trawnik', 3, 8, 85, 0, 1),
(32, 'porzeczka biała', 4, 9, 3, 9, 0),
(33, 'agrest bezkolcowy', 5, 9, 5, 0, 1),
(34, 'pigwowiec chiński', 3, 9, 4, 6, 0),
(35, 'milin amerykański', 4, 9, 3, 2, 0),
(36, 'thuja', 3, 9, 2, 5, 0),
(37, 'taczka', 1, 10, 2, 6, 0),
(38, 'drabina ogrodowa', 3, 10, 1, 20, 0);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `dostawcy`
--
ALTER TABLE `dostawcy`
  ADD PRIMARY KEY (`ID_dostawcy`);

--
-- Indexes for table `kategorie`
--
ALTER TABLE `kategorie`
  ADD PRIMARY KEY (`ID_kategorii`);

--
-- Indexes for table `produkty`
--
ALTER TABLE `produkty`
  ADD PRIMARY KEY (`ID_produktu`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `dostawcy`
--
ALTER TABLE `dostawcy`
  MODIFY `ID_dostawcy` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT dla tabeli `kategorie`
--
ALTER TABLE `kategorie`
  MODIFY `ID_kategorii` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT dla tabeli `produkty`
--
ALTER TABLE `produkty`
  MODIFY `ID_produktu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
