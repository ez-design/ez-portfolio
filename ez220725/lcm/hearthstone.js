$(document).ready(function(index, a){
    $(".cardlist > div > a > img").addClass(function(index){
        return `box${index+1}`;
    });
});

$(document).ready(function(index, a){
    $(".manacost > a > img").addClass(function(index){
        return `mana${index+0}`;
    });
});

$(document).ready(function(index, a){
    $(".sec1 > .inner > div > a").addClass(function(index){
        return `manabt${index+1}`;
    });
});












