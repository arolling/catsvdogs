$(document).ready(function() {
  $("img#happy").click(function() {


    $(this).next("#angry").show();
    $(this).hide();





  });

  $("img#angry").click(function() {


    $("img").siblings("#happy").show();
    $(this).hide();


  });

});
