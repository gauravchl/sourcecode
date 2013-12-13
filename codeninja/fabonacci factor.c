#include <iostream>

using namespace std;


uint64_t t1,t2;
int main()
{
   uint64_t n,d,i,c,t,m,t_size;


   cin>>t;
   int a[t];
   for(int i=0;i<t;i++)
    cin>>a[i];

   for(m=0;m<t;m++)
   {
    i=3;
    t1=1;
    t2=1;
    c=1;
    while(1)
    {
        //calculating next fabonacci
        n=t1+t2;
        t1=t2;
        t2=n;
        //


        for(uint64_t j=2;j<=n/2 &&j<=a[m]/2;j++)
        {
            if(n%j==0)
            {
                if(a[m]%j==0)
                {
                    d=j;
                    c=2;
                    break;
                }
            }
        }
        if(c==2)
        break;

        if(a[m]%n==0)
        {
            d=n;
            break;
        }
        if(n%a[m]==0)
        {
            d=a[m];
            break;

        }




    }
    cout<<n<<" "<<d<<endl;

   }
    return 0;
}
