var curPlan = "arcade";
var curAddons = [];
var curPeriod = "month";
var period = {
    year : {
        periodic: "Yearly",
        long: "Year",
        short: "ye"
    },
    month : {
        periodic: "Monthly",
        long: "Month",
        short: "mo"
    }
}
const plan = {
    arcade : {
        name: "Arcade",
        month: 9,
        year: 90
    },
    advanced : {
        name: "Advanced",
        month: 12,
        year: 120
    },
    pro : {
        name: "Pro",
        month: 15,
        year: 150
    }
}
var planPrices = {
    toYearly : () => {
        $(".price")[0].innerText = `$${plan.arcade.year}/ye`;
        $(".price")[1].innerText = `$${plan.advanced.year}/ye`;
        $(".price")[2].innerText = `$${plan.pro.year}/ye`;
        $(".add-on-price")[0].innerText = `$${addonsPrice["Online service"].year}/ye`;
        $(".add-on-price")[1].innerText = `$${addonsPrice["Larger storage"].year}/ye`;
        $(".add-on-price")[2].innerText = `$${addonsPrice["Customizable Profile"].year}/ye`;
        $(".card").append("<p class='bonus'>2 months free");
        curPeriod = "year";
    },
    toMonthly : () => {
        $(".price")[0].innerText = `$${plan.arcade.month}/mo`;
        $(".price")[1].innerText = `$${plan.advanced.month}/mo`;
        $(".price")[2].innerText = `$${plan.pro.month}/mo`;
        $(".add-on-price")[0].innerText = `$${addonsPrice["Online service"].month}/mo`;
        $(".add-on-price")[1].innerText = `$${addonsPrice["Larger storage"].month}/mo`;
        $(".add-on-price")[2].innerText = `$${addonsPrice["Customizable Profile"].month}/mo`;
        $(".bonus").remove();
        curPeriod = "month";
    }
}

$("#plan-change").on("click", function() {
    step.two();
})

$("input[name='plan']").on("click", function() {
    curPlan = this.value;
    refreshData();
})
$("#month-year-check").on("click", function() {
    if($(this).prop("checked")) {
        planPrices.toYearly();
    } else {
        planPrices.toMonthly();
    }
    refreshData();
})

$("input[name='add-on']").on("click", function () {
    if($(this).prop("checked") && !curAddons.includes($(this).val())) {
        curAddons.push($(this).val());
    } else if(!$(this).prop("checked")) {
        removeAddOn($(this).val());
    }
    refreshData();
})

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
    },
    thanks : function() {
        $(".sub-cont").css("display", "none");
        $("#step-5").css("display", "flex");
        $("#rad_4").prop("checked", "true");
    }
}

const addonsPrice = {
    "Online service" : {
        name: "Online service",
        month: 1,
        year: 12
    },
    "Larger storage" : {
        name: "Larger storage",
        month: 2,
        year: 12
    },
    "Customizable Profile" : {
        name: "Customizable Profile",
        month: 2,
        year: 24
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

$("#form-submit").on("click", function() {
    if($("input:invalid").length > 0) {
        $("input:invalid").css("border", "1px solid var(--danger)");
        $("#rad_1").click();
    } else {
        step.thanks();
    }
})

function refreshData() {
    $("#plan-n-p").text(plan[curPlan].name + " (" + period[curPeriod].periodic + ")");
    $("#plan-price").text("$" + plan[curPlan][curPeriod] + "/" + period[curPeriod].short);
    $("#add-on-prices").html("");
    curAddons.forEach(elem => {
        $("#add-on-prices").append(`<div><p>${elem}</p><p>+$${addonsPrice[elem][curPeriod]}/${period[curPeriod].short}`);
    })
    // Sum of prices
    $("#period").text("Total per (" + curPeriod + ")");
    $("#sum").text("+$" + sumOfAll() + "/" + period[curPeriod].short);
    
}

function sumOfAll() {
    let sumAddOn = 0;
    curAddons.forEach(elem => {
        sumAddOn += addonsPrice[elem][curPeriod];
    })
    return plan[curPlan][curPeriod] + sumAddOn;
}

function removeAddOn(item) {
    let index = curAddons.indexOf(item);
    if(index !== -1) {
        curAddons.splice(index, 1);
    }
}