document.addEventListener('DOMContentLoaded',function() {

    var Menu = document.querySelectorAll('div>ul>li');

    for(var i =0; i<Menu.length; i++){
        Menu[i].addEventListener("mouseover", function () {
            if(this.querySelector('ul') !== null){
                this.querySelector('ul').style.display = 'inline-block';
            }
        });
        Menu[i].addEventListener('mouseout', function () {
            if(this.querySelector('ul') !== null){
                this.querySelector('ul').style.display = 'none';
            }
        });
    }

});