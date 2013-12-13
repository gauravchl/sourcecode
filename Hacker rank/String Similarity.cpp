#include <iostream>
using namespace std;
int main()
{ int n,x;
  cin>>n;
  if(n>10 ||n<1){}
  else{
        char c[n][100000];
        int result[n];
        for(int i=0;i<n;i++)
         cin>>c[i];
        

        
    
       for(int k=0;k<n;k++)
       { result[k]=0;
         for(int i=0;c[k][i]!=NULL;i++)
         { x=0;
           for(int j=i;c[k][j]!=NULL;j++)
           {  if(c[k][j]==c[k][x]){result[k]++;x++;}
              else{break;}
           }
         }
       }
       
      for(int i=0;i<n;i++)
        cout<<result[i]<<endl;
       
      }

      return 0;

}
