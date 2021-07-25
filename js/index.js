$(function(){

    $("label.btn").on('click',function () 
    {
    	var choice = $(this).find('input:radio').val();
    	$('#loadbar').show();
    	$('#quiz').fadeOut();

    	setTimeout(function()
        {
           $( "#answer" ).html(  $(this).checking(choice) );      
            $('#quiz').show();
            $('#loadbar').fadeOut();
           /* something else */
    	}, 500);
    });

    $ans = 3;

    $.fn.checking = function(ck)
    {
        if (ck != $ans)
            return 'INCORRECT';
        else 
            return 'CORRECT';
    }; 
});	


/*
questions.forEach(element => {
    console.log(element);

    document.write(element.question);
});
*/