$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
    
    $('.menu_btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu_btn i').toggleClass("active")
    })
})