


function Hero (name, srcImage,heart,mana,special){
    this.name = name;
    this.srcImage = srcImage;
    this.heart = heart;
    this.mana = mana;
    this.special = special;
}

let Elf = new Hero('Эльф','<img src = "elf.png">',100,100,'Дальняя аттака');

let  imageHero= document.getElementById('imageHero')
let nameHero=document.getElementById('nameHero')

let herocharHP = document.getElementById('herocharHP');
let herocharMP = document.getElementById('herocharMP');
let herocharSP = document.getElementById('herocharSP');
imageHero.innerHTML = Elf.srcImage;
nameHero.innerHTML = Elf.name;
herocharHP.innerHTML = 'Здоровье: ' + Elf.heart + '<img id="heart"src="heart.png">';
herocharMP.innerHTML = 'Магия: ' + Elf.mana + '<img id="mana" src="mana.png">';
herocharSP.innerHTML = 'Умения: ' + Elf.special;



