app.service('rho', RhoService);

function RhoService($http) {
  var names = [];

  this.getNames = function () {
    return $http.get('/rho')
                .then(function (response) {
                  return response.data;
                });
  };
}
