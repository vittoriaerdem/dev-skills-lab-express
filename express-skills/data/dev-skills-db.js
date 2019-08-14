const devSkills = [
    {item: 'HTML', done: true},
    {item: 'CSS', done: true},
    {item: 'JavaScript', done: false}
  ];
  
  module.exports = {
    getAll: function() {
      return devSkills;
    }
  };