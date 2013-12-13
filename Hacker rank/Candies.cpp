#include <iostream>
using namespace std;

int main()
{
  int n,i=0,x,result=0,ip=0,prx=0;
  int sumn(int);
  cin>>n;
  if(n>100000){}
  else
  {
    int a[n];
    for(int i=0;i<n;i++)
    {
      cin>>a[i];
      if(a[i]>100000)
        goto l1;
    }
  
  
  while(i<n-1)
  {
    x=0;
    if(a[i]<a[i+1])
    {
       while(a[i]<a[i+1]&&i<n-1)
       {
		    x++;i++;
       }
	     result=result+sumn(x+1);
	     ip=1;
	     prx=x;
	  }
    else
    {
      if(a[i]==a[i+1])
      {
        while(a[i]==a[i+1]&&i<n-1)
        {
		      x++;i++;
        }
	      if(ip==0)
        x=x+1;
	      if(i==n-1)
        {
          result=result+x;
        }
        else
        {
          result=result+(x-1);
        }
        ip=2;
	  
      }
    else
    {
      while(a[i]>a[i+1]&&i<n-1)
      {
        x++;i++;
      }

      if(ip==1)
      {
        if(prx<x)
          {
            if((i==(n-1))||a[i+1]==a[i])
              {
                result=result+sumn(x+1)-(prx+1);
              }
            else
              {
                result=result+sumn(x+1)-1-(prx+1);
              }
          }
          else
          {
            if((i==(n-1))||a[i+1]==a[i])
              {
                result=result+sumn(x);
              }
            else
              {
                result=result+sumn(x)-1;
              }
          }
     }
    else
      {
        if((i==(n-1))||a[i+1]==a[i])
          {
            result=result+sumn(x+1);
          }
        else
          {
            result=result+sumn(x+1)-1;
          }
      }
      ip=3;
       
      }
    }
  }
}
cout<<result;
l1:
return 0;
}


int sumn(int x)
{ 
    int sum=0;
    for (int i=1;i<=x;i++)
      sum=sum+i;
        
    return(sum);

}
