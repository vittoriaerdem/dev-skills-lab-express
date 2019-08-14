const skills = [
    {skill: 'HTML', done: true},
    {skill: 'CSS', done: true},
    {skill: 'JavaScript', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function update(id, skill) {
    skills[id] = skill;
  }
  
  function deleteOne(id) {
    skills.splice(id, 1);
  }
  
  function create(skill) {
    skills.push(skill);
  }
  
  function getOne(id) {
    return skills[id];
  }
  
  function getAll() {
    return skills;
  }