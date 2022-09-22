var eletkor=prompt("Add meg az életkorodat!")
if(eletkor<18){
    alert("Nem vagy 18 éves, viszlát!")
}
else{
    let sorszam=1320;
    let sor=6;
    let szekszam=11;
    var jegyek={
        nappali: 500,
        nemnappali: 1850
    }
    function mozi(){
        console.log(sorszam);
        console.log(sor);
        console.log(szekszam);
        if(eletkor<25){
            console.log(jegyek['nappali']);
        }
        else{
            console.log(jegyek['nemnappali']);
        }
    }
}
mozi();