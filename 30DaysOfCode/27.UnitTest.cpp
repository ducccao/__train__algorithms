#pragma once
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <string>
#include <set>
#include <cassert>
using namespace std;

// Unit Test

int minimum_index(vector<int> seq)
{
	if (seq.empty())
	{
		throw invalid_argument("Cannot get the minimum value index from an empty sequence");
	}
	int min_index = 0;
	for (int i = 1; i < seq.size(); ++i)
	{
		if (seq[i] < seq[min_index])
		{
			min_index = i;
		}
	}
	return min_index;
}

class TestDataEmptyArray
{
public:
	static vector<int> get_array()
	{
		vector<int> ret{};

		return ret;
	}
};

class TestDataUniqueValues
{
public:
	static vector<int> get_array()
	{
		vector<int> a{1, 2, 3, 4, 5};
		return a;
	}
	static int get_expected_result()
	{
		return 0;
	}
};

class TestDataExactlyTwoDifferentMinimums
{
public:
	static vector<int> get_array()
	{
		// complete this function
		vector<int> ret{1, 1, 3};
		return ret;
	}

	static int get_expected_result()
	{
		// complete this function
		return 0;
	}
};

void TestWithEmptyArray()
{
	try
	{
		auto seq = TestDataEmptyArray::get_array();
		auto result = minimum_index(seq);
	}
	catch (invalid_argument &e)
	{
		return;
	}
	assert(false);
}

void TestWithUniqueValues()
{
	auto seq = TestDataUniqueValues::get_array();
	assert(seq.size() >= 2);

	assert(set<int>(seq.begin(), seq.end()).size() == seq.size());

	auto expected_result = TestDataUniqueValues::get_expected_result();
	auto result = minimum_index(seq);
	assert(result == expected_result);
}

void TestWithExactlyTwoDifferentMinimums()
{
	auto seq = TestDataExactlyTwoDifferentMinimums::get_array();
	assert(seq.size() >= 2);

	auto tmp = seq;
	sort(tmp.begin(), tmp.end());
	//assert(tmp[0] == tmp[1] and (tmp.size() == 2 or tmp[1] < tmp[2]));

	auto expected_result = TestDataExactlyTwoDifferentMinimums::get_expected_result();
	auto result = minimum_index(seq);
	assert(result == expected_result);
}

int main()
{
	TestWithEmptyArray();
	TestWithUniqueValues();
	TestWithExactlyTwoDifferentMinimums();
	cout << "OK" << endl;
	return 0;
}