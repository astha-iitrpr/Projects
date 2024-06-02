#include<bits/stdc++.h>
using namespace std;
// returns true if given card number is valid
bool validate(string &s){
    int n=s.length();
    int tSum=0,isSecond=0;
    for(int i=n-1;i>=0;i--){
        int digit=s[i]-'0';//since its a string
        if(isSecond){
            digit*=2; //double up the digit if it is second
        }
    //Handles both cases 1-digit+2-digit
      tSum+=digit/10;
      tSum+=digit%10;
    isSecond=!isSecond;
    }
//returning whether it is divisible by 10 or not according to Luhn's Algorithm.
return (tSum%10==0);
}
//Main function code
int main(){
    string s;
    cout<<"Enter Credit Card Number :"<<endl;
    cin>>s;
if(validate(s)){
    cout<<"It's a Valid Number"<<endl;
}
else{
    cout<<"It's not a Valid Number"<<endl;
}
}