#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main()
{
	fstream plik;
	string a;
	int l;
	bool b = false;
	plik.open("przed.txt", ios::in);
	fstream po;
	po.open("po.txt", ios::out);
	po << "const data = [\n"; //2019-01-06,7735.89,7909.45,7468.11,7740.85,9025
	while (getline(plik, a)) //[Date.parse('2019-01-02'),1.25,1.29,1.16,1.22]
	{
		a.erase(10,1);
		l = a.find_last_of(',');
		a.erase(l, a.size()-l);
		a.insert(10, "')");
		a.insert(0, "[Date.parse('");
		a.insert(a.size(), "]");
		if (b == true) a.insert(0, ",");
		po << a << "\n";
		b = true;
	}
	po << "]";
	plik.close();
	po.close();
    cout << "Wykonano.";
	return 0;
}