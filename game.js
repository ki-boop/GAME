//-------------------------------Объявление------------------------------------------------------------------  
    canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let fon = document.getElementById('document')
    let scaleOfChar = document.getElementById('scaleOfChar')
    let countHP = document.getElementById('HP')
    let countMP = document.getElementById('MP')
    let messPause = document.getElementById('pause');
    let timer = document.getElementById('timer')
    let score = document.getElementById('score')
    let GameO = document.getElementById('GameOver')
    let scoreGame = document.getElementById ('scoregame')
    let time = document.getElementById('time')
    let SC = document.getElementById('SC')
   
    let pause = false; 
    let width = 240,
        height = 310,
        frames=4,
        currentFrame = 0
        i=0;

    let hero = {
        x_pos : 850,
        y_pos : 100,
        HP: 100,
        MP: 100,
    }
    let enemy = {
        x_pos: 1200,
        y_pos: 500,
        HP: 50
    }

    let temp =0,
        interval=0,
        fonCh = 0,
        heroCh =270;

    let tempPos=0;
    let flag =0;
    let min = 0;
    let sec = 0;
    let GameOver = false;
    let biasAttac = 0;
    biasAttac = enemy.y_pos-100;
   let biasAttac2 = enemy.y_pos;
   let countScore = 0;
   let flag2 =0;
   let spawn = 1;
   let timeEnd =0;
   let die = 0 + localStorage.getItem('die')
   localStorage.setItem ('score',countScore);
  

      //----------------------Смерть врага---------------------------------------------------------------------------
   function dieEnemy () {
   
    flag2=1;
    enemy.HP =50;
     countScore++;
    
     scoreGame.innerHTML = 'Счет: ' + countScore;
     localStorage.setItem ('score',countScore);
     
     
     
     
     setTimeout (function (){
    
       switch (spawn) {
         
         case 0:
           enemy.x_pos = 1200;
           biasAttac2 = 400;
           biasAttac = 300;
           spawn++;
           ctx.clearRect(0,0, 3000, 4000);
           break;
          case 1:
            biasAttac2 = enemy.y_pos+100;
            biasAttac = enemy.y_pos;
            enemy.x_pos = 100;
            
           spawn++;
           
           break;
          case 2:
            biasAttac2 = enemy.y_pos+600;
            biasAttac = enemy.y_pos +500;
            enemy.x_pos = 1200;
            ctx.clearRect(0,0, 3000, 4000);
           spawn++;
           break;
          case 3:
            biasAttac2 = enemy.y_pos+100;
            biasAttac = enemy.y_pos;
            enemy.x_pos = 200;
            ctx.clearRect(0,0, 3000, 4000);
           spawn++;
            break;
          case 4:
             biasAttac2 = enemy.y_pos+100;
            biasAttac = enemy.y_pos;
            enemy.x_pos = 1200;
            ctx.clearRect(0,0, 3000, 4000);
           spawn++;
           break;
       
         default:
           spawn =0;
           break;
       }
     
    
     
       flag2=0;
     
     },4000)
    
   }
//----------------------Счетчик жизней и запаса сил---------------------------------------------------------------------------

countHP.innerHTML = '' + hero.HP;
countMP.innerHTML = '' + hero.MP;
scoreGame.innerHTML = 'Счет:  ' + countScore;
//---------------------------------------------Начальная отрисовка В----------------------------------------------------

timer.innerHTML = min + ' : ' + sec;
function countTime (){
  if(!pause){
    sec++;
    if (sec<10) sec = '0'+sec;
    if (sec == 60){
      min++;
      sec = 0;
    }
  
    timer.innerHTML = min + ' : ' + sec;
    localStorage.setItem ('min',min)
    localStorage.setItem ('sec',sec)
  }
  }
  


setInterval(countTime,1000)

//---------------------------------------------Начальная отрисовка В----------------------------------------------------

//---------------------------------------------Начальная отрисовка В----------------------------------------------------
addEventListener ('keyup', function(e){
  if (e.keyCode ==27){
    if(GameOver == false){
      if (flag == 0){
        pause = true;
        flag = 1;
        console.log(pause);   
        messPause.style.display = 'block';
        time.innerHTML = 'Время: ' + min + ':' + sec;
        SC.innerHTML = 'Ваш счет: ' + countScore;
      }
      else {
        flag = 0;
        pause = false;
        console.log(pause);
        messPause.style.display = 'none';
       
      }
        
      }
    }
  })
    
    

