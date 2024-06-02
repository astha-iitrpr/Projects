#include<bits/stdc++.h>
using namespace std;
vector<char>board ={'0','1','2','3','4','5','6','7','8','9'};//zero based indexing
void print(){
    system("cls");
    cout << "\n\n\tTic Tac Toe\n\n";

    cout << "Player 1 (X)  -  Player 2 (O)" << endl << endl;
    cout << endl;

    cout << "     |     |     " << endl;
    cout << "  " << board[1] << "  |  " << board[2] << "  |  " << board[3] << endl;

    cout << "_____|_____|_____" << endl;
    cout << "     |     |     " << endl;

    cout << "  " << board[4] << "  |  " << board[5] << "  |  " << board[6] << endl;

    cout << "_____|_____|_____" << endl;
    cout << "     |     |     " << endl;

    cout << "  " << board[7] << "  |  " << board[8] << "  |  " << board[9] << endl;

    cout << "     |     |     " << endl << endl;
}
int game(){
    if (board[1] == board[2] && board[2] == board[3])return 1;
    else if (board[4] == board[5] && board[5] == board[6])return 1;
    else if (board[7] == board[8] && board[8] == board[9])return 1;
    else if (board[1] == board[4] && board[4] == board[7])return 1;
    else if (board[2] == board[5] && board[5] == board[8])return 1;
    else if (board[3] == board[6] && board[6] == board[9])return 1;
    else if (board[1] == board[5] && board[5] == board[9])return 1;
    else if (board[3] == board[5] && board[5] == board[7])return 1;
    
    else if (board[1] != '1' && board[2] != '2' && board[3] != '3' 
                    && board[4] != '4' && board[5] != '5' && board[6] != '6' 
                  && board[7] != '7' && board[8] != '8' && board[9] != '9')

        return 0;
    else
        return -1;
}

int main(){
   int player = 1,i,choice;
     char move;
    do
    {
        print();
        player=(player%2)?1:2;

        cout << "Player " << player << " Enter a number:  ";
        cin >> choice;

        move=(player == 1) ? 'X' : 'O';

        if (choice == 1 && board[1] == '1')

            board[1] = move;
        else if (choice == 2 && board[2] == '2')

            board[2] = move;
        else if (choice == 3 && board[3] == '3')

            board[3] = move;
        else if (choice == 4 && board[4] == '4')

            board[4] = move;
        else if (choice == 5 && board[5] == '5')

            board[5] = move;
        else if (choice == 6 && board[6] == '6')

            board[6] = move;
        else if (choice == 7 && board[7] == '7')

            board[7] = move;
        else if (choice == 8 && board[8] == '8')

            board[8] = move;
        else if (choice == 9 && board[9] == '9')

            board[9] = move;
        else
        {
            cout<<"Invalid move ";

            player--;
            cin.ignore();
            cin.get();
        }
        i=game();

        player++;
    }while(i==-1);//game is going on=-1
    print();
    if(i==1)//game over=-1

        cout<<"--> Player "<<--player<<" win ";
    else//game draw=-0
        cout<<"--> Game draw";

    cin.ignore();
    cin.get();
    return 0;
}




