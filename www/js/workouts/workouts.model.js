angular.module('starter')
  .factory('Workout', function(Section) {

    var maxId = 0;
    angular.extend(Workout.prototype, {
      addSection: addSection
    });
    return Workout;

    function Workout(config) {
      model = this;
      if(!(model instanceof Workout)) {
        throw new Error('Must call Workout with "new"');
      }
      model.name = config.name;
      model.id = config.id || ++maxId; // seconds
      maxId = model.id > maxId ? model.id+1 : maxId; // TODO this is bad way of doing this

      model.sections = [];
      if(config.sections && config.sections.forEach) {
        config.sections.forEach(function(section) {
          model.sections.push(new Section(section));
        });
      }
    }

    function addSection(section) {
      this.sections.push(new Section(section));
    }

  });