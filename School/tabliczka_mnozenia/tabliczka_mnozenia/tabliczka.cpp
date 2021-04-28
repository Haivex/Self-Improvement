#define _CRT_SECURE_NO_WARNINGS
#define LENGTH(x) (sizeof(x) /sizeof((x)[0]))
#include <stdio.h>
#include <stdlib.h>
#include <inttypes.h>
#include <string.h>

int main()
{
	int tablica[10][10];
	int wiersze = 5; //max 10
	int kolumny = 6; //max 10
	int poczatkowa_w = 3;
	int poczatkowa_k = 2;

	for (int w=0; w<wiersze; w++)
	{
		printf("%d	", w+poczatkowa_w);
	}
	printf("\n");
	for (int w = 0; w < wiersze; w++)
	{

		printf("%d		", w+kolumny);
		for (int k = 0; k < kolumny; k++)
		{
			tablica[w][k] = (w+poczatkowa_w) * (poczatkowa_k+k);
			printf("%d	", tablica[w][k]);
		}
		printf("\n");
	}

	return 0;
}