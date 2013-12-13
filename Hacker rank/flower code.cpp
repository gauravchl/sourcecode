#include <stdio.h>
int main(){

//Helpers for input/output
  int i, N, K,j,m,l,temp,result;
    m=0;
  int C[102];
  
  scanf("%d %d", &N, &K);
  for(i=0; i<N; i++){
    scanf("%d", &(C[i]));
  }
  for(i=0;i<N-1;i++)
    {
        for(j=i;j<N-1;j++)
        {
            if(C[i]<C[j+1])
            {
                
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
  for( i=0;i<l;i++)
  {
      for( j=0;j<K;j++)
      {
          result=result+(C[m]*(i+1));
          m++;
          if(m==N)
          {
              break;
          }
      }
      
  }

  
  printf("%d\n", result);

}