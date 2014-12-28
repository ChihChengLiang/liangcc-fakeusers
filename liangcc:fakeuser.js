// Write your package code here!
if (Meteor.isServer) {
  Meteor.startup(function () {
    if (!Meteor.users.findOne()) {
      Meteor.http.post('http://api.randomuser.me/?results=20', {
          dataType: 'json'
        },
        function (err, data) {
          if (!err) {
            fakeusers = JSON.parse(data.content).results;
            try {
              fakeusers.forEach(function (user) {
                Meteor.users.insert(user)
              });
              console.log(fakeusers.length + ' users added to Meteor.users');
            } catch (err2) {
              console.log('Oops! insert error' + err2);
            }
          } else {
            console.log(err);
          }
        });
    }
  });
}