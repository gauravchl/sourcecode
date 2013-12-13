#include<iostream>
#include <vector>
#include<conio.h>

using namespace std;


//prob 250 points for 122.25
class PrimalUnlicensedCreatures
{
  public:int result=0;
    public :int maxWins(int initialLevel, vector <int> grezPower)
    {
        for(int i=0;i<grezPower.size()-1;i++)
        {
            for(int j=i+1;j<grezPower.size();j++)
            {
                if(grezPower[i]>grezPower[j])
                {
                    swap(grezPower[i],grezPower[j]);
                }
            }

        }

        for(int i=0;i<grezPower.size();i++)
        {
            if(initialLevel>grezPower[i])
            {
                initialLevel=initialLevel+(grezPower[i]/2);
                result++;
            }
        }

        return result;
    }

};

