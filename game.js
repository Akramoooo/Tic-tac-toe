const cub1 = document.querySelector('.cub1');
const cub2 = document.querySelector('.cub2');
const cub3 = document.querySelector('.cub3');
const cub4 = document.querySelector('.cub4');
const cub5 = document.querySelector('.cub5');
const cub6 = document.querySelector('.cub6');
const cub7 = document.querySelector('.cub7');
const cub8 = document.querySelector('.cub8');
const cub9 = document.querySelector('.cub9');
const arr = [cub1, cub2, cub3, cub4, cub5, cub6, cub7, cub8, cub9];

const firstPlayer = 'X';
const secondPlayer = 'O' ;

const playerInfo = document.querySelector(".playerInfo");

const mainContainer = document.querySelector(".main-container");
const namesContainer = document.querySelector(".names-container");

const firstPlayerName = document.querySelector("#firstName");
const secondPlayerName = document.querySelector("#secondName");
const playBtn = document.querySelector(".playBtn");
const restartBtn = document.querySelector(".restartBtn");

window.addEventListener("load", () => {

    playBtn.addEventListener("click", () => {
        if (firstPlayerName.value === "" || secondPlayerName.value === "") {
            alert("Write down 2 player names!");
        }else{
            const secondName = secondPlayerName.value;
            const firstName = firstPlayerName.value;
            namesContainer.classList.add("passive");
            mainContainer.classList.remove("passive");
            mainContainer.classList.add("active");

            localStorage.setItem('player', firstPlayer);
            localStorage.setItem('name', firstName);
            for (let i = 0; i < arr.length; i++) {
                playerInfo.textContent = `Player: ${localStorage.getItem('name')}`;
                arr[i].addEventListener("click", () => {
                    if (arr[i].textContent !== " ") {
                        return;
                    }else{
                        arr[i].textContent = localStorage.getItem("player");
        
                        if (checkWhoWin() === true) {
                            alert(`Winner: ${localStorage.getItem('name')}`);
                            arr.forEach(element => {
                                element.textContent = " ";
                            });
                        }else{
                            if (localStorage.getItem("player") === firstPlayer) {
                                localStorage.setItem("player", secondPlayer);
                                localStorage.setItem("name", secondName);
                                playerInfo.textContent = `Player: ${localStorage.getItem('name')}`;
                            }else{
                                localStorage.setItem("player", firstPlayer);
                                localStorage.setItem("name", firstName);
                                playerInfo.textContent = `Player: ${localStorage.getItem('name')}`;
                            }
                        }
        
                    }  
                    let emptyArray = arr.filter((value, index) => value.textContent === " ")
        
                    if (emptyArray.length === 0) {
                        alert("Tie!");
                        arr.forEach(element => {
                            element.textContent = " ";
                        });
                    }
                        
                });
                
            }
        }
    });
   


    restartBtn.addEventListener("click", () => {
        arr.forEach(element => {
            element.textContent = " ";
        });
    });

});



function checkWhoWin(){
    if (cub1.textContent === cub4.textContent && cub4.textContent === cub7.textContent && cub1.textContent !== " " && cub4.textContent !== " " && cub7.textContent !== " ") {
        return true;
    }
    else if (cub1.textContent === cub2.textContent && cub2.textContent === cub3.textContent && cub1.textContent !== " " && cub2.textContent !== " " && cub3.textContent !== " ") {
        return true;
    }else if (cub3.textContent === cub6.textContent && cub6.textContent === cub9.textContent && cub3.textContent !== " " && cub6.textContent !== " " && cub9.textContent !== " ") {
        return true;
    }else if (cub9.textContent === cub8.textContent && cub8.textContent === cub7.textContent && cub9.textContent !== " " && cub8.textContent !== " " && cub7.textContent !== " ") {
        return true;
    }else if (cub1.textContent === cub5.textContent && cub5.textContent === cub9.textContent && cub1.textContent !== " " && cub5.textContent !== " " && cub9.textContent !== " ") {
        return true;
    }else if (cub3.textContent === cub5.textContent && cub5.textContent === cub7.textContent && cub3.textContent !== " " && cub5.textContent !== " " && cub7.textContent !== " ") {
        return true;
    }else if (cub2.textContent === cub5.textContent && cub5.textContent === cub8.textContent && cub2.textContent !== " " && cub5.textContent !== " " && cub8.textContent !== " ") {
        return true;
    }else if (cub4.textContent === cub5.textContent && cub5.textContent === cub6.textContent && cub4.textContent !== " " && cub5.textContent !== " " && cub6.textContent !== " ") {
        return true;
    }else{
        return 0;
    }
}
























    // cub1.addEventListener("click", () => {
    //     if (cub1.textContent !== " ") {
    //         alert("wrong");
    //     }else{
    //         cub1.textContent = 1;
    //         checkWhoWin();
    //         localStorage.setItem("player", secondPlayer);
    //     }
    
    // });