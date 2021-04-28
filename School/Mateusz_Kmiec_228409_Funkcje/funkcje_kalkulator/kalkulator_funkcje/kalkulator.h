#pragma once
#ifndef KALKULATOR_H
#define KALKULATOR_H

float dodawanie(float a, float b);
float odejmowanie(float a, float b);
float mnozenie(float a, float b);
float dzielenie(float a, float b);
unsigned long long int silnia(int a);
float logarytm(float a);
double sinus(double a, int typ);
int modulo(int a, int b);
float delta(float a, float b, float c);
float pierwiastek1(float a, float b, float c, float delta);
float pierwiastek2(float a, float b, float c, float delta);
#endif