window.onscroll = function () { 
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if(scrollTop >= 0 && scrollTop <= 700) {
        const x = document.getElementsByClassName('nachalo');
        x[0].classList.add("active");
        const z = document.getElementsByClassName('config');
        z[0].classList.remove("active");
    }else if(scrollTop >= 201 && scrollTop <= 2400){
        const x = document.getElementsByClassName('nachalo');
        x[0].classList.remove("active");
        const y = document.getElementsByClassName('config');
        y[0].classList.add("active");
        const z = document.getElementsByClassName('matcher');
        z[0].classList.remove("active");

    } else if (scrollTop >= 2400 && scrollTop <= 6100) {
        const x = document.getElementsByClassName('config');
        x[0].classList.remove("active");
        const y = document.getElementsByClassName('matcher');
        y[0].classList.add("active");
        const z = document.getElementsByClassName('mock');
        z[0].classList.remove("active");

    } else if (scrollTop >= 6100 && scrollTop <= 8100) {
        const x = document.getElementsByClassName('matcher');
        x[0].classList.remove("active");
        const y = document.getElementsByClassName('mock');
        y[0].classList.add("active");
        const z = document.getElementsByClassName('resource');
        z[0].classList.remove("active");
    
    } else if (scrollTop >= 8100) {
        const x = document.getElementsByClassName('mock');
        x[0].classList.remove("active");
        const y = document.getElementsByClassName('resource');
        y[0].classList.add("active");
    }
    console.log(scrollTop);
};