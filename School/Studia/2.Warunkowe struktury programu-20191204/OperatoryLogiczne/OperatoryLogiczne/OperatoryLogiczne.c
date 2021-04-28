// OperatoryLogiczne.c 
//Autor : Karol Tatar

#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>


int main()
{
	//&& logiczny and
	//|| logiczny or
	//== znak równości
	//!= różne od
	// = znak przypisania
	//& bajtowy and
	//| bajtowy or

	char c;
	int i;
	puts("Podaj jeden znak (litere): ");//Wyswietl tę linie takstu
	scanf("%c", &c);//pobierz jeden znak z konsoli, & to adres
	puts("Podaj liczbe : ");//Wyswietl tę linie tekstu
	scanf("%i", &i);// pobierz liczbę z konsoli

	if (c == 'A' && (i >= 0 && i <= 10)) {
		puts("Podales litere a oraz cyfre z zakresu 0-10");
	}
	else if (c == 'b' && (i >= 10 && i <= 20)) {
		puts("Podales litere b oraz cyfre z zakresu 10-20");
	}
	else if (c == 'd' || c == 'h' || c == 'm') {
		puts("Podales litere b oraz cyfre z zakresu 10-20");
	}
	else if (c != 'q') {
		puts("Podales litere rozna od q");
	}
	else {
		printf("Podales znak %c oraz liczbe %i\n", c, i);
	}
	return 0;
}

