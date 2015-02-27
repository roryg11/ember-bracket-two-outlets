import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render({ outlet: 'application'});
    this.render('teams.teamone', {
      into: 'teams',
      outlet: 'teamone'
    });
    this.render('teams.teamtwo', {
      into: 'teams',
      outlet: 'teamtwo'
    });
  },
  model: function(){
    return this.store.find('team');
  }
});
