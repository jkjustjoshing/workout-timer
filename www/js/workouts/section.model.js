angular.module('starter')
  .factory('Section', function() {
    angular.extend(Section.prototype, {

    });
    return Section;

    function Section(config) {
      if(config instanceof Section) {
        return config;
      }

      if(!(this instanceof Section)) {
        throw new Error('Must call Section with "new"');
      }
      this.type = config.type;
      this.duration = config.duration; // seconds
    }


  });
