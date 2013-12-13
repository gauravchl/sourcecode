//SwappingDigits 105.83 fail systest
#include <cmath> 
#include <cstdio> 
#include <vector> 
#include <iostream> 
#include <algorithm> 
#include <string> 
using namespace std; 

 class SwappingDigits 
{ 
  public: string minNumber(string num) 
  {  int pos=0;   
    for(int i=0;i<num.length()-1;i++) 
    {  char x=num[i];   
      if(i==0){ 
      for(int j=i+1;j<num.length();j++){   
      if(num[j]<=x ){ 
      if(num[j]!='0'){ 
      x=num[j]; 
      pos=j; 
      }}}} 
      else{ 
      for(int j=i+1;j<num.length();j++){   
      if(num[j]<=x){ x=num[j]; 
      pos=j; 
      }}} 
      if(pos!=0){ 
        swap(num[i],num[pos]); 
      return num; 
      } 
    } 
       
  } 
};