function HPright (){
  if (!pause){
  if ( hero.HP == 10 || hero.HP == 5) {
    die++;
    localStorage.setItem ('die', die)
   
    pause = true;
    GameOver = true;
    GameO.style.display = 'block';
    time.innerHTML = 'Время: ' + min + ':' + sec;
          SC.innerHTML = 'Ваш счет: ' + countScore;
    

  }
  if ((enemy.x_pos- hero.x_pos == 250 || enemy.x_pos- hero.x_pos == 240) && hero.x_pos < enemy.x_pos
  ||(hero.x_pos - enemy.x_pos == 440 || hero.x_pos - enemy.x_pos == 430 ) && hero.x_pos > enemy.x_pos ){
    if (hero.y_pos < enemy.y_pos+320 && hero.y_pos > enemy.y_pos-275){
      
    
      
      if(flag2==0){
        enemy.y_pos = biasAttac;
        hero.HP-=15;
        countHP.innerHTML = '' + hero.HP;
        if(hero.x_pos > enemy.x_pos -275){
          imageHero.src = 'hurtElfLeft.png';
          imageEnemy.src = '4.png'
        }
        if (hero.x_pos < enemy.x_pos +275){
          imageHero.src = 'hurtElfRight.png';
          imageEnemy.src = '1.png'
        }
        
       
      }
     
    }
         
  }else{
    if (hero.x_pos > enemy.x_pos -275 && flag2 == 0) imageEnemy.src =  'orkStayRight.png'
    if (hero.x_pos < enemy.x_pos +275 && flag2 == 0) imageEnemy.src = 'orkStayLeft.png'
    
    enemy.y_pos = biasAttac2;
  
  }
    if (hero.HP <100){
    hero.HP+=5;
    countHP.innerHTML = '' + hero.HP;
  
       
}  if(hero.MP < 100){
  hero.MP+=20
  countMP.innerHTML = '' + hero.MP;
}

  }
  

}
setInterval(HPright,1000)



//---------------------------------------------Начальная отрисовка ГП----------------------------------------------------
    let imageHero = new Image();
    let imageEnemy = new Image();
    imageHero.src = 'stayRight.png'
    a= imageHero.src 
    imageHero.src = 'stayLeft.png'
    b=imageHero.src
    let draw = function() {
      if (!pause){
       
                                   
        ctx.clearRect(hero.x_pos-100, hero.y_pos-100, width*1000, height*1000);    // недоработанный костыль (появляются кусочки)    
        ctx.drawImage(imageHero, width * currentFrame,0 , width, height, hero.x_pos, hero.y_pos, width, height);
       
        if (currentFrame == frames) {
          currentFrame = 0;
        } else {
          currentFrame++;
        }
        if ((enemy.x_pos- hero.x_pos == 250 || enemy.x_pos- hero.x_pos == 240) && hero.x_pos < enemy.x_pos
  ||(hero.x_pos - enemy.x_pos == 440 || hero.x_pos - enemy.x_pos == 430 ) && hero.x_pos > enemy.x_pos && flag2==0 ){
    if (hero.y_pos < enemy.y_pos+320 && hero.y_pos > enemy.y_pos-275){
      ctx.clearRect(enemy.x_pos, enemy.y_pos, 450, 430);    // недоработанный костыль (появляются кусочки)    
      ctx.drawImage(imageEnemy, 450 * i,0 , 450, 430, enemy.x_pos, enemy.y_pos, 450, 430);
     
    }
      
      }else {
        
        ctx.clearRect(enemy.x_pos, enemy.y_pos, 450, 330);    // недоработанный костыль (появляются кусочки)    
        ctx.drawImage(imageEnemy, 450 * i,0 , 450, 330, enemy.x_pos, enemy.y_pos, 450, 330);
      
      }
        
      
        if (i == 9) {
          i = 0;
        } else {
          i++;
        }
      }
      
   
        
    
      
        if (hero.x_pos>50 && hero.x_pos<500 &&hero.y_pos > 1600){
            timeEnd++;
            if(timeEnd == 45) {
              pause = true;
            GameOver = true;
          GameO.style.display = 'block';
          die++;
          localStorage.setItem ('die', die)
          time.innerHTML = 'Время: ' + min + ':' + sec;
          SC.innerHTML = 'Ваш счет: ' + countScore;
            }
        }
      
   
    
   
   
     
    }
    setInterval(draw, 120);
    
    
