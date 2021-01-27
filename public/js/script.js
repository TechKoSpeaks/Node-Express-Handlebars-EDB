// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  $(".change-burger").on("click", function () {
    const id = $(this).data("id");
    const newBurger = true;
    const newBurgerPost = { value: newBurger };
    // Send the PUT request.
    $.ajax(`/api/burgers/${id}/devoured`, {
      type: "PUT",
      // Convert object to JSON
      data: JSON.stringify(newBurgerPost),
      // Tell the server that this request contains JSON
      contentType: "application/json; charset=UTF-8",
    }).then(() => {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  
  $(".create-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    const newFood = {
      burger_name: $("#ca").val().trim(),
    };
    // Send the POST request.
    $.ajax("/api/foods", {
      type: "POST",
      data: newFood,
    }).then(() => {
      // Reload the page to get the updated list
      location.reload();
    });
  });


});
