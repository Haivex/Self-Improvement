
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";




CREATE TABLE `dane_osobowe` (
  `nr_u` int(11) NOT NULL,
  `Imie_m` text NOT NULL,
  `imie_o` text NOT NULL,
  `adres` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



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





CREATE TABLE `klasy` (
  `nr_kl` int(11) NOT NULL,
  `nazwa` text NOT NULL,
  `wychowawca_nr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO `klasy` (`nr_kl`, `nazwa`, `wychowawca_nr`) VALUES
(1, 'TiA', 2),
(2, 'TiC', 3),
(3, 'TiB', 1);





CREATE TABLE `nauczyciele` (
  `nr_n` int(11) NOT NULL,
  `nazwisko` text NOT NULL,
  `przedmiot_nr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO `nauczyciele` (`nr_n`, `nazwisko`, `przedmiot_nr`) VALUES
(1, 'Tamara', 4),
(2, 'Daszut', 2),
(3, 'Wlodarczyk', 1),
(4, 'Zasina', 3);



CREATE TABLE `przedmioty` (
  `nr_p` int(11) NOT NULL,
  `nazwa` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO `przedmioty` (`nr_p`, `nazwa`) VALUES
(1, 'j. polski'),
(2, 'WF'),
(3, 'j. angielski'),
(4, 'matematyka'),
(5, 'historia');



CREATE TABLE `uczniowie` (
  `nr_u` int(11) NOT NULL,
  `imie` text NOT NULL,
  `nazwisko` text NOT NULL,
  `klasa_nr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



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


ALTER TABLE `dane_osobowe`
  ADD PRIMARY KEY (`nr_u`);


ALTER TABLE `klasy`
  ADD PRIMARY KEY (`nr_kl`);


ALTER TABLE `nauczyciele`
  ADD PRIMARY KEY (`nr_n`);


ALTER TABLE `przedmioty`
  ADD PRIMARY KEY (`nr_p`);


ALTER TABLE `uczniowie`
  ADD PRIMARY KEY (`nr_u`);




ALTER TABLE `dane_osobowe`
  MODIFY `nr_u` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

ALTER TABLE `klasy`
  MODIFY `nr_kl` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `nauczyciele`
  MODIFY `nr_n` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

ALTER TABLE `przedmioty`
  MODIFY `nr_p` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

ALTER TABLE `uczniowie`
  MODIFY `nr_u` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

