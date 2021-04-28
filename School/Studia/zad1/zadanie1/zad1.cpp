
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>



int main(void) {

	int wiersze;
	int kolumny = 0;
	printf("Podaj liczbê wierszy: ");
	scanf("%d", &wiersze);
	int i = 0;
	while (i<wiersze)
	{
		kolumny++;
		for (int j = 1; j<=kolumny; j++)
		{
			(j % 2 != 0) ? printf("*") : 1==1;
			(j % 2 == 0) ? printf("+") : 1==1;
		}
		printf("\n");
		i++;
	}
	
}

