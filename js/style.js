function setPolicyAreaHeights() {
    var node = $("#policy-area-heights"),
        val = ".policy-area { min-height: " + $(window).height() + "px }";

    if (!node.prop('styleSheet')) {
        $("#policy-area-heights").html(val);
    }
}

function nextPolicyButtonClickHandlers() {
    $(".next-policy-button").click(function() {
        $(this).closest('.policy-area').next().ScrollTo();
    });
}

function topButtonHandler() {
    $(".top-button a").click(function(e) {
        e.preventDefault();
        $(".intro").ScrollTo();
    });
}

$(function() {
    $(window).resize(setPolicyAreaHeights);
    setPolicyAreaHeights();
    nextPolicyButtonClickHandlers();
    topButtonHandler();
});
