
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include "kalkulator.h"



int opcja = 0;
float a = 0;
float b = 0;
float c = 0;
float wynik = 0;
int wybor = 0;


int main(void) {
	
	
	do {
		printf("Podaj numer dzialania do zrobienia: \n");
		printf("1 - dodawanie,\n");
		printf("2 - odejmowanie,\n");
		printf("3 - mnozenie,\n");
		printf("4 - dzielenie,\n");
		printf("5 - pierwiastki trojmianu,\n");
		printf("6 - modulo,\n");
		printf("7 - silnia,\n");
		printf("8 - logarytm,\n");
		printf("9 - sinus\n");
		scanf("%d", &opcja);


		if (opcja >=1 && opcja<=4)
		{
			if (wybor != 3)
			{
				printf("Podaj pierwsza liczbe\n");
				scanf("%g", &a);
			}
			printf("Podaj druga liczbe\n");
			scanf("%g", &b);
		}
		//Dodawanie
		if (opcja == 1)
		{
			wynik = dodawanie(a, b);
			printf("Wynik: %g", wynik);
			printf("\n");
		}
		//Odejmowanie
		if (opcja == 2)
		{
			wynik = odejmowanie(a, b);
			printf("Wynik: %g", wynik);
			printf("\n");
		}
		//Mnozenie
		if (opcja == 3)
		{
			wynik = mnozenie(a, b);
			printf("Wynik: %g", wynik);
			printf("\n");
		}
		//Dzielenie
		if (opcja == 4)
		{
			wynik = dzielenie(a, b);
			if (b != 0)
			{
				printf("Wynik: %g", wynik);
			}
			printf("\n");
		}
		//Pierwiastki trojmianu
		if (opcja == 5)
		{
			if (wybor != 3)
			{
				printf("Podaj wspolczynnik a\n");
				scanf("%g", &a);
			}
			printf("Podaj wspolczynnik b\n");
			scanf("%g", &b);
			printf("Podaj wspolczynnik c\n");
			scanf("%g", &c);

			float wartosc_delta = delta(a, b, c);
			
			if (wartosc_delta == 0)
			{
				wynik = pierwiastek1(a, b, c, wartosc_delta);
				printf("Pierwiastek x: %f \n", &wynik);
			}
			else if (wartosc_delta < 0)
			{
				printf("Brak pierwiastkow");
			}
			else
			{
				wynik = pierwiastek1(a, b, c, wartosc_delta);
				float wynik2 = pierwiastek2(a, b, c, wartosc_delta);
				printf("Pierwiastek x1: %f \n", &wynik);
				printf("Pierwiastek x2: %f \n", &wynik2);
			}
			opcja = 4;
			b = 0;
			printf("\n");
		}
		//Modulo
		if (opcja == 6)
		{
			if (wybor != 3)
			{
				printf("Podaj liczbe a\n");
				scanf("%g", &a);
			}
			printf("Podaj liczbe b\n");
			scanf("%g", &b);
			wynik = modulo(a, b);
			printf("Wynik: %g", wynik);
			printf("\n");
		}
		//Silnia
		if (opcja == 7)
		{
			if (wybor != 3)
			{
				printf("Podaj liczbe\n");
				scanf("%g", &a);
			}
			wynik = silnia(a);
			if (a > 0)
			{
				printf("Wynik: %g", wynik);
			}
			if (a < 0)
			{
				opcja = 4;
				b = 0;
			}
			printf("\n");
		}
		//Logarytm naturalny
		if (opcja == 8)
		{
			if (wybor != 3)
			{
				printf("Podaj liczbe\n");
				scanf("%g", &a);
			}
			wynik = logarytm(a);
			if (a > 0)
			{
				printf("Wynik: %g", wynik);
			}
			else
			{
				b = 0;
				opcja = 4;
			}
			printf("\n");
		}
		//Sinus
		if (opcja == 9)
		{
			double kat;
			double wynik_s = 0;
			int sinus_typ = 0;
			printf("W stopniach czy radianach podaj numer: \n");
			printf("1 - stopnie  \n");
			printf("2 - radiany  \n");
			scanf("%d", &sinus_typ);
			kat = wynik;
			if (wybor != 3)
			{
				printf("Podaj liczbe\n");
				scanf("%lf", &kat);
			}
			wynik_s = sinus(kat, sinus_typ);
			printf("Wynik: %lf", wynik_s);
			printf("\n");
		}

		printf("Co zrobic? Wybierz numer: \n");
		printf("1 - Zaczac od nowa\n");
		printf("2 - Wyjsc z programu\n");
		if (!(opcja == 4 && b == 0))
		{
			printf("3 - Zapisac poprzedni wynik\n");
		}
		scanf("%d", &wybor);

		if (wybor == 3)
		{
			printf("Poprzedni wynik: %g \n", wynik);
			a = wynik;
		}

	} while (wybor!=2);

	//sprawdzenie czy silnia, modulo sa calkowite /* */ 

	return 0;
}

