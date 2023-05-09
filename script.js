const step = {
    one : function() {
        $(".sub-cont").css("display", "none");
        $("#step-1").css("display", "flex");
        $("#rad_1").prop("checked", "true");
    },
    two : function() {
        $(".sub-cont").css("display", "none");
        $("#step-2").css("display", "flex");
        $("#rad_2").prop("checked", "true");
    },
    three : function() {
        $(".sub-cont").css("display", "none");
        $("#step-3").css("display", "flex");
        $("#rad_3").prop("checked", "true");
    },
    four : function() {
        $(".sub-cont").css("display", "none");
        $("#step-4").css("display", "flex");
        $("#rad_4").prop("checked", "true");
    }
}

step.three();

$("#rad_1").on("click", () => {
    step.one();
})
$("#rad_2").on("click", () => {
    step.two();
})
$("#rad_3").on("click", () => {
    step.three();
})
$("#rad_4").on("click", () => {
    step.four();
})

$("#step-1 > input[type=button]").on("click", () => {
    step.two();
})
$("#step-2  .back.btn").on("click", () => {
    step.one();
})
$("#step-2  .next.btn").on("click", () => {
    step.three();
})
$("#step-3  .back.btn").on("click", () => {
    step.two();
})
$("#step-3  .next.btn").on("click", () => {
    step.four();
})

$("#month-year-check").on("change", function() {
    bonusSystem(this);
})

function bonusSystem(elem) {
    if($(elem).prop("checked") == true) {
        $(".card").append("<p class='bonus'>2 months free");
        $(".price").each(function(i, element) {
            $(element).text("$" + ($(element).text().match(/[0-9]+/) * 10) + "/ye");
        })
    } else if ($(elem).prop("checked") == false) {
        $(".price").each(function(i, element) {
            $(element).text("$" + ($(element).text().match(/[0-9]+/) / 10) + "/mo");
        })
        $(".bonus").remove();
    }
}