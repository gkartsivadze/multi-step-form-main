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
        let per = $("input[name='month-year']").prop("checked") ? "Yearly" : "Monthly";
        let curPlan = $("input[name='plan']").val();
        let price = plan[curPlan.toLowerCase()].price;
        $("#plan-n-p").text(curPlan + " (" + per + ")");
        $("#plan-price").text("$" + price + "/" + per)
        let add_ons = 
    }
}

const plan = {
    arcade : {
        price: 9
    },
    advanced : {
        price: 12
    },
    pro : {
        price: 15
    }
}

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

$("#step-1 > .next.btn").on("click", () => {
    $("#rad_2").click();
})


$("#step-2  .back.btn").on("click", () => {
    $("#rad_1").click();
})
$("#step-2  .next.btn").on("click", () => {
    $("#rad_3").click();
})
$("#step-3  .back.btn").on("click", () => {
    $("#rad_2").click();
})
$("#step-3  .next.btn").on("click", () => {
    $("#rad_4").click();
})
$("#step-4  .back.btn").on("click", () => {
    $("#rad_3").click();
})

$("#month-year-check").on("change", function() {
    bonusSystem(this);
})
$("#form-submit").on("click", function() {
    if($("input:invalid").length > 0) {
        $("input:invalid").css("border", "1px solid var(--danger)");
        $("#rad_1").click();
    }
})

function bonusSystem(elem) {
    if($(elem).prop("checked") == true) {
        $(".card").append("<p class='bonus'>2 months free");
        $(".price").each(function(i, element) {
            $(element).text("$" + ($(element).text().match(/[0-9]+/) * 10) + "/ye");
        })
        $(".add-on-price").each(function(i, element) {
            $(element).text("+$" + ($(element).text().match(/[0-9]+/) * 12) + "/ye");
        })
    } else if ($(elem).prop("checked") == false) {
        $(".price").each(function(i, element) {
            $(element).text("$" + ($(element).text().match(/[0-9]+/) / 10) + "/mo");
        })
        $(".add-on-price").each(function(i, element) {
            $(element).text("+$" + ($(element).text().match(/[0-9]+/) * 12) + "/ye");
        })
        $(".bonus").remove();
    }
}