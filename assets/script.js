$( document ).ready(function() {
    // alert("I am an alert box!");

	$( "#load" ).click(function() {
	  $( this ).hide();
	  $( "#guide-intro" ).fadeOut( 200, function() {
    // Animation complete.
  		});
	});

	$( "#sign-up" ).click(function() {
	  $("#guide-profile").css("display", "block");
	});

	$( "#guide-profile" ).click(function() {
	  $("#guide-profile").fadeOut( 500, function() {
	  });
	  $("#guide-train").css("display", "block");
	});

	// $("#guide-train").click(function() {
	// 	$("#guide-train").fadeOut( 500, function() {
	//   });
	// })

	$("#guide-gratitude").click(function() {
		$("#guide-gratitude").fadeOut( 500, function() {
	  });
	});

	$("#connect").click(function() {
		$("#guide-connect").css("display", "block");
		$("#guide-connect-arrow").fadeOut( 500, function() {
	  });
	});

	$("#guide-connect h1").click(function() {
		$("#guide-connect-arrow").css("display", "block");
	});

	$("#guide-connect").click(function() {
		$("#guide-connect").fadeOut( 500, function() {
	  });
	});

	$("#journal").click(function() {
		$("#guide-journal").css("display", "block");
		$("#guide-journal-arrow").fadeOut( 500, function() {
	  });
	});

	$("#guide-journal h1").click(function() {
		$("#guide-journal-arrow").css("display", "block");
	});

	$("#guide-journal").click(function() {
		$("#guide-journal").fadeOut( 500, function() {
	  });
	});

	var $section = $(".site-wrap section").hide();
	$("#login").show();


	$('.nav-item a').click(function(event){
		event.preventDefault();
		$section.hide();
		var mylink = $(this).attr("href");
		$(mylink).show();
		console.log(mylink);
		$("#nav-trigger").click();

	});

	$('#sign-up').click(function(event){
		$section.hide();
		$("#btn_profile").click();
		$("#nav-trigger").click();
	});

	$('#gratitude').click(function(){
		// $(".h1-view").css({"display": "none"});
		// $(".nav-trigger").css({"display": "none"});
		$(".subPop").animate({"top":'0'}, 500);
		$("#guide-gratitude").css("display", "block");
		$("#guide-train").fadeOut( 500, function() {
	  });

	});

	$('.xBtn').click(function (e){
		$(this).parent().animate({"top":'100%'}, 500);
	});

	var doList = [];
    doList[0] = [8000, 
                function(){
                    $('#load').click();
                
                }];
    doList[1] = [3000, 
                function(){
                    $('.right.carousel-control').click();
                
                }];
    doList[2] = [3000, 
                function(){
                    $('.right.carousel-control').click();
                
                }];
    doList[3] = [4000, 
                function(){
                    $('#sign-up').click();
                
                }];
    doList[4] = [8000, 
                function(){
                    $('#nav-trigger').click();
                    $('#guide-profile').click();
                
                }];
    doList[5] = [2000, 
			    function(){
			        $('#btn-train').click();
    
    			}];
    doList[6] = [2000, 
			    function(){
			        $('#gratitude').click();
			        $('#guide-train').click();
    
    			}];
    doList[7] = [10000, 
			    function(){
			        $('.xBtn').click();
			        $('#guide-gratitude').click();
		    
    			}];
    doList[8] = [2000, 
			    function(){
			        $('#nav-trigger').click();
			        $('#guide-connect h1').click();
    
    			}];
    doList[9] = [2000, 
			    function(){
			        $('#btn-connect').click();
    
    			}];
	doList[10] = [100, 
			    function(){
			        $('#connect').click();

				}];
    doList[11] = [11000, 
			    function(){
			        $('#nav-trigger').click();
			        $('#guide-connect').click();
			        $('#guide-journal h1').click();
    			}];
    doList[12] = [2000, 
			    function(){
			        $('#btn-journal').click();

				}];
	doList[13] = [5000, 
			    function(){
			        $('#journal').click();

				}];
	doList[14] = [1000, 
                function(){
                    location.reload();
                }];


    // init the autoplay
    var ap = $.jfAutoPlay(doList, {resetBtn:"#resetBtn",playBtn:"#playBtn",stopBtn:"#stopBtn"});

});
