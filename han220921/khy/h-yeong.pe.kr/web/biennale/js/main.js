$(function(){
    $('.archieve-tit').on('click' , function(e){
        e.preventDefault();
        $('.archieve-box').hide();
        $(this).next().show();
    })
})
