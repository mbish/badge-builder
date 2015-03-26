Package.describe({
  name: 'mbish:badge-builder',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Rough addition of a badge builder UI from openbadges.me',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(['templating', 'coffeescript']);
  api.versionsFrom('1.0.5');
  api.addFiles(['css/badge_builder.css',
                'badge_builder.html',
                'badge-builder.coffee'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mbish:badge-builder');
  api.addFiles('badge-builder-tests.coffee');
});
