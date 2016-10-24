/** ---- CONTROLLER HERE ---- **/
app.controller('MainController', MainController);

function MainController (rho) {
  var self = this;

  self.showNames = function() {
    rho.getNames().then(function(names){
      self.students = names;
    });
  };
}
