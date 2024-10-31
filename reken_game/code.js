$(document).ready(function () {
  // define variables
  cheat_mode = 0;
  time_min = 0;
  time_sec = "10";
  can_game_start = 0;
  $game_math = $(".game_math");
  $game_score = $(".game_score");
  $game_time = $(".game_time");
  $game_time_min = $(".game_time_min");
  $game_time_sec = $(".game_time_sec");
  $game_input = $("#game_input");
  $game_disp_answer = $(".game_disp_answer");
  $game_start = $("#game_start");
  $game_button = $("#game_button");
  $game_meter = $("#game_meter");
  $game_meter_div = $(".game_meter_div");
  $game_time_min.html(time_min);
  $game_time_sec.html(time_sec);
  game_end();
  //   start button
  $game_start.on("click", function () {
    // checks if the game can run and turns the game on
    if (can_game_start == 0) {
      $game_score.html(0);
      $game_button.prop("disabled", false);
      $game_input.prop("disabled", false);
      $game_start.prop("disabled", true);
      $game_time_min.html(time_min);
      $game_time_sec.html(time_sec);
      $game_time = parseInt($game_time);
      can_game_start = 1;
      game_timer_loop = setInterval(game_timer_func, 1000);
      max_time_val = parseInt(time_sec) + (parseInt(time_min) * 100);
      $game_meter_div.css("transition-duration", (max_time_val + "s"));
      $game_meter_div.css("width", 0);
      generate_numbers();
    }
  });
  //   function for generating numbers, the multiplier and calculates the output
  function generate_numbers() {
    if (can_game_start == 1) {
      game_random_num1 = Math.floor(Math.random() * 100);
      game_random_num2 = Math.floor(Math.random() * 100);
      game_random_add_num = Math.floor(Math.random() * 3);
      switch (game_random_add_num) {
        case 0:
          game_answer = game_random_num1 + game_random_num2;
          game_random_set_num = " + ";
          break;
        case 1:
          game_answer = game_random_num1 - game_random_num2;
          game_random_set_num = " - ";
          break;
        case 2:
          game_answer = game_random_num1 * game_random_num2;
          game_random_set_num = " x ";
          break;
        case 3:
          game_answer = game_random_num1 / game_random_num2;
          game_random_set_num = " : ";
          break;
        default:
          game_answer = "nothing";
          break;
      }
      $game_math.html(
        game_random_num1.toString() +
          game_random_set_num +
          game_random_num2.toString()
      );
      game_full_math =
        game_random_num1.toString() +
        game_random_set_num +
        game_random_num2.toString() +
        " = " +
        game_answer;
        if(cheat_mode == 1){
          console.log(game_full_math);
        }
    }
  }

  //   submit button
  $game_button.on("click", function (){
    game_submit_func();
});
  $game_input.keypress(function (e) {
    if (e.which == 13) {
        game_submit_func();
        return false;
    }
  });
  function game_submit_func(){
    if (can_game_start == 1) {
        if ($game_input.val() == game_answer) {
          $game_disp_answer.html("Correct<br>" + game_full_math);
          $("body").css("backgroundColor", "#52bf39");
          $game_score.html(parseInt($game_score.html()) + 1);
        } else {
          $("body").css("backgroundColor", "#ff4d4d");
          $game_disp_answer.html(
            "Fout<br>Juiste antwoord: " +
              game_full_math +
              "<br>Jouw antwoord: " +
              $game_input.val()
          );
          $game_score.html(parseInt($game_score.html()) - 1);
        }
        game_def();
        generate_numbers();
        $game_input.val("");
      }
  }
  //   function to end the game
  function game_end() {
    can_game_start = 0;
    $game_button.prop("disabled", true);
    $game_input.prop("disabled", true);
    $game_start.prop("disabled", false);
  }

  function game_def() {
    $game_meter_div.css("width", "100%");
    $game_meter_div.css("transition-duration", "0s");
    $game_time_min.html(time_min);
    $game_time_sec.html(time_sec);
    clearInterval(game_timer_loop);
    game_timer_loop = setInterval(game_timer_func, 1000);
    setTimeout(time_wait, 100);
  }
  
  function time_wait() {
    $game_meter_div.css("transition-duration", (max_time_val + "s"));
    $game_meter_div.css("width", "0%");
  }

  //   timer function that starts the game end function when the time is up
  function game_timer_func() {
    // check if time is up
    if (
      parseInt($game_time_sec.html()) <= 1 &&
      parseInt($game_time_min.html()) <= 1
    ) {
      clearInterval(game_timer_loop);
      $game_time_min.html("De tijd");
      $game_time_sec.html("is om");
      game_submit_func()
      game_def();
    }else{
     if (parseInt($game_time_sec.html()) <= 1) {
      $game_time_sec.html("59");
      $game_time_min.html(parseInt($game_time_min.html()) - 1);
    } else {
      $game_time_sec.html(parseInt($game_time_sec.html()) - 1);
      $game_time_sec.html($game_time_sec.html().padStart(2, "0"));
    }}
    current_time_val = (parseInt($game_time_sec.html()) * 1.6666) + (parseInt($game_time_min.html()) * 100);
  }
});
