/** ---- CONTROLLER HERE ---- **/
app.controller('MainController', MainController);

function MainController (rho) {
  var self = this;

  console.log('MainController loaded');

  self.showNames = function() {
    rho.getNames().then(function(names){
      self.students = names;
      console.log(self.students);
    });
  };
}
