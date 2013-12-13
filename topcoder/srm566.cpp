//PenguinTiles 97.95

#include <iostream> 
#include <string> 
#include <vector> 
using namespace std; 


class PenguinTiles 
{ 
    int r,c,temp; 
       public: int minMoves(vector <string> tiles) 

        {   temp=2; 
            r=tiles.size(); 
            c=tiles[0].size(); 
            if(tiles[r-1][c-1]=='.') 
            {return 0; 
            } 
            else 
            { 
                for(int i=0;i<c;i++) 
                { 
                    if(tiles[r-1][i]=='.') 
                    { 
                        temp=1; 
                       goto q1; 
                    } 
                } 
                for(int i=0;i<r;i++) 
                { 
                    if(tiles[i][c-1]=='.') 
                    { 
                        temp=1; 
                        break; 
                    } 
                } 
                q1: 
                return temp; 
            } 

        } 


};