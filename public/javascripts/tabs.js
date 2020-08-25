$(document).ready(function() {
  $(".tabs").click(function() {
    console.log("Opened");
    $(".tabs").removeClass("active");
    $(".tabs h6").removeClass("font-weight-bold");
    console.log("Tabs h6", $(".tabs h6"));
    $(".tabs h6").addClass("text-muted");
    console.log("This: ", $(this));
    console.log("This children: ", $(this).children("h6"));
    $(this)
      .children("h6")
      .removeClass("text-muted");
    $(this)
      .children("h6")
      .addClass("font-weight-bold");
    $(this).addClass("active");

    //current_fs = $(".active");
    
    next_fs = $(this).attr("id");
    console.log("Next fs", next_fs);
    next_fs = "#" + next_fs + "1";
    console.log("Next fs new", next_fs);
    
    $("fieldset").removeClass("show");
    $(next_fs).addClass("show");

    /*
    current_fs.animate(
      {},
      {
        step: function() {
          current_fs.css({
            display: "none",
            position: "relative"
          });
          next_fs.css({
            display: "block"
          });
        }
      }
    );*/
  });
});

$(document).ready(function() {
  $(".modal-body-footer").click(function() {
    $(this)
      .children("h6")
      .removeClass("text-muted");
    $(this)
      .children("h6")
      .addClass("font-weight-bold");
    $(this).addClass("active");

    current_fs = $(".active");
    
    next_fs = $(this).attr("id");
    next_fs = "#" + next_fs + "1";

    $("fieldset").removeClass("show");
    $(next_fs).addClass("show");
  });
});