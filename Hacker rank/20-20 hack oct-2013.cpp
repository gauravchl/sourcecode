#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {

    int t,n,c,m,tc,rw,temp;
    cin>>t;
    for(int x=0;x<t;x++)
    {        cin>>n>>c>>m;

        tc=n/c;
        rw=tc;
        while(m<=rw)
        {
            temp=rw/m;
            tc=tc+temp;
            rw=(rw%m)+temp;
        }
        cout<<tc<<endl;
    }
}