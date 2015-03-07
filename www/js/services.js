angular.module('starter.services', [])

.factory('workouts', function() {
  var workouts = [{
    name: 'Workout 1',
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
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
