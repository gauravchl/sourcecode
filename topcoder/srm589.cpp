
#include <string>

using namespace std;

class GooseTattarrattatDiv2
{	int l,p,f;
	public: int getmin(string s)
	{p=1;f=1;
		l=s.length();
		for(int i=0;i<l-1;i++)
		{	if(s[i]!='\0')
			{
			p=1;
			for(int j=i+1;j<l;j++)
			{
				if(s[i]==s[j])
				{
					s[j]='\0';
					p++;
				}
			}
			if(p>f)
			{f=p;}
			}
		}
		return l-f;
	}

};


