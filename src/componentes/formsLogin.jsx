import React from 'react';
import '../style/formsLogin.css'; 
import $ from 'jquery';


function MyForm() {

    $(window, document, undefined).ready(function() {

        $('input').blur(function() {
          var $this = $(this);
          if ($this.val())
            $this.addClass('used');
          else
            $this.removeClass('used');
        });
      
        var $ripples = $('.ripples');
      
        $ripples.on('click.Ripples', function(e) {
      
          var $this = $(this);
          var $offset = $this.parent().offset();
          var $circle = $this.find('.ripplesCircle');
      
          var x = e.pageX - $offset.left;
          var y = e.pageY - $offset.top;
      
          $circle.css({
            top: y + 'px',
            left: x + 'px'
          });
      
          $this.addClass('is-active');
      
        });
      
        $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
            $(this).removeClass('is-active');
        });
      
      });
  return (
    <form>
        <h2>BIENVENIDO USUARIO</h2>
      <div className="group">
        <input type="text" /><span className="highlight"></span><span className="bar"></span>
        <label>username</label>
      </div>
      <div className="group">
        <input type="email" /><span className="highlight"></span><span className="bar"></span>
        <label>contrasena</label>
      </div>
      <button type="button" className="button buttonBlue">Logiar
        <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
      </button>
    </form>
  );
}

export default MyForm;
