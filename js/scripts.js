
//User Interface
//A variable is determined based on which radio input is selected. These variables are 1, 2, 10, 20, 100, 200, 1000, and 2000.
$(document).ready(function() {
  $("#buttonStart").click(function() {
    $(".landingQuestion").hide();
    $(".question#q1").show();
  });
  $(".question#q1").submit(function(event) {
    event.preventDefault();
    var q1Answer = $("input:radio[name=optradio1]:checked").val();
      if (q1Answer === "bigCities") {
        var bigCities = 1;
      } else {
        var bigCities = 2;
      }
      $(".question#q1").hide();
      $(".question#q2").show();

  $(".question#q2").submit(function(event) {
    event.preventDefault();
    var q2Answer = $("input:radio[name=optradio2]:checked").val();
      if (q2Answer === "introverted") {
        var introverted = 10;
      } else {
        var introverted = 20;
      }
      $(".question#q2").hide();
      $(".question#q3").show();

  $(".question#q3").submit(function(event) {
    event.preventDefault();
    var q3Answer = $("input:radio[name=optradio3]:checked").val();
      if (q3Answer === "singing") {
        var singing = 100;
      } else {
        var singing = 200;
      }
      $(".question#q3").hide();
      $(".question#q4").show();

  $(".question#q4").submit(function(event) {
    event.preventDefault();
    var q4Answer = $("input:radio[name=optradio4]:checked").val();
      if (q4Answer === "ocean") {
        var ocean = 1000;
      } else {
        var ocean = 2000;
      }
      $(".question#q2").hide();

//Business Logic
//A string output is determined by adding up the relevant variables.
      function vacationDecision (result) {

        if (bigCities + introverted + singing===111) {
          return "Lima"
        } else if (bigCities + introverted + singing===211) {
          return "Tokyo"
        } else if (bigCities + introverted + ocean===1021) {
          return "Rio de Janeiro"
        } else if (bigCities + introverted + ocean===2021) {
          return "Seattle"
        } else if (bigCities + introverted + singing===112) {
          return "Cusco"
        } else if (bigCities + introverted + singing===212) {
          return "Karuizawa"
        } else if (bigCities + introverted + ocean===1022) {
          return "Ilha Grande"
        } else {
          return "Bend"
        }
      }
      var result;
      $(".question#q4").hide();
      $(".result").html("You should go to "+ vacationDecision(result) + "!");
  });
  });
  });
  });
});
