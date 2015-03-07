angular.module('starter.services', [])

.factory('workouts', function() {
  var workouts = [
    {
      name: 'Workout 1',
      id: '1',
      items: [
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
    },
    {
      name: 'Workout 2',
      id: '1',
      items: [
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
    },
    {
      name: 'Workout 3',
      id: '1',
      items: [
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
    }
  ];

  return {
    all: function() {
      return workouts;
    },
    // remove: function(chat) {
    //   chats.splice(chats.indexOf(chat), 1);
    // },
    get: function(workoutId) {
      for (var i = 0; i < workouts.length; i++) {
        if (workouts[i].id === parseInt(workoutId)) {
          return workouts[i];
        }
      }
      return null;
    }
  };
});
