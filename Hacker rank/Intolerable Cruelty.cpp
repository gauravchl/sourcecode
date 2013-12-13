#include <iostream>
using namespace std;

int main()
{
	int N, K;
	int C[N];
  int l;
  int m=0;
  int result;

	cin >> N >> K;
	for(int i = 0; i < N; i++)
		cin >> C[i];
	
	for(int i=0;i<N-1;i++)
    {
        for(int j=i;j<N-1;j++)
        {
            if(C[i]<C[j+1])
            {
                int temp;
                temp=C[i];
                C[i]=C[j+1];
                C[j+1]=temp;
            }
         
        }
    }
  if(N%K==0)
  {
      l=(N/K);
  }
  else
  {
      l=(N/K)+1;
  }       
  for(int i=0;i<l;i++)
  {
      for(int j=0;j<K;j++)
      {
          result=result+(C[m]*(i+1));
          m++;
          if(m==N)
          {
              break;
          }
      }
      
  }
    
  cout << result << "\n";
	
	return 0;
}
