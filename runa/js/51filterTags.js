$(function(){

    var $imgs = $('#gallery img');
    var $buttons = $('#buttons');
    var $tagged = {}; // 빈 객체 생성

    //$("선택자").each(function(){ }); 순차적으로 노드 접근하기 메서드
    $.each($imgs, function(){ // 이미지에 대해 루프를 실행한다
        var $imgobj = this; // 이미지를 변수에 저장한다
        var $tags = $(this).data('tags'); // 태그들을 저장한다

        // 요소에 태그가 설정되어 있으면 아래 실행
        if ($tags) { 
            $tags.split(',').forEach(function (tagName) {
            // String 객체의 split() 메서드를 이용해 콤마 기준으로 값을 분리하여 태그의 배열을 만든다
            // forEach() 메서드를 연결하여 이미지에 지정된 태그들에 대해 루프를 실행한다
                
                if ($tagged[tagName] == null) { // 객체에 태그가 설정되어 있지 않으면
                    $tagged[tagName] = [];
                    // 객체에 빈 배열을 추가한다
                }
                $tagged[tagName].push($imgobj);
                // 분리된 태그명 기준으로 생성된 배열에 이미지를 추가한다
            });
        }
    });

    // 빈 버튼을 생성
    $('<button/>', {
        text: '모든작품',
        class: 'on',
        click: function() { // click 핸들러를 추가한다
            $(this).siblings().removeClass('on');
            $imgs.show(); // 모든 이미지 출력
        }
    }).appendTo($buttons); // #buttons 안에 추가

    $.each($tagged, function(tagName) { // 태그 이름에 대해 $tagged 객체에 루프를 실행
        // 빈 버튼을 생성
        $('<button/>', {
            text: tagName + '(' + $tagged[tagName].length + ')', // 태그 이름을 추가
            click: function() { // click 핸들러를 추가한다
                $(this).addClass('on').siblings().removeClass('on');
                $imgs.hide().filter($tagged[tagName]).show();
                // 모든이미지를 숨기고 지정된 태그로 필터링 한 후 이미지 출력
            }
        }).appendTo($buttons); // #buttons 안에 추가
    });

});
