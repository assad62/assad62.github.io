let d = document;
let picArray = ['1','2','3','4','5','6']
let x = 0;


(function(){
    let f = function() {
        let imagePrefix = picArray[x]

        d.getElementById('right').style.backgroundImage = 'url(./images/' + imagePrefix + '.jpg)';
        x++
        if(x > 5)
        x=0
    };
    window.setInterval(f, 10000);
    f();
 })();