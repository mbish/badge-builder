Package.describe({
  name: 'mbish:badge-builder',
  version: '0.0.1',
  summary: 'Rough addition of a badge builder UI from openbadges.me',
  git: 'https://github.com/mbish/badge-builder',
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
  api.use('coffeescript');
  api.use('mbish:badge-builder');
  api.addFiles('badge-builder-tests.coffee');
});
