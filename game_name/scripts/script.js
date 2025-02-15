$(document).ready(() => {
    var $game_btn = $(".game-btn"),
    $game_input = $(".game-input"),
    $game_red = $(".game-red"),
    $game_blue = $(".game-blue"),
    $game_green = $(".game-green"),
    $game_yellow = $(".game-yellow"),
    $game_field = $(".game-field"),
    $game_lost = $(".game-lost"),
    game_length = 1,
    current_num = 0,
    game_start = false,
    game_nums = [],
    input_colors = [$game_red, $game_blue, $game_green, $game_yellow],
    $game_cover = $(".game-cover");
    
    $game_btn.on('click', function() {
        $game_cover.css('opacity', '0');
        setTimeout( function() {
            $game_cover.css('display', 'none');
            begin_game();
        }, 100);
    });


    function begin_game() {
        game_length = 1;
        current_num = 0;
        generate_nums();
    }

    function generate_nums() {
        current_num = 0;
        for (let index = (game_length - 1); index < game_length; index++) {
            game_nums[index] = Math.floor(Math.random() * 4);
        }
        cycle_colors();
    }

    $game_input.on('click', function() {
        $(this).css({
            'transform': 'scale(1.1)',
        });
        setTimeout(() => {
            $(this).css('transform', 'scale(1)');
        }, 100);
        if ($(this).attr('data-color') == input_colors[game_nums[current_num]].attr('data-color')) {
            current_num++;
        }
        else {
            $game_cover.css('display', 'flex');
            $game_cover.css('opacity', '1');
            $game_btn.html('Begin opnieuw');
            $game_lost.css({
                'display': 'initial',
                'opacity': '1',
            });
        }
        if (current_num == game_length) {
            game_length++;
            generate_nums();
        }
    });

    function cycle_colors() {
        $game_input.css('pointer-events', 'none');
        $game_input.css('opacity', '0.5');
        cycle_num = 0;
        cycle_timer = setInterval(function () {
            input_colors[game_nums[cycle_num]].css('opacity', '1');
            setTimeout( function() {
                $game_input.css('opacity', '0.5');
                cycle_num++;
                if(cycle_num == game_length) {
                    clearInterval(cycle_timer);
                    setTimeout(function() {
                        $game_input.css('pointer-events', 'auto');
                        $game_input.css('opacity', '1');   
                    }, 500);
                }
            }, 500);
        }, 1000);
    }
});