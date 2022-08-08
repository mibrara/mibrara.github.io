$(document).ready(function(){
    $.ajax({
        url:urls,
        type:"get",
        dataType:"json",
        success:function(data){
                $.each(data.videoinfo, function(id, val){
                    $('.lds-spinner').hide();
                    $(".container").append('<div class="items" id='+val[1]+'><div class="player player-large player-wrap"><div class="embed-responsive embed-responsive-16by9"><div class="embed-responsive-item add-'+val[1]+'"><img src="https://porn.yamyhub.com/asset/play.svg" class="play-btn" width="70" height="70"></div></div></div></div><h2>'+val[0]+'</h2>');
});
$('main').after('<footer><div class="foot-links"><ul class="header-btn"></ul></div><hr><div class="foot-copyright"><p>Copyright 2022 <strong><a href="https://porn.yamyhub.com/">Yamyhub</a></strong></p></div></footer>');
$.each(data.link, function(id, val){
    $(".header-btn").append('<li><a href='+val[0]+'>'+val[1]+'</a></li>');
});
    $(".items").click(function(){
        id=$(this).attr("id");
        $(".play-btn").click(function(){
            $(this).hide();
        });
        $("div.add-"+id).append('<iframe src="https://www.xvideos.com/embedframe/'+id+'" frameborder=0 scrolling=no allowfullscreen sandbox="allow-scripts allow-same-origin"></iframe>');
    });
        }
    });
});
