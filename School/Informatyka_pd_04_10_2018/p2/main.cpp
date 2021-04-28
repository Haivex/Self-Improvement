#include <iostream>
#include <stdio.h>
#include <stdio.h> 
/* run this program using the console pauser or add your own getch, system("pause") or input loop */
using namespace std;


// Wykonywanie wszystkich kombinacji o rozmiarze k w tablicy o rozmiarze n
void combinationUtil(int arr[], int n, int r, 
                     int index, int data[], int i); 
  
// Wypisywanie wszystkich kombinacjo o rozmiarze k w tablicy arr[] o rozmiarze n 
void printCombination(int arr[], int n, int r) 
{ 
    // Tymczasowe przechowywanie wszystkich kombinacji z tablicy
    int data[r]; 
  
   // Wykonywanie wszystkich kombinacji z tablicy data[]
    combinationUtil(arr, n, r, 0, data, 0); 
} 
  
/* arr[]  ---> Tablica, zbior n
   n      ---> Ilosc elementow w zbiorze n 
   r      ---> Ilosc elementow w podzbiorze k
   index  ---> Aktualna pozycjia w petli w tablicy data[] 
   data[] ---> Tymczasowa zmienna przechowujaca aktualna kombinacje
   i      ---> Pozycja elementu w tablicy arr[]     */
void combinationUtil(int arr[], int n, int r, int index, 
                     int data[], int i) 
{ 
    // Wypisywanie aktualnej kombinacji
    if (index == r) { 
        for (int j = 0; j < r; j++) 
            printf("%d ", data[j]); 
        printf("\n"); 
        return; 
    } 
  
    // Powrot gdy wszystkie kombinacje w data[] zostaly wypisane 
    if (i >= n) 
        return; 
  
    // Wpisywanie aktualnej kombinacji do nastêpnego miejsca
    data[index] = arr[i]; 
    combinationUtil(arr, n, r, index + 1, data, i + 1); 
  
    // Podmienianie aktualnej kombinacji
    combinationUtil(arr, n, r, index, data, i + 1); 
} 
  
// Podawanie wlasnych danych(n-elementowy zbior,k-elementowe podzbiory)
int main() 
{ 
	
	int r;
	int n;
	cout<<"Podaj n: ";
	cin>>n;
	int i1;
	int arr[n];
	cout<<"Podaj k: ";
	cin>>r;
	arr[0]=1;
	for (i1=1;i1<n-1;i1++)
{
	arr[i1] = arr[i1-1]+1;
}
	arr[n-1]=n;
	cout<<"\n"<<"Podzbiory:"<<"\n";
    printCombination(arr, n, r); 
    return 0; 
} 

	

