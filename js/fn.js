//     fn.js
//     (c) 2014-2015 Kiidio xuan


//页面动画
$(document).ready(function(){
  showpage1();
});
var str="<div class='u-arrow'></div>";
function showpage1(){}  


        
 function showpage2(){
    
   $('#day').delay(1500).animate({'opacity':0},1200,
                               function(){
                               $('#page2_text1').animate({'opacity':1,'right':50},1500 );
                                $('#page2_text2').animate({'opacity':1,'left':50}, 1500,
                                    function(){$('#page2').append(str);});});}     
 
 
  function showpage3(){ }

  function showpage4(){
    var str="<div class='u-arrow'></div>";
    $('#p4_cover').delay(1500).animate({'opacity':0},1200,
                               function(){
                               $('#page4_text1').animate({'opacity':1,'right':50},1500 );
                                $('#page4_text2').animate({'opacity':1,'left':50}, 1500,
                                    function(){$('#page4').append(str);});});}
function showpage5(){}  

 function showpage6(){
  $('#page6 img').delay(1000).animate({'bottom':-600},2000,
    function(){$('#page6').append(str);
 } );}  
function showpage7(){$('#caibian').animate({'opacity':1,'left':50},{ easing: 'easeInOutBounce', duration: 1200, });}
function showpage8(){$('#yingxiao').animate({'opacity':1,'right':50},{ easing: 'easeInOutBounce', duration: 1200, });}
function showpage9(){$('#sheji').animate({'opacity':1,'left':50},{ easing: 'easeInOutBounce', duration: 1200, });}
function showpage10(){$('#zhineng').animate({'opacity':1,'right':50},{ easing: 'easeInOutBounce', duration: 1200, });}
function showpage11(){
  $('#icon1').delay(600).animate({'opacity':1}, 600,
    function(){$('#icon2').animate({'opacity':1}, 1000,
      function(){$('#icon3').animate({'opacity':1}, 800,
    function(){$('#page11').append(str);});});});}


function showpage12(){$('#page12 img').delay(600).slideDown({duration:1000, easing: 'swing'});}  
function showpage13(){$('#page13 img').delay(600).slideDown({duration:1000, easing: 'jswing'});}  
function showpage14(){}




     
//滑动                                                            

$('#page1').on('swipeup',function(e){
      $(this).animate({'height':0}, 800 ); 
      showpage2();
       
    });
    
$('#page2').on('swipeup',function(e){
      $(this).animate({'height':0},800);
      showpage3();
       
    });


   
$('#page3').on('swipeup',function(e){
      $(this).animate({'height':0},800); 
      showpage4();
       
    });
  
  $('#page4').on('swipeup',function(e){
      $(this).animate({'height':0},800); 
      showpage5();
       
    });

  $('#page5').on('swipeup',function(e){
      $(this).animate({'height':0},800); 
      showpage6();
       
    });

  $('#page6').on('swipeup',function(e){
      $(this).animate({'height':0},800); 
      showpage7();
       
    });
   $('#page7').on('swipeup',function(e){
      $(this).animate({'height':0},800); showpage8();});

   $('#page8').on('swipeup',function(e){
      $(this).animate({'height':0},800); showpage9();});

    $('#page9').on('swipeup',function(e){
      $(this).animate({'height':0},800); showpage10();});

    $('#page10').on('swipeup',function(e){
      $(this).animate({'height':0},800); showpage11();});

$('#page11').on('swipeup',function(e){
      $(this).animate({'height':0},800); showpage12();});

$('#page12').on('swipeup',function(e){
      $(this).animate({'height':0},800); showpage13();});
$('#page13').on('swipeup',function(e){
      $(this).animate({'height':0},800); showpage14();});

$('#page14').on('swipedown',function(e){$('#page13').animate({'height':'100%'},800);}) ;
$('#page13').on('swipedown',function(e){$('#page12').animate({'height':'100%'},800);}) ;

$('#page12').on('swipedown',function(e){$('#page11').animate({'height':'100%'},800);}) ;
$('#page11').on('swipedown',function(e){$('#page10').animate({'height':'100%'},800);}) ;
$('#page10').on('swipedown',function(e){$('#page9').animate({'height':'100%'},800);}) ;
$('#page9').on('swipedown',function(e){$('#page8').animate({'height':'100%'},800);}) ;
$('#page8').on('swipedown',function(e){$('#page7').animate({'height':'100%'},800);}) ;
$('#page7').on('swipedown',function(e){$('#page6').animate({'height':'100%'},800);}) ;
$('#page6').on('swipedown',function(e){$('#page5').animate({'height':'100%'},800);}) ;
$('#page5').on('swipedown',function(e){$('#page4').animate({'height':'100%'},800);}) ;
$('#page4').on('swipedown',function(e){$('#page3').animate({'height':'100%'},800);}) ;
$('#page3').on('swipedown',function(e){$('#page2').animate({'height':'100%'},800);}) ;
$('#page2').on('swipedown',function(e){$('#page1').animate({'height':'100%'},800);}) ;

 






  //分享到社交
   var imgUrl = 'http://www.nfmedia.com/2015campus/images/logo.jpg';
        var lineLink = 'http://www.nfmedia.com/2015campus/xyzp.html';
        var descContent = "南方报业校园招聘火热进行中！网申时间：2014年12月2日-12月10日。网申地址：南方报业网。";
        var shareTitle = '南方报业2015校园招聘';
        var appid = '';
        
        function shareFriend() {
            WeixinJSBridge.invoke('sendAppMessage',{
                "appid": appid,
                "img_url": imgUrl,
                "img_width": "200",
                "img_height": "200",
                "link": lineLink,
                "desc": descContent,
                "title": shareTitle
            }, function(res) {
                //_report('send_msg', res.err_msg);
            })
        }
        function shareTimeline() {
            WeixinJSBridge.invoke('shareTimeline',{
                "img_url": imgUrl,
                "img_width": "200",
                "img_height": "200",
                "link": lineLink,
                "desc": descContent,
                "title": shareTitle
            }, function(res) {
                   //_report('timeline', res.err_msg);
            });
        }
        function shareWeibo() {
            WeixinJSBridge.invoke('shareWeibo',{
                "content": descContent,
                "url": lineLink,
            }, function(res) {
                //_report('weibo', res.err_msg);
            });
        }
        // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
        document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
            // 发送给好友
            WeixinJSBridge.on('menu:share:appmessage', function(argv){
                shareFriend();
            });
            // 分享到朋友圈
            WeixinJSBridge.on('menu:share:timeline', function(argv){
                shareTimeline();
            });
            // 分享到微博
            WeixinJSBridge.on('menu:share:weibo', function(argv){
                shareWeibo();
            });
        }, false);  