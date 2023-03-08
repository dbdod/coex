$(function(){
  mainInit();
  //링크막아주기 넣기
  $(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 
})
 
function mainInit(){
  nav_menu();
  visualImg();
  lentcoex();
  servicecoex();
  nearby();
  family();
  lan();
  topicon();
  search();
}

//메뉴
function nav_menu(){
  let $gnb=$('#nav .gnb');
  let $nav=$('#nav');
  let $navImg=$('#nav img');

  $navImg.on('click',function(){
    $nav.toggleClass('on');
    $gnb.toggle();
  })
}

//visual
function visualImg(){
  let $visualli=$('#visual .visualImg ul li');
  let $next=$('#visual .btn .next');
  let $prev=$('#visual .btn .prev');
  let $span=$('#visual .visualImg span:nth-of-type(2)');
  let old=0,current=0,size='';
  size=$visualli.length;

  $visualli.eq(0).css({left:0});
  $visualli.eq(1).css({left:'100%'});
  $visualli.eq(2).css({left:'100%'});

  $next.on('click',function(){
    current++;
    if(current>size-1){
      current=0;
    }
    if(current!=old){
      $visualli.eq(current).stop().css({left:'100%'}).animate({left:0},400);
      $visualli.eq(old).stop().css({left:0}).animate({left:'-100%'},400);
      old=current;
    }

    $span.stop().animate({left:('530'*current)},400);
  })
  $prev.on('click',function(){
    current--;
    if(current<0){
      current=size-1;
    }
    if(current!=old){
      $visualli.eq(current).stop().css({left:'-100%'}).animate({left:0},400);
      $visualli.eq(old).stop().css({left:0}).animate({left:'100%'},400);
      old=current;
    }

    $span.stop().animate({left:('530'*current)},400);
  })
}

//lent
function lentcoex(){
  let $lentul=$('#main .lent .right ul');
  let $next=$('#main .lent .right .btn .next');
  let $prev=$('#main .lent .right .btn .prev');
  let $lefth2=$('#main .lent .left .h2 h2');
  let current=0,old=0,size;
  size=$lentul.length;

  $lefth2.eq(0).addClass('on');
  $lentul.eq(0).css({top:0});
  $lentul.eq(1).css({top:'100%'});
  $lentul.eq(2).css({top:'100%'});

  $next.on('click',function(){
    current++;
    if(current>size-1){
      current=0;
    }
    if(current != old){
      $lentul.eq(current).stop().css({top:'100%'}).animate({top:0},400);
      $lentul.eq(old).stop().css({top:0}).animate({top:'-100%'},400);
      old=current;
      $lefth2.removeClass('on');
      $lefth2.eq(current).addClass('on');
    }
  })

  $prev.on('click',function(){
    current--;
    if(current<0){
      current=size-1;
    }
    if(current!=old){
      $lentul.eq(current).stop().css({top:'-100%'}).animate({top:0},400);
      $lentul.eq(old).stop().css({top:0}).animate({top:'100%'},400);
      old=current;
      $lefth2.removeClass('on');
      $lefth2.eq(current).addClass('on');
    }
  })

  $lefth2.on('click',function(){
    current=$(this).index();
    $lentul.eq(current).stop().css({top:'100%'}).animate({top:0},400);
    $lentul.eq(old).stop().css({top:0}).animate({top:'-100%'},400);
    old=current;
    $lefth2.removeClass('on');
    $lefth2.eq(current).addClass('on');
  })
}

//service coex
function servicecoex(){
  let arrH3=[];
  let arrP=[];
  let $bottomul=$('#main .service .bottom>ul');
  let $next=$('#main .service .bottom .btn .next');
  let $prev=$('#main .service .bottom .btn .prev');
  let $txth3=$('#main .service .bottom .txt ul li h3');
  let $txtp=$('#main .service .bottom .txt ul li p');
  let last='',first='',current=0,size='';
  size=$('#main .service .bottom>ul li').length;

  arrH3[0]='이벤트 기획 및 연출';
  arrH3[1]='F&amp;B 서비스';
  arrH3[2]='스트리밍 서비스';
  arrH3[3]='브랜딩 디자인 서비스';
  arrH3[4]='광고';

  arrP[0]='예산에 맞춰 최고의 이벤트를 기획해드립니다.';
  arrP[1]='행사 성격에 맞는 최상의 메뉴와 서비스를 제공해드립니다.';
  arrP[2]='최고 수준의 스트리밍 중계, 영상, 음향 기술';
  arrP[3]='행사장소에 최적화된 사이즈로 제작하여 설치 및 철거까지 한 번에!';
  arrP[4]='전시 컨벤션센터 코엑스의 다양한 전광판을 확인해보세요!';

  last=$('#main .service .bottom>ul li:last');
  $bottomul.prepend(last);
  $bottomul.css({marginLeft:'-=540'});

  $next.on('click',function(){
    $bottomul.animate({marginLeft:'-=483'},400,function(){
      first=$('#main .service .bottom>ul li:first');
      $bottomul.append(first);
      $bottomul.css({marginLeft:'+=483'});
    })
    current++;
    if(current>size-1){
      current=0;
    }
    $txth3.html(arrH3[current]);
    $txtp.html(arrP[current]);
  })

  $prev.on('click',function(){
    $bottomul.animate({marginLeft:'+=483'},400,function(){
      last=$('#main .service .bottom>ul li:last');
      $bottomul.prepend(last);
      $bottomul.css({marginLeft:'-=483'});
    })
    current--;
    if(current<0){
      current=size-1;
    }
    $txth3.html(arrH3[current]);
    $txtp.html(arrP[current]);
  })
}

//near by coex
function nearby(){
  let $nearli=$('#main .nearby .right .img ul li');
  let $next=$('#main .nearby .right .btn .next');
  let $prev=$('#main .nearby .right .btn .prev');
  let $h3=$('#main .nearby .left h3');
  let current=0,old=0,size;
  size=$nearli.length;

  $h3.eq(0).addClass('on');

  $next.on('click',function(){
    current++;
    if(current>size-1){
      current=0;
    }
    if(current!=old){
      $nearli.eq(current).css({opacity:0}).animate({opacity:1},400);
      $nearli.eq(old).css({opacity:1}).animate({opacity:0},400);
      old=current;
      $h3.removeClass('on');
      $h3.eq(current).addClass('on');
    }
  })

  $prev.on('click',function(){
    current--;
    if(current<0){
      current=size-1;
    }
    if(current!=old){
      $nearli.eq(current).css({opacity:0}).animate({opacity:1},400);
      $nearli.eq(old).css({opacity:1}).animate({opacity:0},400);
      old=current;
      $h3.removeClass('on');
      $h3.eq(current).addClass('on');
    }
  })

  $h3.on('click',function(){
    current=$(this).index()-3;

    if(current!=old){
      $nearli.eq(current).css({opacity:0}).animate({opacity:1},400);
      $nearli.eq(old).css({opacity:1}).animate({opacity:0},400);
      old=current;
      $h3.removeClass('on');
      $h3.eq(current).addClass('on');
    }
  })
}

//family
function family(){
  let $familyul=$('#footer .family ul');
  let $family=$('#footer .family');
  let $lan=$('#footer .lan');

  $family.on('click',function(){
    $familyul.slideToggle();
  })
}

//language
function lan(){
  let $span=$('#footer .lan span');

  $span.eq(0).addClass('on');

  $span.eq(1).on('click',function(){
    $span.eq(0).removeClass('on');
    $span.eq(1).addClass('on');
  })

  $span.eq(0).on('click',function(){
    $span.eq(1).removeClass('on');
    $span.eq(0).addClass('on');
  })
}

function search(){
  let $icon=$('#footer .search .icon');
  let $form=$('#footer .search .search_in');
  let $search1=$('#footer .search');

  $icon.on('click',function(){
    $form.slideToggle();
  })
}

function topicon(){
  let $topicon=$('#footer .top');

  $topicon.on('click',function(){
    $('html,body').animate({scrollTop:0},200);
  })
}