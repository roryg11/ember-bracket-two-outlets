import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('teams', function() {
    this.route('teamone', function() {
      this.route('show', {path: '/:team_id'});
    });
    this.route('teamtwo', function() {
      this.route('show', {path: '/:team_id'});
    });
  });
});

export default Router;
