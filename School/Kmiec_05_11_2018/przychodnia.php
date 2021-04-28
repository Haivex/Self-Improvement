<html>
	<head>
		<meta charset="utf-8">
		<title>Przychodnia</title>
		<link rel="stylesheet" type="text/css" href="przychodnia.css">
	</head>
	<body>
		<section id="baner" name="baner">
			<h1>PRAKTYKA LEKARZA RODZINNEGO</h1>
		</section>
		<section id="lewy" name="lewy">
			<h3>LISTA PACJENTÓW</h3>
			<?php
			$connect = mysqli_connect('localhost','root','','przychodnia');
			
			$query = mysqli_query($connect,"SELECT id, imie, nazwisko FROM `pacjenci`;");
			
			if ($query)
			{
				while ($tab = mysqli_fetch_array($query))
				{
					echo $tab[0] ." ";
					echo $tab[1] ." ";
					echo $tab[2] ." ";
					echo "<br>";					
				}
			}
			mysqli_close($connect);
			?>
			<br><br>
			<form id="formularz" name="formularz" method="post" action="pacjent.php">
				Podaj id: <br>
				<input type="number" name="id" id="id">
				<input type="submit" value="Pokaż dane">
			</form>
			<h3> LEKARZE </h3>
			<ul>
				<li>pn-śr</li>
				<ol>
					<li>Anna Kwiatkowska</li>
					<li>Jan Kowalewski</li>
				</ol>
				<li>czw-pt</li>
				<ol>
					<li>Krzysztof Nowak</li>
				</ol>
			</ul>
		</section>
		<section id="prawy" name="prawy">
			<h2>INFORMACJE SZCZEGÓŁOWE O PACJENCIE</h2>
			<p>Brak wybranego pacjenta</p>
		</section>
		<section id="stopka" name="stopka">
			<p>utworzone przez: 84943242</p>
			<a href="kwerendy.txt">Pobierz plik z kwerendami</a>
		</section>
	</body>
</html>