angular.module('starter')
  .factory('Workout', function(Section) {

    var maxId = 0;
    angular.extend(Workout.prototype, {
      addSection: addSection
    });
    return Workout;

    function Workout(config) {
      if(!(this instanceof Workout)) {
        throw new Error('Must call Workout with "new"');
      }
      this.name = config.name;
      this.id = config.id || ++maxId; // seconds
      maxId = this.id > maxId ? this.id+1 : maxId; // TODO this is bad

      this.sections = [];
    }

    function addSection(section) {
      if(section instanceof Section) {
        this.sections.push(section);
      } else {
        this.sections.push(new Section(section));
      }
    }

  });