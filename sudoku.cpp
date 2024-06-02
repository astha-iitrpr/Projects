#include<bits/stdc++.h>
using namespace std;
//This is only for valid sudoku.
bool can_place(int r,int c,int num,vector<vector<int>>&grid){
    for(int i=0;i<9;i++){
        if(grid[r][i]==num)
        return false;
    }
    for(int i=0;i<9;i++){
        if(grid[i][c]==num)
        return false;
    }
    int x=(r/3)*3;//way to find sub_grid
    int y=(c/3)*3;
    for(int i=x;i<x+3;i++){
        for(int j=y;j<y+3;j++){
            if(grid[i][j]==num)
            return false;
        }
    }
    return true;}
void print(vector<vector<int>>&grid){
    for(int i=0;i<grid.size();i++){
        for(int j=0;j<grid.size();j++){
            cout<<grid[i][j]<<" ";
        }
    cout<<endl;
    }
}
bool sudoku(int r,int c,vector<vector<int>>&grid){
    if(c==9)
      return sudoku(r+1,0,grid);
if(r==9) return true;
if(grid[r][c]==0){
        for(int num=1;num<=9;num++){
                if(can_place(r,c,num,grid)){
                    grid[r][c]=num;
                    bool res=sudoku(r,c+1,grid);
                    if(res) return true;
                    grid[r][c]=0;//used backtracking
                }}
                return false;
        }
else{
   return sudoku(r,c+1,grid);
}
}
int main(){
    vector<vector<int>>grid(9,vector<int>(9));
    for(int i=0;i<9;i++){
        for(int j=0;j<9;j++){
            cin>>grid[i][j];
        }
    }
cout<<"********"<<endl;
    if(sudoku(0,0,grid))
    print(grid);
    return 0;
}