//-----------------------------------Спрайты--------------------------------------------------------------

  function action(keyCode,temp,interval,lastKeyCode){
    if (!pause){
    let step = 10; // длина шага
    width = 240;
    height = 280;

   if (lastKeyCode==39 || lastKeyCode == 38 || lastKeyCode == 40){  // спрайт если персонаж стоит на месте или закончил действие // смотрит вправо
    imageHero.src = 'stayRight.png'
    a= imageHero.src  
    console.log(hero.x_pos);
    
  
   
    
}

  else if (lastKeyCode == 37){ // персонаж стоит и смотрит в левую сторону
    imageHero.src = 'stayLeft.png'
    b=imageHero.src
  }
  
  else if ( keyCode === 38){ // движение вверх
    imageHero.src = 'runRight.png';
    hero.y_pos-=step;
    if (hero.y_pos<0) hero.y_pos =0; // ограничение выхода персонажа за экран (сверху)
 
    while ( hero.y_pos>enemy.y_pos+320 && hero.y_pos < enemy.y_pos + 339){
      if (hero.x_pos < enemy.x_pos+430 && hero.x_pos > enemy.x_pos-275) {
        hero.y_pos = enemy.y_pos +340;
        console.log(2);
        step =0;
      }
      break
    }

 
  
    while(hero.y_pos<1360 && hero.y_pos>230){  // движение экрана всед за перонажем
      fonCh-=step;
    
      fon.style.paddingBottom = '' + fonCh + 'px';
      fon.style.marginTop = '' - fonCh + 'px';
    break;

  }
     
  }

  else if (keyCode === 40){ // движение вниз
    imageHero.src = 'runRight.png';
    hero.y_pos+=step;
     
    if (hero.y_pos>1740) hero.y_pos =1740; // ограничение выхода персонажа за экран (снизу)
    if (enemy.y_pos - hero.y_pos < 280 && hero.y_pos<enemy.y_pos){
      if (hero.x_pos < enemy.x_pos+440 && hero.x_pos > enemy.x_pos-240) {
        hero.y_pos = enemy.y_pos -280;
        step = 0
      }
  }else step = 10;
  

      while (hero.y_pos>240 && hero.y_pos <1360){// движение экрана всед за перонажем
          fonCh+=step;
          fon.style.paddingBottom = '' + fonCh + 'px';
          fon.style.marginTop = '' - fonCh + 'px';
          break;
        } 
        if (hero.x_pos>50 && hero.x_pos<570 &&hero.y_pos > 1600){
          console.log(12);
        }
  }
   
    if(keyCode === 37){ // движение персонажа влево
        imageHero.src = 'runLeft.png'; 
        hero.x_pos-=step;
        if(hero.x_pos < 0) hero.x_pos = 0;
        if (hero.x_pos - enemy.x_pos < 440 && hero.x_pos > enemy.x_pos ){
          if (hero.y_pos < enemy.y_pos+320 && hero.y_pos > enemy.y_pos-275) {
            hero.x_pos = enemy.x_pos +440;
            
          }
      }
      if (hero.x_pos>50 && hero.x_pos<500 &&hero.y_pos > 1600){
        console.log(12);
      }
    }
    if(keyCode === 39){ //джижение персонажа вправо
        imageHero.src = 'runRight.png';
        hero.x_pos+=step;
        if(hero.x_pos > 1660) hero.x_pos = 1660;
        console.log( 'hero.y_pos ' + hero.y_pos);
        console.log( 'enemy.y_pos ' + enemy.y_pos);
        console.log( 'hero.x_pos ' + hero.x_pos);
        console.log( 'enemy.x_pos ' + enemy.x_pos);
        console.log('--------------------------');
        if (enemy.x_pos- hero.x_pos == 230 && hero.x_pos < enemy.x_pos){
            if (hero.y_pos < enemy.y_pos+320 && hero.y_pos > enemy.y_pos-275) {
                hero.x_pos = enemy.x_pos -250;
                
              
            }
        }
      
        
   
    }
}
    
//-------------------------------------------------------------------------------------------------  
        
         draw = function() {
          if (!pause){
            ctx.clearRect(hero.x_pos-100, hero.y_pos-100, width*1000, height*1000);    // недоработанный костыль (появляются кусочки)    
            ctx.drawImage(imageHero, width * currentFrame,0 , width, height, hero.x_pos, hero.y_pos, width, height);
            ctx.clearRect(enemy.x_pos, enemy.y_pos, 450, 430);    // недоработанный костыль (появляются кусочки)    
             ctx.drawImage(imageEnemy, 450 * i ,0 , 450, 430, enemy.x_pos, enemy.y_pos, 450, 430);
      
        if (currentFrame == frames) {
          currentFrame = 0;
        } else {
          currentFrame++;
        }
        if (i == 9) {
          i = 0;
        } else {
          i++;
        }
    }
          }
         
    interval = 200+temp; // частота с которой выполняется функция draw
    setInterval(draw, interval);
    
  
    }
