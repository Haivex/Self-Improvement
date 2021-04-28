<?php
		$klasa = $_POST["wybrana_wartosc"];
		
		$connect = mysqli_connect("localhost","root","","szkola");
		$query = mysqli_query($connect, "SELECT uczniowie.imie, uczniowie.nazwisko, klasy.nazwa FROM `uczniowie` JOIN klasy ON uczniowie.klasa_nr=klasy.nr_kl WHERE uczniowie.klasa_nr=".$klasa);
		if ($query)
		{
			echo "<table border=1>";
			echo "<tr> <td> Imie </td> <td> Nazwisko </td> <td> Klasa </td> </tr>";
			while ($tab = mysqli_fetch_array($query))
			{
				echo "<tr><td>".$tab[0]."</td><td>".$tab[1]."</td><td> ".$tab[2]."</td></tr>";
			}
			echo "</table>";	
		}
	?>