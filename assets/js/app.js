// here
// Function accepts 4 parameters and calls NYTimes for result articles using parameters to filter
function NYAPICall(title, startYear, endYear) {
  var apiKey = "CV4eBGk9tBKkxXZ3NcAeOPzq51NT5ifM";
  // Convert parameters, if found, for string concatenation. If not, make empty string
  if (startYear === undefined || startYear === "") {
    startYear = "";
  } else {
    startYear = "&begin_date=" + startYear + "0101";
  }
  if (endYear === undefined || endYear === "") {
    endYear = "";
  } else {
    endYear = "&end_date=" + endYear + "0101";
  }

  // Build API Query
  var query =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    apiKey +
    "&q=" +
    title +
    startYear +
    endYear;

  console.log(query);
  $.ajax({
    url: query,
    method: "GET"
  }).then(function(response) {
    var results = response.response.docs;

    for (var i = 0; i < 5; i++) {
      var url = results[i].web_url;
      var titile = results[i].snippet;
      var details = results[i].lead_paragraph;

      $("#data-display").append(
        "<div class='card-header bg-light text-dark'><span> " +
          (i + 1) +
          ". </span><span>" +
          titile +
          "</span><p></div>"
      );

      var multimedia = results[i].multimedia;
      if (multimedia.length > 0) {
        console.log(multimedia[0].url);
      }
    }
  });
}

$("#search").on("click", function(event) {
  event.preventDefault();
  var search = $("#exampleFormControlInput1").val();
  var startyear = $("#startyearinput").val();
  var endyear = $("#endyearinput").val();
  // console.log("clickd");
  NYAPICall(search, startyear, endyear);
});
