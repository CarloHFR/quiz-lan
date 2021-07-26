const current_question = questions.q1;

var test = function()
{
    console.log("Test");
}


var check_answer = function(answer)
{
    var ans = $(answer).val();
    console.log(ans);
    if (ans != current_question.correct_answer)
        return 'INCORRECT';
    else 
        return 'CORRECT';
}; 


$(function(){

    function write_quiz(question)
    {
        modal = "<div class='modal-header'><h3><span class='label label-warning' id='qid'></span>" + question.question + "</h3></div>";
        modal += "<div class='modal-body'><div class='quiz' id='quiz' data-toggle='buttons'>";

        if(question.type == "multi")
        {
            modal += "<button class='element-animation1 btn btn-lg btn-light btn-block text-info' value='a1' onclick='check_answer(this)'>" + question.answers.a1 + "</button>";
            modal += "<button class='element-animation2 btn btn-lg btn-light btn-block text-info' value='a2' onclick='check_answer(this)'>" + question.answers.a2 + "</button>";
            modal += "<button class='element-animation3 btn btn-lg btn-light btn-block text-info' value='a3' onclick='check_answer(this)'>" + question.answers.a3 + "</button>";
            modal += "<button class='element-animation4 btn btn-lg btn-light btn-block text-info' value='a4' onclick='check_answer(this)'>" + question.answers.a4 + "</button>";
        }else if(question.type == "vf")
        {
            modal += "<button class='element-animation1 btn btn-lg btn-light btn-block text-info' value='a1' onclick='check_answer(this)'>" + question.answers.a1 + "</button>";
            modal += "<button class='element-animation2 btn btn-lg btn-light btn-block text-info' value='a2' onclick='check_answer(this)'>" + question.answers.a2 + "</button>";
        }

        modal += "</div></div><div class='modal-footer text-muted'><span id='answer'></span>";

        //Limpando a questão antiga e escrevendo a nova
        $(".modal-content").html("");
        $(".modal-content").html(modal);
    }; 


    $("label.btn").on('click',function () 
    {
    	var choice = $(this).find('input:radio').val();
    	$('#quiz').fadeOut();

    	setTimeout(function()
        {
            $("#answer").html($(this).check_answer(choice));      
            $('#quiz').show();
           /* something else */
    	}, 500);
    });    


    write_quiz(current_question);
});
