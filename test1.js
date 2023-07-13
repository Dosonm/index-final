var uplist={  
    ndhb: function(color1, color2){
        let target=document.querySelector('body');
        target.style.background=color1 ;
        target.style.color=color2;
    },
    tagwallcolor: function(color1, color2){
        let atag=document.querySelectorAll('a');
        let i=0;
        while(i<4){
            atag[i].style.color=color1;
            i=i+1;}
            document.querySelector('h1').style.borderBottomColor=color2;
            document.querySelector('#grid ul').style.borderRightColor=color2;
        },
    nightdayhandler: function(pointself) {
            
        if(pointself.value==='day')
{
      pointself.value='night';
      uplist.ndhb('black','white');
      uplist.tagwallcolor('powderblue','white');
}  
        else
    {
        uplist.ndhb('white','black');
        pointself.value='day';
        uplist.tagwallcolor('blue','black');
}
        }
    }