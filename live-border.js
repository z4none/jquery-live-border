$.fn.liveBorder = function(options){
    var settings = $.extend({}, {top: false, right: false, bottom: true, left: false}, options);
    var border = $("<div>").addClass("live-border");

    if(settings.top)
        border.append($("<div>", {class: "border top"}).append($("<div>", {class: "bar"})));
    if(settings.right)
        border.append($("<div>", {class: "border right"}).append($("<div>", {class: "bar"})));
    if(settings.bottom)
        border.append($("<div>", {class: "border bottom"}).append($("<div>", {class: "bar"})));
    if(settings.left)
        border.append($("<div>", {class: "border left"}).append($("<div>", {class: "bar"})));
        
    border.insertAfter($(this));
    $(this).detach().appendTo(border);
}