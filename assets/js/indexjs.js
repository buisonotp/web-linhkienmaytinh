window.addEventListener('scroll',()=>{
   const scroll =window.scrollY
   console.log(scroll);
   if(scroll >100){
    document.getElementById('header-an').style.display="block";

   }else{
    document.getElementById('header-an').style.display="none";
   }
})
