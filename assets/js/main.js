$(document).ready(function(){

    $('.counter').each(function(){
          var $this = $(this);
          var countTo = $this .attr('data-count');
          
        $({countNum:$this.text()}).animate({
              countNum:countTo,
              },
   
              {  
                  duration:1800,
                  easing:'linear',
                  step:function(){
                      $this.text(Math.floor(this.countNum));
                  },
                  complete:function(){
                      $this.text(this.countNum);
                  }
                  
               }
        )
    });

});


