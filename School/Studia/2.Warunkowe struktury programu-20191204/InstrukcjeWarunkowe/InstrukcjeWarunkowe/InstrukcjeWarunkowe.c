// InstrukcjeWarunkowe.c
//Autor : Karol Tatar

#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>


int main()
{
	int d, l, k;
	//Wykorzystanie instrukcji switch
	puts("Podaj liczbe : ");
	scanf("%i", &d);
	switch (d) {
	case 1:
		puts("Wybrales liczbe 1");
		break;
	case 2:
		puts("Wybrales liczbe 2");
		break;
	case 3:
		puts("Wybrales liczbe 3");
		break;
	case 4:
		puts("Wybrales liczbe 4");
		break;
	default:
		puts("Wybrales liczbe inna niz z zakresu 1-4");
		break;
	}
	puts("Opusciles fragment kodu dotyczacy instrukcji switch");


	//Wykorzystanie instrukcji if
	puts("Podaj liczbe : ");
	scanf("%i", &l);

	if (l == 1) {
		puts("Wybrales liczbe 1");
	}
	else if (l == 2) {
		puts("Wybrales liczbe 2");
	}
	else if (l == 3) {
		l = 4;
		puts("Wybrales liczbe 3");
	}
	else if (l == 4) {
		puts("Wybrales liczbe 4");
	}
	else {
		puts("Wybrales liczbe inna niz z zakresu 1-4");
	}
	puts("Opusciles fragment kodu dotyczacy instrukcji if");


	//Wykorzystanie operatora trójargumentowego
	puts("Podaj liczbe : ");
	scanf("%i", &k);
	(k == 1) ? puts("Wybrales liczbe 1") : puts("Wybrales liczbe inna niz 1");
	puts("Opusciles fragment kodu dotyczacy operatora trojargumentowego");

	return 0;
}

