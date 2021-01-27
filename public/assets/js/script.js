// Attaching handlers when the DOM is fully loaded. //
$(() => {
  // Creating the change burger function on click event //
  $(".change-burger").on("click", function () {
    const id = $(this).data("id");
    const newBurger = $(this).data("newburger");
    const newBurgerPost = { value: newBurger };
    // Sending the ajax call for PUT //
    $.ajax(`/api/burgers/${id}/devoured`, {
      type: "PUT",
      data: JSON.stringify(newBurgerPost),
      // Converting into JSON and then informing the server that this request contains JSON //
      contentType: "application/json; charset=UTF-8",
    }).then(() => {
      // Reloading the page for updated list //
      location.reload();
    });
  });

  // Creating the new burger post sumbit event //
  $(".create-form").on("submit", (event) => {
    event.preventDefault();
    const newFood = {
      burger_name: $("#ca").val().trim(),
    };
    $.ajax("/api/foods", {
      type: "POST",
      data: newFood,
    }).then(() => {
      location.reload();
    });
  });

  // Creating the delete burger function on click event //
  $(".delete-burger").on("click", function () {
    const id = $(this).data("id");
    // Send the DELETE request.
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE",
    }).then(() => {
      location.reload();
    });
  });
});
