angular.module('starter')
  .factory('workouts', function(Workout, Section) {

    var workouts = [
      new Workout({
        name: 'Workout 1',
        id: '1',
        sections: [
          {
            type: 'Warmup',
            duration: 10 // seconds
          },
          {
            type: 'Fast',
            duration: 10
          },
          {
            type: 'Faster',
            duration: 10
          },
          {
            type: 'Recovery',
            duration: 10
          },
        ]
      }),
      new Workout({
        name: 'Workout 2',
        id: '1',
        sections: [
          {
            type: 'Warmup',
            duration: 10 // seconds
          },
          {
            type: 'Fast',
            duration: 10
          },
          {
            type: 'Faster',
            duration: 10
          },
          {
            type: 'Recovery',
            duration: 10
          },
        ]
      }),
      new Workout({
        name: 'Workout 3',
        id: '1',
        sections: [
          {
            type: 'Warmup',
            duration: 10 // seconds
          },
          {
            type: 'Fast',
            duration: 10
          },
          {
            type: 'Faster',
            duration: 10
          },
          {
            type: 'Recovery',
            duration: 10
          },
        ]
      })
    ];

    return {
      all: function() {
        return workouts;
      },
      // remove: function(chat) {
      //   chats.splice(chats.indexOf(chat), 1);
      // },
      get: function(workoutId) {
        console.log('a')
        for (var i = 0; i < workouts.length; i++) {
          if (workouts[i].id === parseInt(workoutId)) {
            return workouts[i];
          }
        }
        return null;
      }
    };
  });
