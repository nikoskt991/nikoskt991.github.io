//Model
var gameController = ( function(){
    var Monster = function(id, name, health, reward, lvl){
        this.id = id;
        this.name = name;
        this.health = health;
        this.reward = reward;
        this.lvl = lvl;
    };

    var Player = function(id, name, health, dpc, weaponDMG, gold, lvl , exp){
        this.id = id;
        this.name = name;
        this.health = health;
        this.dpc = dpc;
        this.weaponDMG = weaponDMG;
        this.gold = gold;
        this.lvl = lvl;
        this.exp = exp;
    };


    var data ={
        monsterStats : {},
        playerStats : {},
        expRequired : 10,
        score : 0,
        monsterID : [0,1]
    };
    
    return{
        testing: function(){
            console.log(data); 
        },
        
        getScore(){
            return data.score;
        }
    };
    
    
    
})();
 

//View 
var viewController =  (function(){
    var DOMstrings = {
        room : '.room',
        name : '.monster-name'
        
    }
    
    
    
    return{
        addMonster : function(obj, lvl){
            var html, newHtml, room;
            //Create the html code for the monster
            room = DOMstrings.room;
            html = '<div class="monster-name" class=jello-horizontal>%name%</div><input type="checkbox" id="btn-control"/><label class= "monster" for=btn-control><img id="monster-img" src="monster-%id%.png"/></label>';
            //Replcae the placeholders with the data
            newHtml= html.replace('%name%', obj.name);
            newHtml = newHtml.replace('%id%', obj.id);
            
            //insert html into the dom
            document.querySelector(room).insertAdjacentHTML('beforeend',newHtml);
        },
        
        getDOMstrings : function(){
            return DOMstrings;
        }
    };  
        
})();



//Controller
var score;

init()


document.querySelector('#btn-control').addEventListener("click", function(){
    score++;
    document.getElementById("score-0").textContent = score;
    
});


function init(){
    score=0;
    
    
    document.getElementById("score-0").textContent = "0";
}













