$(document).ready(function(){

    /* FORM ALERT REQUIRED INPUTS */ 
    $("input.b24-form-control").focus(function(){
        $(this).closest(".b24-form-field").removeClass("b24-form-control-alert");   
    })
    $("input.b24-form-control").blur(function(){
        $(this).closest(".b24-form-field").addClass("b24-form-control-alert");   
    });


    /* BUTTON BURGER */
    
    $("button.navbar-toggler").on('click', function () {
        $(this).find(".hamburger").toggleClass("is-active");
        if($(".navbar-collapse").hasClass("show")){
            $(".navbar-collapse").hide("slow");
        }
        else{
            $(".navbar-collapse").show("slow");
        }
        $(".navbar-collapse").toggleClass("show");
    })

    /* BUTTON-UP */ 
    $(".u-go-to-v1").click(function(){
        $("html, body").animate({
            scrollTop: $("body").offset().top
        }, {
            duration: 570,   
            easing: "swing" 
        });
        $(this).css("display","none");
    })

    /* STICKY MENU + BUTTON-UP */
    $(window).scroll(function(event) {

        if($(this).scrollTop() > 3000){
            $(".u-go-to-v1").css("display","block");
        }
        if($(this).scrollTop() < 1000){
            $(".u-go-to-v1").css("display","none");
        }
        if($(this).scrollTop() > 250) {
            $("header").addClass('fixed');
            $("header").slideDown("1000");
            $("body").css("margin-top","65px");
        }
        else if($(this).scrollTop() == 0){
            $("body").css("margin-top","0px");
            $("header").show();
            /*$("header").addClass("static");*/
            $("header").removeClass('fixed');
        }
        else if($(this).scrollTop() > 150){
            if(!$("header").hasClass("fixed")){
                $("header").hide();
            }
        }
    });


    $(".pull-left").click(function(){
        $(this).find(".btn-group").toggleClass("open");
    })

    $(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $( ".pull-left" ); // тут указываем ID элемента
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
            $(".pull-left").find(".btn-group").removeClass("open");
		}
	});
})
