function start(){	
	
};

function startF(){	
	setTimeout(function () {
		$('header').css({marginTop:-1000}).stop().delay(100).animate({marginTop:0},1600,'easeOutExpo');
		$('.grad1, .menu').css({marginTop:1000}).stop().delay(300).animate({marginTop:0},1600,'easeOutExpo');

	}, 200);
};

function showSplash(){
	setTimeout(function () {
		
		$('header').stop().animate({marginTop:0},800,'easeInOutExpo');
		$('.grad1, .menu').stop().animate({marginTop:0},800,'easeInOutExpo');
	}, 100);	
};
function hideSplash(){ 	
	$('header').stop().animate({marginTop:-80},800,'easeInOutExpo');
	$('.grad1, .menu').stop().animate({marginTop:180},800,'easeInOutExpo');
	


};
function hideSplashQ(){	
	$('header').css({marginTop:-80});
	$('.grad1, .menu').css({marginTop:180});
	

	
};

///////////////////

$(document).ready(function() {
	////// sound control	
	$("#jquery_jplayer").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3:"music.mp3"
			});
			//$(this).jPlayer("play");
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          	var kickoff = function () {
            $("#jquery_jplayer").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
         	};
          	document.documentElement.addEventListener(click, kickoff, true);
		},
		
		repeat: function(event) { // Override the default jPlayer repeat event handler				
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});			
		},
		swfPath: "js",
		cssSelectorAncestor: "#jp_container",
		supplied: "mp3",
		wmode: "window"
	});

	////// submenu
	$('ul#menu').superfish({
      delay:       600,
      animation:   {height:'show'},
      speed:       600,
      autoArrows:  false,
      dropShadows: false
    });	

    ////  jCarouselLite 
    $(".slider1").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        mouseWheel: true,
        visible: 1,
        circular: true,
        vertical: false,
        speed: 600,
        auto: 0,
        easing: 'easeInOutExpo'
    });

	
	
	
	
	

	
	
	
	
	
	
	
	// for lightbox
	$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'dark',social_tools:false,allow_resize: true,default_width: 500,default_height: 344});
	
	
		
 });  ////////




$(window).load(function() {
						
	
						
	// scroll
	$('.scroll-pane').jScrollPane({
		showArrows: false,
		verticalGutter: 20,
		verticalDragMinHeight: 113,
		verticalDragMaxHeight: 113
	});	
	
	
	
	//content switch	
	$('#content>ul>li').eq(0).css({'visibility':'hidden'});	
	var content = $('#content');	
	content.tabs({
        show:1,
        preFu:function(_){
    	   _.li.css({display:'none',top:-2000, opacity:0});		   
		   $('.logo .txt1').css({opacity:0.05});
		   
        },
        actFu:function(_){
			var Delay=300; // default
        	if( (_.pren == undefined) ){ // on reload
        		Delay=0;
        	}
        	if( (_.pren == 0) ){ // on click
        		Delay=0;
        	}
        	//console.log(_.pren, Delay);
			if(_.curr){
				_.curr.css({display:'block', top:-2000, opacity:0}).stop().animate({top:0, opacity:1},800, 'easeInOutExpo');	                
			}   
			if(_.prev){
				_.prev.stop().animate({top:2000, opacity:0},800, 'easeInOutExpo', function(){ _.prev.css({display:'none'}); });
			}
            		
			//console.log(_.pren, _.n);
			if ( (_.pren == undefined) && (_.n <= 0) ){                
                startF();
                //console.log("startF");
            }			
            if ( (_.n == 0) && (_.pren >= 0) ){
                showSplash();
                //console.log("showSplash");
            }
            if ((_.pren == 0) && (_.n>0)){
                hideSplash();
                //console.log("hideSplash");  
            }
			if ( (_.pren == undefined) && (_.n >= 1) ){
                _.pren = -1;
                hideSplashQ();
                //console.log("hideSplashQ");
            }
            //console.log("///////////////////////////");
  		}
    });
	//content switch navs
	var nav = $('.menu');	
    nav.navs({
		useHash:true,
        defHash: '#!/page_SPLASH',
        hoverIn:function(li){ 
			//$('> a .over',li).stop(true).animate({top:0},400, 'easeOutExpo');
			$('> a .over2',li).stop().animate({marginTop:20},400, 'easeOutBounce');
			$('.txt1',li).stop().animate({color:"#b1ccf6"},400, 'easeOutExpo');
			
        },
        hoverOut:function(li){	
		    if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
				$('.txt1',li).stop().animate({color:"#ffffff"},400, 'easeOutExpo');     			
				$('> a .over2',li).stop().animate({marginTop:0},400, 'easeOutBack');
			};
        }
    })    
    .navs(function(n){	
   	    content.tabs(n);
   	});	
	//////////////////////////
	

	
	
}); /// load

////////////////

$(window).load(function() {	
	setTimeout(function () {					
  		$('.spinner').fadeOut();
		$('body').css({overflow:'inherit'});
		start();
	}, 200);	
	var qwe = setTimeout(function () {$("#jquery_jplayer").jPlayer("play");}, 2000);	
	
});

