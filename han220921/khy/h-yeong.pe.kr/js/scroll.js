$(function(){

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        $(".scroll").text(scroll);
    });

    var controller = new ScrollMagic.Controller();

    var tween1 = TweenMax.to('.main-title-name strong, .main-title-pf strong', 0.5, {
        y: -150
    });
    var tween2 = TweenMax.to('.main-circle img', 0.5, {
        scale: 0,
        rotation: 720,
    });
    var tween3 = TweenMax.to('.main-desc-txt span', 0.5, {
        y: -60 
    });
    var tween4 = TweenMax.to('.main-intro > div', 0.5, {
        width: 3000,
        height: 2000,
    });
    var tween5 = TweenMax.to('.main-intro > div', 0.5, {
        opacity: 0
    });
    var tween6 = TweenMax.to('#frank .wrap', 0.5, {
        opacity: 1,
        zIndex: 1000
    });
    var tween7 = TweenMax.to('.frank-intro', 0.5, {
        right: 0,
        opacity: 1
    });
    var tween8 = TweenMax.to('#frank .project-img-mockup', 0.5, {
        opacity: 1,
        right: -180
    });
    var tween9 = TweenMax.to('#frank .project-img-logo', 0.5, {
        opacity: 0,
        right: -1000
    });
    var tween10 = TweenMax.to('.frank-detail', 0.5, {
        top: 0,
        opacity: 1
    });
    var tween11 = TweenMax.to('.frank-intro', 0.5, {
        opacity: 0
    });
    var tween12 = TweenMax.to('.frank-detail-img', 0.5, {
        // top: -1400
        yPercent: -73
    });
    var tween13 = TweenMax.to('.frank-detail', 0.5, {
        opacity: 0
    });
    var tween14 = TweenMax.to('#kb .wrap', 0.5, {
        opacity: 1,
        zIndex: 2000
    });
    var tween15 = TweenMax.to('.kb-intro', 0.5, {
        right: 0,
        opacity: 1
    });
    var tween16 = TweenMax.to('.kb-intro', 0.5, {
        opacity: 0
    });
    var tween17 = TweenMax.to('.kb-detail', 0.5, {
        top: 0,
        opacity: 1
    });
    var tween18 = TweenMax.to('.kb-detail-txt, .kb-detail-img', 0.5, {
        opacity: 1
    });
    var tween19 = TweenMax.to('.detail-img-desk', 0.5, {
        right: 0
    });
    var tween20 = TweenMax.to('.detail-img-tab', 0.5, {
        right: 435,
        top: 50
    });
    var tween21 = TweenMax.to('.detail-img-mob', 0.5, {
        right: 780,
        top: 120
    });
    var tween22 = TweenMax.to('.kb-detail', 0.5, {
        opacity: 0
    });

    var tween23 = TweenMax.to('#merlot .wrap', 0.5, {
        opacity: 1,
        zIndex: 3000
    });
    var tween24 = TweenMax.to('.merlot-intro', 0.5, {
        right: 0,
        opacity: 1
    });
    var tween25 = TweenMax.to('.merlot-intro', 0.5, {
        opacity: 0
    });
    var tween26 = TweenMax.to('#biennale .wrap', 0.5, {
        opacity: 1,
        zIndex: 4000
    });
    var tween27 = TweenMax.to('.biennale-intro', 0.5, {
        right: 0,
        opacity: 1
    });
    var tween28 = TweenMax.to('#biennale .project-img-mockup', 0.5, {
        opacity: 1,
        right: -180
    });
    var tween29 = TweenMax.to('#biennale .project-img-logo', 0.5, {
        opacity: 0,
        right: -1000
    });
    var tween30 = TweenMax.to('#biennale .wrap', 0.5, {
        opacity: 0,
    });
    var tween31 = TweenMax.to('#multi .wrap', 0.5, {
        opacity: 1,
        zIndex: 5000
    });
    var tween32 = TweenMax.to('.multi-intro', 0.5, {
        opacity: 0,
    });
    var tween33 = TweenMax.to('.multi-dynamic', 0.5, {
        right: 0, 
    });
    var tween34 = TweenMax.to('.multi-dynamic', 0.5, {
        xPercent: -100
    });
    var tween35 = TweenMax.to('.multi-ui', 0.5, {
        right: 0, 
    });
    var tween36 = TweenMax.to('.multi-ui', 0.5, {
        xPercent: -100
    });
    var tween37 = TweenMax.to('.multi-graphic', 0.5, {
        right: 0, 
    });
    var tween38 = TweenMax.to('#multi .wrap', 0.5, {
        opacity: 0
    });
    var tween39 = TweenMax.to('#contact .wrap', 0.5, {
        yPercent: -100,
        zIndex: 6000,
        opacity: 1
    });
    var tween40 = TweenMax.to('.contact-txt', 0.5, {
        fontSize: 90,
        // color: "#111"
    });
    var tween41 = TweenMax.to('.contact-circle', 0.5, {
        opacity: 1,
        scale: 15,
    });
    var tween42 = TweenMax.to('.contact-photo, .contact-img', 0.5, {
        opacity: 1,
    });
    var tween43 = TweenMax.to('.contact-photo', 0.5, {
        rotation: 180,
        yPercent: -200,
        xPercent: 150
    });
    var tween44 = TweenMax.to('.contact-img', 0.5, {
        rotation: -180,
        yPercent: 200,
        xPercent: 150
    });
    var tween45 = TweenMax.to('.contact-txt', 0.5, {
        color: "#111",
    });
    var tween46 = TweenMax.to('.contact-txt', 0.5, {
        left: -400
    });
    var tween47 = TweenMax.to('.skill', 0.5, {
        right: 0,
        display: "block"
    });
    var tween48 = TweenMax.to('.skill-icon-photo', 0.5, {
        yPercent: 100,
        opacity: 1
    });
    var tween49 = TweenMax.to('.skill-icon-ill', 0.5, {
        yPercent: 100,
        opacity: 1
    });
    var tween50 = TweenMax.to('.skill-icon-figma', 0.5, {
        yPercent: 100,
        opacity: 1
    });
    var tween51 = TweenMax.to('.skill-icon-vscode', 0.5, {
        yPercent: 100,
        opacity: 1
    });
    var tween52 = TweenMax.to('.skill-icon-html', 0.5, {
        yPercent: 100,
        opacity: 1
    });
    var tween53 = TweenMax.to('.skill-icon-css', 0.5, {
        yPercent: 100,
        opacity: 1
    });
    var tween54 = TweenMax.to('.skill-icon-js', 0.5, {
        yPercent: 100,
        opacity: 1
    });
    var tween55 = TweenMax.to('.skill-icon-jquery', 0.5, {
        yPercent: 100,
        opacity: 1
    });
    var tween56 = TweenMax.to('.skill', 0.5, {
        right: 3000,
    });
    var tween57 = TweenMax.to('.contact-end', 0.5, {
        right: 0,
    });








    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        offset: 300,
        duration: 900
    })
    .setTween(tween1)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger2", 
        duration: 3000
    })
    .setTween(tween2)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger3", 
        offset: 800,
        duration: 2200
    })
    .setTween(tween3)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger4", 
        offset: 2500,
        duration: 2500
    })
    .setTween(tween4)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger5", 
        offset: 5000,
        duration: 1000
    })
    .setTween(tween5)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger6", 
        offset: 6000,
        duration: 800
    })
    .setTween(tween6)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger7", 
        offset: 6500,
        duration: 1000
    })
    .setTween(tween7)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger8", 
        offset: 9000,
        duration: 2000
    })
    .setTween(tween8)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger9", 
        offset: 9000,
        duration: 2000
    })
    .setTween(tween9)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger10", 
        offset: 12000,
        duration: 1000
    })
    .setTween(tween10)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger11", 
        offset: 11000,
        duration: 1000
    })
    .setTween(tween11)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger12", 
        offset: 14000,
        duration: 3000
    })
    .setTween(tween12)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger13", 
        offset: 17000,
        duration: 1000
    })
    .setTween(tween13)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger14", 
        offset: 18000,
        duration: 1000
    })
    .setTween(tween14)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger15", 
        offset: 18000,
        duration: 800
    })
    .setTween(tween15)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger16", 
        offset: 20000,
        duration: 1000
    })
    .setTween(tween16)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger17", 
        offset: 21000,
        duration: 1000
    })
    .setTween(tween17)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger18", 
        offset: 22000,
        duration: 500
    })
    .setTween(tween18)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger19", 
        offset: 22000,
        duration: 500
    })
    .setTween(tween19)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger20", 
        offset: 22100,
        duration: 500
    })
    .setTween(tween20)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger21", 
        offset: 22200,
        duration: 500
    })
    .setTween(tween21)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger22", 
        offset: 23000,
        duration: 1000
    })
    .setTween(tween22)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger23", 
        offset: 24000,
        duration: 1000
    })
    .setTween(tween23)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger24", 
        offset: 24000,
        duration: 800
    })
    .setTween(tween24)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger25", 
        offset: 26000,
        duration: 1000
    })
    .setTween(tween25)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger26", 
        offset: 26500,
        duration: 1000
    })
    .setTween(tween26)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger27", 
        offset: 27000,
        duration: 1000
    })
    .setTween(tween27)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger28", 
        offset: 28000,
        duration: 800
    })
    .setTween(tween28)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger29", 
        offset: 28200,
        duration: 1000
    })
    .setTween(tween29)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger30", 
        offset: 29500,
        duration: 1000
    })
    .setTween(tween30)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger31", 
        offset: 30000,
        duration: 800
    })
    .setTween(tween31)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger32", 
        offset: 31000,
        duration: 300
    })
    .setTween(tween32)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger33", 
        offset: 31000,
        duration: 800
    })
    .setTween(tween33)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger34", 
        offset: 33000,
        duration: 1000
    })
    .setTween(tween34)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger35", 
        offset: 33000,
        duration: 1000
    })
    .setTween(tween35)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger36", 
        offset: 35000,
        duration: 1000
    })
    .setTween(tween36)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger37", 
        offset: 35000,
        duration: 1000
    })
    .setTween(tween37)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger38", 
        offset: 37000,
        duration: 1000
    })
    .setTween(tween38)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger39", 
        offset: 37000,
        duration: 800
    })
    .setTween(tween39)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger40", 
        offset: 38000,
        duration: 1000
    })
    .setTween(tween40)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger41", 
        offset: 42000,
        duration: 1000
    })
    .setTween(tween41)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger42", 
        offset: 40000,
        duration: 1000
    })
    .setTween(tween42)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger43", 
        offset: 42000,
        duration: 2000
    })
    .setTween(tween43)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger44", 
        offset: 42000,
        duration: 2000
    })
    .setTween(tween44)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger45", 
        offset: 42000,
        duration: 1000
    })
    .setTween(tween45)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger46", 
        offset: 43000,
        duration: 1000
    })
    .setTween(tween46)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger47", 
        offset: 43000,
        duration: 1000
    })
    .setTween(tween47)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger48", 
        offset: 44000,
        duration: 100
    })
    .setTween(tween48)
    .addTo(controller) 

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger49", 
        offset: 44100,
        duration: 100
    })
    .setTween(tween49)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger50", 
        offset: 44200,
        duration: 100
    })
    .setTween(tween50)
    .addTo(controller)
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger51", 
        offset: 44300,
        duration: 100
    })
    .setTween(tween51)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger52", 
        offset: 44400,
        duration: 100
    })
    .setTween(tween52)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger53", 
        offset: 44500,
        duration: 100
    })
    .setTween(tween53)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger54", 
        offset: 44600,
        duration: 100
    })
    .setTween(tween54)
    .addTo(controller) 

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger55", 
        offset: 44700,
        duration: 100
    })
    .setTween(tween55)
    .addTo(controller)

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger56", 
        offset: 45000,
        duration: 1500
    })
    .setTween(tween56)
    .addTo(controller)
    .addIndicators({
        colorTrigger: "transparent",
        colorStart: "transparent",
        colorEnd: "transparent",
    }) 

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger57", 
        offset: 45000,
        duration: 800
    })
    .setTween(tween57)
    .addTo(controller) 
})