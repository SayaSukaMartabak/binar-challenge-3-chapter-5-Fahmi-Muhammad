/*------------------------------------------------------$$$ START $$$----------------------------------------------------*/

//const
const batu = 'batu';
const kertas = 'kertas';
const gunting = 'gunting';

/*-------------------------------------------------------------------------------------------------------------------*/

//Otak Random
function startRandom(){
    const komputer = Math.random();
    if(komputer < 0.34) return (komputerBatu(), batu);
    if(komputer >= 0.34 && komputer < 0.67) return (komputerKertas(), kertas);
    return (komputerGunting(), gunting);
}

/*-------------------------------------------------------------------------------------------------------------------*/

//RuleSet 
function duel(pemain , komputer){ 
    
    if(pemain == komputer) return draw();
    if(pemain == batu) return (komputer == gunting) ? win() : lose();
    if(pemain == kertas) return (komputer == batu) ? win() : lose();
    if(pemain == gunting) return (komputer == kertas) ? win() : lose();
}

/*-------------------------------------------------------------------------------------------------------------------*/

// Tombol Pemain
const playerBatu = document.getElementsByClassName("batuPlayer"); // tombol pemain BATU
playerBatu[0].addEventListener('click' , function(){
    const pilihanKomputer = startRandom();
    const pilihanPemain = (playerBatu.batuPlayer , batu);
    console.log(pilihanPemain);
    const komparasi = duel(pilihanPemain , pilihanKomputer);
})

const playerKertas = document.getElementsByClassName("kertasPlayer"); // tombol pemain KERTAS
playerKertas[0].addEventListener('click' , function(){
    const pilihanKomputer = startRandom();
    const pilihanPemain = (playerKertas.kertasPlayer , kertas );
    console.log(pilihanPemain);
    const komparasi = duel(pilihanPemain , pilihanKomputer);

})

const playerGunting = document.getElementsByClassName("guntingPlayer"); // tombol pemain GUNTING
playerGunting[0].addEventListener('click' , function(){
    const pilihanKomputer = startRandom();
    const pilihanPemain = (playerGunting.guntingPlayer , gunting);
    console.log(pilihanPemain);
    const komparasi = duel(pilihanPemain , pilihanKomputer);
})

/*-------------------------------------------------------------------------------------------------------------------*/

//Effect After Click
function komputerBatu(){
    const collection = document.getElementsByClassName("batuCom");
    collection[0].style.background = "wheat";

}

function komputerKertas(){
    const collection = document.getElementsByClassName("kertasCom");
    collection[0].style.background = "wheat";
}

function komputerGunting(){
    const collection = document.getElementsByClassName("guntingCom");
    collection[0].style.background = "wheat";
}

/*-------------------------------------------------------------------------------------------------------------------*/

//Box Info
function win(){
    const infoWin = document.getElementById('menang'); // Box Info MENANG
    infoWin.style.visibility = 'visible';
    const loseFunction1 = document.getElementsByClassName('batuPlayer');
    loseFunction1[0].disabled = true;
    const loseFunction2 = document.getElementsByClassName('kertasPlayer');
    loseFunction2[0].disabled = true;
    const loseFunction3 = document.getElementsByClassName('guntingPlayer');
    loseFunction3[0].disabled = true;
}

function lose(){
    const infoLose = document.getElementById('kalah'); // Box Info KALAH
    infoLose.style.visibility = 'visible';
    const loseFunction1 = document.getElementsByClassName('batuPlayer');
    loseFunction1[0].disabled = true;
    const loseFunction2 = document.getElementsByClassName('kertasPlayer');
    loseFunction2[0].disabled = true;
    const loseFunction3 = document.getElementsByClassName('guntingPlayer');
    loseFunction3[0].disabled = true;

}

function draw(){
    const infoDraw = document.getElementById('draw'); // Box Info DRAW
    infoDraw.style.visibility = 'visible';
    const loseFunction1 = document.getElementsByClassName('batuPlayer');
    loseFunction1[0].disabled = true;
    const loseFunction2 = document.getElementsByClassName('kertasPlayer');
    loseFunction2[0].disabled = true;
    const loseFunction3 = document.getElementsByClassName('guntingPlayer');
    loseFunction3[0].disabled = true;

}
/*-------------------------------------------------------------------------------------------------------------------*/

//Refresh Button
const mainLagi = document.getElementsByClassName("ulang");
mainLagi[0].addEventListener('click' , function(){
    const hapusBatu = document.getElementsByClassName('batuCom'); //mereset pilihan komputer
    hapusBatu[0].style.background = 0;

    const hapusKertas = document.getElementsByClassName('kertasCom'); //mereset pilihan komputer
    hapusKertas[0].style.background = 0;

    const hapusGunting = document.getElementsByClassName('guntingCom'); //mereset pilihan komputer
    hapusGunting[0].style.background = 0;

    const hapusBoxDraw =  document.getElementById('draw'); //mereset box info (menang, kalah, draw)
    hapusBoxDraw.style.visibility = 'hidden';

    const hapusBoxWin =  document.getElementById('menang'); //mereset box info (menang, kalah, draw)
    hapusBoxWin.style.visibility = 'hidden';

    const hapusBoxLose =  document.getElementById('kalah'); //mereset box info (menang, kalah, draw)
    hapusBoxLose.style.visibility = 'hidden';

    const loseFunction1 = document.getElementsByClassName('batuPlayer'); //enabling button
    loseFunction1[0].disabled = false;

    const loseFunction2 = document.getElementsByClassName('kertasPlayer'); //enabling button
    loseFunction2[0].disabled = false;

    const loseFunction3 = document.getElementsByClassName('guntingPlayer'); //enabling button
    loseFunction3[0].disabled = false;

})


/*----------------------------------------------------$$$ SELESAI $$$-------------------------------------------------*/