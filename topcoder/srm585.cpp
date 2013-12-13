
// LISNumberDivTwo 135.48
#include<iostream> 
#include <vector> 


using namespace std; 

class LISNumberDivTwo 
{ 
  public : int result,l; 
   public:int calculate(vector <int> seq){ 
       result=1;l=seq.size(); 
        for(int i=0;i<l-1;i++){ 
        if(seq[i]>=seq[i+1]){result++;} 
     }return result; 
    } 
};