class Form{
    constructor(){
 this.input=createInput("name");
this.button=createButton("play");
this.reset=createButton("reset");
 this.greeting=createElement("h2");
    }
  
    
display(){
var title=createElement("h3");
title.html("car-Racing Game");
title.position(160,120);

this.input.position(160,200);
this.button.position(160,250);
this.reset.position(100,30);
this.button.mousePressed(()=>{
   this.input.hide();
this.button.hide();
     player.name=this.input.value();
    playerCount+=1;
    player.index=playerCount;
    player.update();
    player.updateCount(playerCount);

   this.greeting.html("Hello! "+player.name);
    this.greeting.position(130,160);

})
this.reset.mousePressed(()=>{
    game.update(0);
    player.updateCount(0);
    
})




}
hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
}
}

;