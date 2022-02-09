const myHeaders = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});
const myRequest = new Request(
  'https://poolstat.net.au/livestream/multimatch?ids=422945&api=1',
  {
    method: 'GET',
    mode: 'cors',
    headers: myHeaders,
  }
);
fetch(myRequest)
  .then((response) => response.json())
  .then(function json2array(json) {
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function (key) {
      result.push(json[key]);
      $('#namePlayerA').empty().html(json[key].hometeamlabe);
      $('#namePlayerB').empty().html(json[key].awayteamlabe);
      $('#scorePlayerA').empty().html(json[key].homescore);
      $('#scorePlayerB').empty().html(json[key].awayscore);
      $('#matchinfo').empty().html(json[key].compname);
    });
    return result;
  });
