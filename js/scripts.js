$(document).ready(function() {
  $("#neutral").click(function() {
    const catResponse = $("<li>Meow.</li>");
    $("#response").prepend(catResponse);
    console.log(catResponse);
    setTimeout(function () {
      catResponse.before("<li>Woof.</li>");
    }, 500);
  });

  $("#excited").click(function() {
    const catResponse = $("<li>Meow meow!</li>");
    $("#response").prepend(catResponse);
    setTimeout(function () {
      catResponse.before("<li>BARK BARK BARK!</li>");
    }, 500);
  });

  $("#angry").click(function() {
    const catResponse = $("<li>Meow... MEOW MEOW!</li>");
    $("#response").prepend(catResponse);
    setTimeout(function () {
      catResponse.before("<li class='anger'>BARK BARK BARK!</li>");
    }, 500);
  });

  $("#dog-neutral").click(function() {
    const dogResponse = $("<li>Woof.</li>");
    $("#response").prepend(dogResponse);
    console.log(dogResponse);
    setTimeout(function () {
      dogResponse.before("<li>Meow.</li>");
    }, 500);
  });

  $("#dog-excited").click(function() {
    const dogResponse = $("<li>BARK!</li>");
    $("#response").prepend(dogResponse);
    setTimeout(function () {
      dogResponse.before("<li>Meow meow!!</li>");
    }, 500);
  });

  $("#dog-angry").click(function() {
    const dogResponse = $("<li>SNARL GROWL!</li>");
    $("#response").prepend(dogResponse);
    setTimeout(function () {
      dogResponse.before("<li class='anger'>HISS!</li>");
    }, 500);
  });
});

