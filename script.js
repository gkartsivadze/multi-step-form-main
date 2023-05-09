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
    }
}

step.two();

$("#rad_1").on("click", () => {
    step.one();
})
$("#rad_2").on("click", () => {
    step.two();
})
$("#rad_3").on("click", () => {
    step.three();
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