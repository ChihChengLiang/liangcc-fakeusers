// Write your tests here!
// Here is an example.
Tinytest.add('example', function (test) {
  test.equal(true, true);
});

if (Meteor.isServer) {
    Tinytest.addAsync('After startup the collection should have 20 users', function (test,onComplete) {
      Meteor.setTimeout( function () {
        test.equal(Meteor.users.find().count(), 20);
        onComplete();
      },3000);
    });
  }