import Ember from 'ember';

export default Ember.Controller.extend({
  newTeamOnePlayers: "",
  foundTeamsOne: function() {
    var teams = this.get('model');
    var filterString = this.get('newTeamOnePlayers').toLowerCase();
    return teams.filter(function(team){
      return team.get('name').toLowerCase().indexOf(filterString) >= 0;
    });
  }.property('newTeamOnePlayers', 'model.@each.name'),
  newTeamTwoPlayers: "",
  foundTeamsTwo: function() {
    var teams = this.get('model');
    var filterString = this.get('newTeamTwoPlayers').toLowerCase();
    return teams.filter(function(team){
      return team.get('name').toLowerCase().indexOf(filterString) >= 0;
    });
  }.property('newTeamTwoPlayers', 'model.@each.name')
});
