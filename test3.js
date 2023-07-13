var list={
    'a':'b',
    plust: function(){
        document.querySelector('h2').style.color='yellow';
    }
    
}
list.changecolor=function(){
    document.querySelector('h1').style.color='blue';
}

var twolist={
    twochangcolor: function(){
        document.querySelector('h2').style.color='green';
    },
   threechangcolor: function(){
    document.querySelector('h3').style.color='red';
    list.plust();
   }
}
