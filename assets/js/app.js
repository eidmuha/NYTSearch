// here
// Function accepts 4 parameters and calls NYTimes for result articles using parameters to filter
function NYAPICall(title, startYear, endYear) {
    var apiKey = 'CV4eBGk9tBKkxXZ3NcAeOPzq51NT5ifM';
    // Convert parameters, if found, for string concatenation. If not, make empty string
    if (startYear === undefined) {
        startYear = '';
    } else {
        startYear = '&begin_date=' + startYear + '0101';

    }
    if (endYear === undefined) {
        endYear = '';
    } else {
        endYear = '&end_date=' + endYear + '0101';
    }

    // Build API Query
    var query = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + apiKey + '&q=' + title + startYear + endYear;

    console.log(query);
    $.ajax({
        url: query,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
}