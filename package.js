Package.describe({
  name: 'liangcc:fakeuser',
  summary: 'Dump 20 fake users to Meteor.users. Happy prototyping!',
  version: '0.0.1',
  git: 'https://github.com/ChihChengLiang/liangcc-fakeusers'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use('accounts-base');
  api.use('http');
  api.addFiles('liangcc:fakeuser.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('liangcc:fakeuser');
  api.addFiles('liangcc:fakeuser-tests.js');
});
