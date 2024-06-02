#include<bits/stdc++.h>
using namespace std;

int main(){
    double num1,num2;
    char op;
cout<<"Enter num1: ";cin>>num1;
cout<<"Enter operator(+,-,*,/)";cin>>op;
cout<<"Enter num2: ";cin>>num2;
 switch(op){
    case '+'://add
         cout<<num1+num2<<endl;
         break;
    case '-'://subtract
         cout<<num1-num2<<endl;
         break;
    case '*'://multiply
         cout<<num1*num2<<endl;
         break;
    case '/'://divide
       if(num2==0)
          cout<<"ERROR"<<endl;
       else
         cout<<num1/num2<<endl;
         break;
    default :
         cout<<"Invalid"<<endl;
         break;
 }
return 0;
}