#pragma once
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <string>
using namespace std;

class Difference
{

private:
    vector<int> elements;

public:
    Difference(vector<int> a)
    {

        for (int i = 0; i < a.size(); i++)
        {
            this->elements.push_back(a[i]);
        }
    }

public:
    vector<int> BubbleSort(vector<int> &a)
    {
        for (int i = a.size() - 1; i > 0; i--)
        {
            for (int j = 0; j < i; j++)
            {
                if (a[j] > a[j + 1])
                {
                    int temp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = temp;
                }
            }
        }
        return a;
    }

public:
    int maximumDifference;
    void log()
    {
        for (int i = 0; i < this->elements.size(); i++)
        {
            cout << elements[i] << " ";
        }
    }
    void logStuff(vector<int> a)
    {
        for (int i = 0; i < a.size(); ++i)
            cout << a[i] << " ";
    }

public:
    void computeDifference()
    {
        vector<int> ret;
        for (int i = 0; i < this->elements.size(); ++i)
        {
            for (int j = i + 1; j < this->elements.size(); ++j)
            {
                ret.push_back(abs(this->elements[i] - this->elements[j]));
            }
        }

        ret = BubbleSort(ret);

        this->maximumDifference = ret[ret.size() - 1];
    }
};

int main()
{
    int n;
    cin >> n;

    vector<int> a;

    for (int i = 0; i < n; i++)

    {
        int e;
        cin >> e;
        a.push_back(e);
    }

    Difference d(a);
    //d.log();

    d.computeDifference();

    cout << d.maximumDifference;

    return 0;
}