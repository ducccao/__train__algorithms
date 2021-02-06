#pragma once
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <string>
using namespace std;

template <typename T>
void printArray(vector<T> a)
{
    for (int i = 0; i < a.size(); ++i)
        cout << a[i] << endl;
    return;
}

template <typename T>
T myMax(T x, T y)
{
    return x > y ? x : y;
}

int main()
{
    int n;

    cin >> n;
    vector<int> int_vector(n);
    for (int i = 0; i < n; ++i)
    {
        int vl;
        cin >> vl;
        int_vector[i] = vl;
    }

    cin >> n;
    vector<string> str_vt(n);
    for (int i = 0; i < n; ++i)
    {
        string vl;
        cin >> vl;
        str_vt[i] = vl;
    }

    printArray<int>(int_vector);
    printArray<string>(str_vt);

    return 0;
}