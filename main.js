function play() {
    let arr = ['rock', 'paper', 'scissors'];
    //            0       1         2
    let AIchoice = Math.floor(Math.random() * arr.length);
    let MYchoice = Math.floor(Math.random() * arr.length);

    if (AIchoice == 0 && MYchoice == 1 || AIchoice == 1 && MYchoice == 2 || AIchoice == 2 && MYchoice == 0) {
        console.log('Computer has chosen ' + arr[AIchoice]);
        console.log('User has chosen ' + arr[MYchoice]);
        console.log('User first, computer second!');
    } else
    if (AIchoice == 1 && MYchoice == 0 || AIchoice == 2 && MYchoice == 1 || AIchoice == 0 && MYchoice == 2) {
        console.log('Computer has chosen ' + arr[AIchoice]);
        console.log('User has chosen ' + arr[MYchoice]);
        console.log('Computer is just lucky today!');
    } else if (AIchoice == MYchoice) {
        console.log('Computer has chosen ' + arr[AIchoice]);
        console.log('User has chosen ' + arr[MYchoice])
        console.log('Rematch of the titans!');
    }
}

play();