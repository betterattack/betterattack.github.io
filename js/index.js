var calc = document.getElementById("calc_slider");

function sum() {
    var t = new Array;
    t[0] = new Array, t[1] = new Array, t[2] = new Array, t[3] = new Array, t[0][0] = 0, t[0][1] = 0, t[0][2] = 1, t[1][0] = .0037, t[1][1] = 1, t[1][2] = 7, t[2][0] = .0086, t[2][1] = 1, t[2][2] = 14, t[3][0] = .0179, t[3][1] = 1, t[3][2] = 28;
    for (var c = 1 * Number($("#calc .calc-item-inp").val().replace(/\s/g, "")), e = 1 * $("#calc .calc-btns a.active").index(), a = c, l = 1; l <= t[e][2]; l++) a += .013 * a;
    t[e][0] && (a += a * t[e][0]);
    var i = a.toFixed(2).split("."), n = (a - c).toFixed(2).split(".");
    $("#calc .sum1").html(Number(i[0]).toLocaleString("ru") + ".<em>" + Number(i[1]) + "</em>"), $("#calc .sum2").html(Number(n[0]).toLocaleString("ru") + ".<em>" + Number(n[1]) + "</em>"), $("#calc .day").html($("#calc .calc-btns a.active").html()), $("#calc .bonus").html(100 * t[e][0]), t[e][1] ? $("#calc .cap").html("��") : $("#calc .cap").html("���")
}

noUiSlider.create(calc, {
    start: 5e4,
    step: 1,
    connect: [!0, !1],
    range: {min: 0, max: 10000}
}), calc.noUiSlider.on("update", (function () {
    val = calc.noUiSlider.get(), val = Math.round(val), calculator(val), $("#calc .calc-item-inp").val(val.toLocaleString("ru")), sum()
})), $("#calc .calc-item-inp").keyup((function () {
    thisValue = $(this).val($(this).val().replace(/[^0-9]/gi, "")), thisValue = $(this).val(), thisValue.length > 1 && (calc.noUiSlider.set($.trim(thisValue)), sum())
})), $("#calc .calc-btns a").click((function (t) {
    t.preventDefault(), $("#calc .calc-btns a").removeClass("active"), $(this).addClass("active"), sum(), "1 ����" === $(this).text() ? $("#calc .percent").text("1.3%") : "7 ����" === $(this).text() ? $("#calc .percent").text("9.86%") : "14 ����" === $(this).text() ? $("#calc .percent").text("20.85%") : "28 ����" === $(this).text() && $("#calc .percent").text("46.14%")
})), $(document).ready((function () {
    var t = !0, c = ".indic";
    $(window).on("scroll load resize", (function () {
        if (!t) return !1;
        var e = $(window).scrollTop(), a = $(c).offset().top, l = $(window).height(), i = $(document).height(),
            n = $(c).outerHeight();
        (e + 500 >= a || l + e == i || n + a < l) && ($(".indic-item-number span").css("opacity", "1"), $(".indic-item-number span").spincrement({
            thousandSeparator: " ",
            duration: 2e3
        }), t = !1)
    }))
}));