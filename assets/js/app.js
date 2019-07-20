// here
// Function accepts 4 parameters and calls NYTimes for result articles using parameters to filter
function NYAPICall(title, startYear, endYear, limit) {
    var apiKey = 'CV4eBGk9tBKkxXZ3NcAeOPzq51NT5ifM';
    // Convert years to required 8 digit values and prepare variables for string concatenation
    startYear = '&begin_date='+startYear+'0101';
    endYear = '&end_date='+endYear+'0101';
    limit = '&limit='+limit;

    // Build API Query
    var query = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key='+apiKey+'&q='+title +startYear+endYear+;

    console.log(query);
    $.ajax({
        url: query,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
}