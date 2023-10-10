let nickname = ("Dudsduds")

let xpHeroi = 5000

let nivelExperiencia

if (xpHeroi < 1000) {
    nivelExperiencia = "ferro";
    }else if (xpHeroi >=1001 && xpHeroi <=2000){
    nivelExperiencia = "bronze";
    } else if (xpHeroi >=2001 && xpHeroi <=5000){
    nivelExperiencia = "Prata";
    } else if (xpHeroi >= 6001 && xpHeroi <= 7000){
    nivelExperiencia = "ouro";
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000){
    nivelExperiencia = "platina";
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000){
    nivelExperiencia = "ascendente";
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000){
    nivelExperiencia = "imortal";
    } else {
    nivelExperiencia = "radiante";
    }

    console.log (nickname + "possui" + xpHeroi + " Xp e é do nível " + nivelExperiencia);
    
