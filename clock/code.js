$(document).ready(function () {
    var $clock = $("#clock_circle");
    for (let i = 1; i < 13; i++) {
        $clock.append('<div class="clock_number" style="rotate:' + (((i * 30) - 90) + "deg") + ';"><p style="rotate:' + (-((i * 30) - 90) + "deg") + ';">' + i + '</p></div>');
    }
    var clock_sec = new Date().getSeconds();
    var clock_min = new Date().getMinutes();
    var clock_hr = new Date().getHours();
    $("#clock_sec").css("rotate", ((clock_sec * 6) + "deg"));
    $("#clock_min").css("rotate", ((clock_min * 6) + "deg"));
    $("#clock_hr").css("rotate", ((clock_hr * 30) + "deg"));
    var min_switch = 0;
    var hr_switch = 0;

    function clock_min_func() {
        if (clock_min) {
            if (clock_min >= 60) {
                clock_min = 0;
            }
            clock_min++;
            $("#clock_min").css("rotate", ((clock_min * 6) + "deg"));
            clock_min_test = setInterval(function () {
                $("#clock_min").css("rotate", ((clock_min * 6) + "deg"));
                if (clock_min >= 60) {
                    clock_min = 0;
                }
                clock_min++;
                // clock hr
                if (clock_min == 60 && hr_switch == 0) {
                    hr_switch = 1;
                    clock_hr_func();
                }
            }, 60000);
        }
    }

    function clock_hr_func() {
        if (clock_hr) {
            $("#clock_hr").css("rotate", ((clock_hr * 30) + "deg"));
            if (clock_hr >= 12) {
                clock_hr = 0;
            }
            clock_hr++;
            clock_hr_test = setInterval(function () {
                $("#clock_hr").css("rotate", ((clock_hr * 30) + "deg"));
                if (clock_hr >= 60) {
                    clock_hr = 0;
                }
                clock_hr++;
            }, 3600000);

        }
    }

    if (clock_sec) {
        clock_sec++;
        $("#clock_min").css("rotate", ((clock_min * 6) + "deg"));
        clock_sec_test = setInterval(function () {
            // console.log("sec:", clock_sec, " min:", clock_min, " hr:", clock_hr);
            if (clock_sec < 10) { clock_sec_disp = "0" + clock_sec } else { clock_sec_disp = clock_sec }
            $("#clock_sec").css("rotate", ((clock_sec * 6) + "deg"));
            clock_sec++;
            $("#clock_dig").html(clock_hr + ":" + clock_min + ":" + clock_sec_disp);
            if (clock_sec > 60 && min_switch == 0) {
                min_switch = 1;
                clock_min_func();
            }
            if (clock_sec > 60) {
                clock_sec = 0;
            }
        }, 500);
    }

});