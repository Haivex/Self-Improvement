
#define _CRT_SECURE_NO_WARNINGS
#define _USE_MATH_DEFINES
#include <stdio.h>
#include <stdlib.h>
#include <math.h>


int main()
{
	int wybor_koncowy = 0;
	double wynik_koncowy = 0;
	int dzielenie_zero = 0;
	do
	{
			int opcja;
			if (wybor_koncowy == 3)
			{
				printf("Poprzedni wynik: %lf \n", wynik_koncowy);
			}
			puts("Podaj numer dzialania do wykoniania: \n 1 - dodawanie, \n 2 - odejmowanie, \n 3 - mnozenie, \n 4 - dzielenie, \n 5 - modulo, \n 6 - sinus ");
			scanf("%d", &opcja);//pobierz jeden znak z konsoli, & to adres

			//Modulo
			if (opcja == 5)
			{

				int liczba1;
				int liczba2;
				if (wybor_koncowy == 3)
				{
					printf("Jesli poprzedni wynik nie byl liczba calkowita to zostanie do niej uciety\n");
					liczba1 = (int)wynik_koncowy;
				}
				else
				{
					puts("Podaj pierwsza liczbe : ");
					scanf("%d", &liczba1);
				}
				puts("Podaj druga liczbe : ");
				scanf("%d", &liczba2);
				int wynik = liczba1 % liczba2;
				printf("Wynik: %d", wynik);
				wynik_koncowy = wynik;
			}
			
			//Sinus
			else
			{
				;
				if (opcja == 6)
				{
					int jednostka;
					puts("W stopniach czy w radianach? Podaj numer: \n 1 - kat w radianach \n 2 - kat w stopniach");
					scanf("%d", &jednostka);

					double liczba1;

					if (wybor_koncowy == 3)
					{
						liczba1 = wynik_koncowy;
					}
					else
					{
						puts("Podaj liczbe: ");
						scanf("%lf", &liczba1);
					}
					if (jednostka == 2)
					{
						double wynik = sin(liczba1 * (M_PI / 180));
						printf("Wynik: %lf", wynik);
						wynik_koncowy = wynik;
					}
					if (jednostka == 1)
					{
						double wynik = sin(liczba1);
						printf("Wynik: %lf", wynik);
						wynik_koncowy = wynik;
					}
				}
				else
				{
					double liczba1;
					double liczba2;
					
					if (wybor_koncowy == 3)
					{
						liczba1 = wynik_koncowy;
					}
					else
					{
						
						puts("Podaj pierwsza liczbe : ");
						scanf("%lf", &liczba1);
					}
					puts("Podaj druga liczbe : ");
					scanf("%lf", &liczba2);

					//Dodawanie, odejmowanie, mno¿enie,

					if (opcja == 1)
					{
						double wynik = liczba1 + liczba2;
						printf("Wynik: %lf", wynik);
						wynik_koncowy = wynik;
					}
					else if (opcja == 2)
					{
						double wynik = liczba1 - liczba2;
						printf("Wynik: %lf", wynik);
						wynik_koncowy = wynik;
					}
					else if (opcja == 3)
					{
						double wynik = liczba1 * liczba2;
						printf("Wynik: %lf", wynik);
						wynik_koncowy = wynik;
					}


					//Dzielenie

					else if (opcja == 4 && liczba2 != 0)
					{
						double wynik = liczba1 / liczba2;
						printf("Wynik: %lf", wynik);
						wynik_koncowy = wynik;
					}
					else if (opcja == 4 && liczba2 == 0)
					{
						printf("Nie dziel przez zero!");
						dzielenie_zero = 1;
					}
				}
			}
			printf("\nCo zrobic? (wpisz odpowiednia cyfre): ");
			printf("\n1 - wyjsc z programu\n");
			printf("2 - rozpoczac od nowa\n");
			if (dzielenie_zero == 0)
			{
				printf("3 - Zapisac wynik jako pierwsza liczbe \n");
				dzielenie_zero = 0;
			}
			scanf("%d", &wybor_koncowy);
			//system("cls");
	} while (wybor_koncowy!=1);
	return 0;
}

