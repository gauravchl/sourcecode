
#include <iostream>
#include <vector>
#include <conio.h>


using namespace std;


//prob 250 points for 110.25
class LittleElephantAndDouble
{
  public:string result;
  public :int l,m,n;
    public :string getAnswer(vector <int> A)
    {
        result="YES";
        l=A.size();
        m=A[0];
        for(int i=0;i<l;i++)
        {
            if(m<A[i])
            {
                m=A[i];

            }
        }

        for(int i=0;i<l;i++)
        {
            while(A[i]<m)
            {
                A[i]=A[i]*2;
            }
            if(A[i]!=m)
            {
                return "NO";

            }
        }
        return "YES";


    };

};

class LittleElephantAndString
{
    public :int l;
    public:char z;
    public :int getNumber(string A, string B)
    {
       l= A.length();
     for(int i=0;i<l;i++)
     {
         z=A[i];

     }

return l;


    };

};


int main()
{
    LittleElephantAndString obj;
    cout<<obj.getNumber("QAA","QQQ");
    return 0;
}
