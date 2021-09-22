window.addEventListener('DOMContentLoaded',function(){
    let teacher = document.querySelectorAll('.edu-teacher li'),
        head = document.querySelector('header'),
        sec1Title = document.querySelector('.sec1-title'),
        dom = document.querySelector('html');

    window.addEventListener('scroll',function(e){
        if(dom.scrollTop > 0){
            head.className="active";
        } else{
            head.className="";
        }
    })


    //section01 load motion s
    function loadMotion(){
        teacher.forEach(function(el, i){
            setTimeout(function(){
                el.classList.add('active');
            }, 300 * (i/1.5));
        });

        setTimeout(function(){
            sec1Title.style = "opacity: 1;";
        }, 1600);
    };

    loadMotion();
    //section01 end

    //section02 scroll down motion
    let cur = document.querySelector('.sec2-nav .line1'),
        curList = cur.querySelectorAll('li'),
        body = document.body;
    window.addEventListener('scroll',function(e){
        if(dom.scrollTop > (cur.scrollHeight + (body.offsetHeight / 9))){
            curList.forEach(function(el,index){
                setTimeout(function(){
                    el.classList.add('active');
                },100 * (index + 1));
            });
        };
    });
})