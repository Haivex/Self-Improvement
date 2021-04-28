#define _USE_MATH_DEFINES
#include "kalkulator.h"
#include <math.h>

float dodawanie(float a, float b)
{
	return a + b;
}

float odejmowanie(float a, float b)
{
	return a - b;
}

float mnozenie(float a, float b)
{
	return a * b;
}

float dzielenie(float a, float b)
{
	if (b != 0)
	{
		return a / b;
	}
	else
	{
		printf("Nie dziel przez zero!");
	}
}

float delta(float a, float b, float c)
{
	float wartosc_delta = (b * b) - (4 * a * c);
	return wartosc_delta;
}

float pierwiastek1(float a, float b, float c, float delta)
{
	float x1 = ((-1 * b) + sqrt(delta)) / (2 * a);

	return x1;
}

float pierwiastek2(float a, float b, float c, float delta)
{
	float x2 = ((-1 * b) - sqrt(delta)) / (2 * a);
	return x2;
}

unsigned long long int silnia(int a)
{
	if (a < 0)
	{
		printf("Mozna podawac tylko liczby naturalne");
	}
	else
	{
		unsigned long long int wynik = 1;
		for (int i = a; i >= 1; i--)
		{
			wynik *= i;
		}
		return wynik;
	}
}

float logarytm(float a)
{
	if (a > 0)
	{
		return log(a);
	}
	else
	{
		printf("Mozna logarytmowac tylko liczby dodatnie");
	}
}

int modulo(int a, int b)
{
	return a % b;
}


double sinus(double a, int typ)
{
	if (typ == 1)
	{
		double stopnie = sin(a * (M_PI / 180));
		return stopnie;
	}
	if (typ == 2)
	{
		return sin(a);
	}
}