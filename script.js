var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

function soundClick() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'test.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
  }
  $("a[href='#main']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
    });

        $('a').each(function() {
            var a = new RegExp('/' + window.location.host + '/');
            if(!a.test(this.href)) {
            $(this).click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            window.open(this.href, '_blank');
            });
            }
            });

            function ScrollUp(){
                var t,s;
                s=document.body.scrollTop||window.pageYOffset;
                t=setInterval(function(){if(s>0)window.scroll(0,s-=5);else clearInterval(t)},5);
            }

            $(document).ready(function(){
        
                // появление/затухание кнопки #back-top
                $(function (){
                    $(window).scroll(function (){
                        if ($(this).scrollTop() > 100){
                            $('#back-top').fadeIn();
                        } else{
                            $('#back-top').fadeOut();
                        }
                    });
        
                    // при клике на ссылку плавно поднимаемся вверх
                    $('#back-top a').click(function (){
                        $('body,html').animate({
                            scrollTop:0
                        }, 800);
                        return false;
                    });
                });
            });

              var speed = 90;
            var pause = 1000;
            var timerID = null;
            var wireRunning = false;
            var cc = [];
        
            cc[0] = "WELCOME TO OUR STUDENT ORGANIZATION";
            cc[1] = "STUDCON WILL HELP YOU";
            cc[2] = "STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON  STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON";
            cc[3] = "i stayed up all night to make this site";
            cc[4] = "OUR PROJECT";
            cc[5] = "STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON STUDCON"
            cc[6] = "TO MAKE STUDENT LIFE INTERESTING"
        
            var currentMessage = 0;
            var offset = 0;
            function stopWire() { if (wireRunning)
                clearTimeout(timerID);
                wireRunning = false
            }
            function startWire() {
                stopWire();
                showWire() }
            function showWire() {
                var text = cc[currentMessage];
                if (offset < text.length) { if (text.charAt(offset) == " ")
                    offset++;
                    var partialMessage = text.substring(0, offset + 1);
                    document.wireForm.wireField.value = partialMessage;
                    offset++;
                    timerID = setTimeout("showWire()", speed);
                    wireRunning = true }
                else {
                    offset = 0;
                    currentMessage++;
                    if (currentMessage == cc.length)
                        currentMessage = 0;
                    timerID = setTimeout("showWire()", pause);
                    wireRunning = true
                }
            }