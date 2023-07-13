var newlist={ //객체 이름이 다른 파일이랑 겹쳐서 안됐던거였음 
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

 nightdayhandler: function(pointself){    
if(pointself.value==='day')
{
      pointself.value='night';
      newlist.ndhb('black','white');
      newlist.tagwallcolor('powderblue','white');
}  
    else
    {
        newlist.ndhb('white','black');
        document.querySelector('#night_day').value='day'; //queryselector는 모든 선택자를 불러올 수 있다 태그 id class
                                                          //getelementbyid or getelementclassname 이런 것들은 좀 더 구체적인거일뿐
        newlist.tagwallcolor('blue','black');
}
}
}