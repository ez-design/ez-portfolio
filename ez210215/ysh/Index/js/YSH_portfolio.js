$(document).ready(function () {
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        menu:'#fixed',
        sectionsColor: ['#DCD9D3', '#DCD9D3', '#DCD9D3','#DCD9D3', '#645B4A'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage','5rdPage'],
        navigation: true,
        navigationPosition: 'right',
        responsiveWidth: 900,
    });
    $('#moveTo').on('click',function(){
        $.fn.fullpage.moveTo(1)
    })
    $('.Squre').mouseenter(function(){
        $('.line_f').addClass('on')
    });
    $('.Squre').mouseleave(function(){
        $('.line_f').removeClass('on')
    });
    $('#Jinju').click(function(){
        window.open('https://bonnie-yang94.github.io/Portfolios/');   
    });
    $('#Konjiam').click(function(){
        window.open('https://bonnie-yang94.github.io/Portfolis2/index.html');     
    });
    $('.pdf').click(function(){
        window.open('https://ez-design.github.io/Web-portfolio/ez210215/pdf/ysh_presentation.pdf');
    });
});

var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var lineOne = document.querySelector('nav .menu-btn .line--1');
var lineTwo = document.querySelector('nav .menu-btn .line--2');
var lineThree = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
})