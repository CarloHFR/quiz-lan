var score = 0;
var current_question_id = 1;
var current_question = questions[current_question_id];
var num_of_questions = Object.keys(questions).length;


var start_game = function()
{
    $('.modal-content').fadeOut();

    setTimeout(function()
    {
        write_question_screen();
        $('.modal-content').show();
    }, 1000);
}


var restart_game = function()
{
    $('.modal-content').fadeOut();

    score = 0;
    current_question_id = 1;
    current_question = questions[current_question_id];

    setTimeout(function()
    {
        write_question_screen();
        $('.modal-content').show();
    }, 1000);
}


var get_next_question = function()
{
    setTimeout(function()
    {
        if(current_question_id < num_of_questions)
        {
            current_question_id += 1;
            current_question = questions[current_question_id];
            write_question_screen();
            $('.modal-content').show();
        }else
        {
            //end of game
            write_final_screen();
            $('.modal-content').show();
        }     
    }, 1000);
}


var check_answer = function(answer)
{
    var ans = $(answer).val();

    $('.modal-content').fadeOut();

    if(ans == current_question.correct_answer)
    {
        score += 1;
        document.getElementById('success').play();
    }else
    {
        document.getElementById('fail').play();
    }

    get_next_question();
}; 


var write_question_screen = function()
{
    modal = "<div class='modal-header'><h3 class='col-12 modal-title text-center'><span class='label label-warning' id='qid'></span>" + current_question.question + "</h3></div>";
    modal += "<div class='modal-body'><div class='quiz' id='quiz' data-toggle='buttons'>";

    if(current_question.type == "multi")
    {
        modal += "<button class='element-animation1 btn btn-lg btn-light btn-block text-info' value='a1' onclick='check_answer(this)'>" + current_question.answers.a1 + "</button>";
        modal += "<button class='element-animation2 btn btn-lg btn-light btn-block text-info' value='a2' onclick='check_answer(this)'>" + current_question.answers.a2 + "</button>";
        modal += "<button class='element-animation3 btn btn-lg btn-light btn-block text-info' value='a3' onclick='check_answer(this)'>" + current_question.answers.a3 + "</button>";
        modal += "<button class='element-animation4 btn btn-lg btn-light btn-block text-info' value='a4' onclick='check_answer(this)'>" + current_question.answers.a4 + "</button>";
    }else if(current_question.type == "vf")
    {
        modal += "<button class='element-animation1 btn btn-lg btn-light btn-block text-info' value='a1' onclick='check_answer(this)'>" + current_question.answers.a1 + "</button>";
        modal += "<button class='element-animation2 btn btn-lg btn-light btn-block text-info' value='a2' onclick='check_answer(this)'>" + current_question.answers.a2 + "</button>";
    }

    modal += "</div></div><div class='modal-footer'><span class='score'>Score: " + score + "</span>";

    $(".modal-content").html("");
    $(".modal-content").html(modal);
}; 


var write_final_screen = function()
{
    if(score < 5)
    {
        final_message = "Que pena, você precisa estudar mais!";
    }else if (score >= 5 && score <= 7)
    {
        final_message = "Parabéns, mas continue estudando!";
    }else if (score >= 6)
    {
        final_message = "Parabéns, você conhece bem o assunto!";
    }

    modal = "<div class='modal-header'><h3 class='col-12 modal-title text-center'><span class='label label-warning' id='qid'></span>SCORE</h3></div>";
    modal += "<div class='modal-body'><div class='final-score'>" + score + "</div></br><div class='final-message'>" + final_message + "</div></br><button class='element-animation1 btn btn-lg btn-light text-info' onclick='restart_game()'>Jogar Novamente</button></div>";
    modal += "<div class='modal-footer text-muted'><span id='answer'></span>";

    $(".modal-content").html("");
    $(".modal-content").html(modal);
}; 