//--------------------------------------------------------------------------------------------     
 

if (!pause){
  action(0,temp,interval,39); // состояние персонажа вначале 

  addEventListener('keydown', function(e){
      forAttac = hero.x_pos 
      temp+=1200;                                         
      if (e.keyCode == 32 ){  // пробел   
        if(hero.MP-50>0){
          hero.MP-=50;
        }
           width=522;  
              height=270; 
                                                                                    
        if (imageHero.src == a) {   // стрельба вправо  // в зависимости от предыдущего положения персонажа//выбирается спрайт для стрельбы из лука  
              imageHero.src = 'attacRight.png'
              c=imageHero.src;
            
                }
        else  if(imageHero.src == b ) {// стрельба влево //(приходиться менять положение героя при стрельбе влево так 
              imageHero.src = 'attacLeft.png' 
              d=imageHero.src;                                                    //понимаю из-за свойств картинок в HTML)
              hero.x_pos -= heroCh;  
            }
        
         

            
             
              var draw = function() {
                if (!pause){  
                 
      
                  ctx.clearRect(hero.x_pos, hero.y_pos, 0, height);
                  ctx.drawImage(imageHero, width * currentFrame,0 , width, height, hero.x_pos, hero.y_pos, width, height);
                            
                      if (currentFrame == frames) {
                          currentFrame = 0;
                      } else {
                          currentFrame++;
                      } 
                }
             
              }
              interval = 200+temp;
              setInterval(draw, interval);
  
   }else {
      action(e.keyCode,temp,interval,0);
     }


  });

//-------------------------------------------------------------------------------------------------
addEventListener('keyup',function(e){

 if (e.keyCode == 32 ){
  hero.x_pos +=heroCh; 
     if(imageHero.src == a || imageHero.src == c){
      imageHero.src = 'attacRight.png' 
      console.log( 'hero.y_pos ' + hero.y_pos);
      console.log( 'enemy.y_pos ' + enemy.y_pos);
      console.log( 'hero.x_pos ' + hero.x_pos);
      console.log( 'enemy.x_pos ' + enemy.x_pos);
      console.log('--------------------------');
      if (enemy.x_pos- hero.x_pos < 230 && hero.x_pos < enemy.x_pos){
          if (hero.y_pos < enemy.y_pos+320 && hero.y_pos > enemy.y_pos-275) {
              enemy.HP -=5;
              console.log(enemy.HP);
            if (enemy.HP == 0) {
              imageEnemy.src = 'die.png'
              dieEnemy()
              
             
              
            }
            

          }
      }
      }


     if (imageHero.src == c ) imageHero.src = 'stayRight.png';
     else {
      imageHero.src = 'stayLeft.png'
      if (hero.x_pos - enemy.x_pos < 670 && hero.x_pos > enemy.x_pos ){
        if (hero.y_pos < enemy.y_pos+320 && hero.y_pos > enemy.y_pos-275) {
          enemy.HP -=5;
              console.log(enemy.HP);
            if (enemy.HP == 0) {
              imageEnemy.src = 'die.png'
              setTimeout (dieEnemy(),5000)
              
              
             
            }
          
        }
    }
     } 

     if(imageHero.src == b) {        
          tempPos = hero.x_pos
        hero.x_pos += heroCh; 
     }
     
     if (tempPos<=1920){ 
          hero.x_pos =forAttac;
               
     } 
     if (imageHero.src == b){
       hero.x_pos = tempPos;
     }

     
    
     width = 240;
     height = 310;
         let draw = function() {
         
          ctx.clearRect(enemy.x_pos, enemy.y_pos, 450, 330);    // недоработанный костыль (появляются кусочки)    
             ctx.drawImage(imageEnemy, 450 * i ,0 , 450, 330, enemy.x_pos, enemy.y_pos, 450, 330);
             
         ctx.clearRect(hero.x_pos, hero.y_pos, width, height);
         ctx.drawImage(imageHero, width * currentFrame,0 , width, height, hero.x_pos, hero.y_pos, width, height);
         }


setInterval(draw, interval);
}
 
else {
 action(0,temp,interval,e.keyCode);
}
});
}

   

  
