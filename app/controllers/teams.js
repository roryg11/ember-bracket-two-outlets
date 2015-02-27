import Ember from 'ember';

export default Ember.Controller.extend({
  newTeamOnePlayers: "",
  newTeamTwoPlayers: "",
  teamOneShow: [],
  teamTwoShow: [],
  teamOneArray: [],
  teamTwoArray: [],
  teamTwoPlayerStats: [],
  teamOnePlayerStats: [],
  foundTeamsOne: function() {
    var teams = this.get('model');
    var filterString = this.get('newTeamOnePlayers').toLowerCase();
    return teams.filter(function(team){
      return team.get('name').toLowerCase().indexOf(filterString) >= 0;
    });
  }.property('newTeamOnePlayers', 'model.@each.name'),
  foundTeamsTwo: function() {
    var teams = this.get('model');
    var filterString = this.get('newTeamTwoPlayers').toLowerCase();
    return teams.filter(function(team){
      return team.get('name').toLowerCase().indexOf(filterString) >= 0;
    });
  }.property('newTeamTwoPlayers', 'model.@each.name'),
  actions: {
    showTeamOne: function(team){
      var _this = this;
      var team= team._data
      this.set('teamOneShow', team);
      this.set('newTeamOnePlayers', '');
    },
    showTeamTwo: function(team){
      var _this = this;
      var team= team._data
      this.set('teamTwoShow', team);
      this.set('newTeamTwoPlayers', '');
    },
    findTeamTwoPlayers: function(team){
      var _this=this;
      console.log(team);
      Ember.$.getJSON('https://safe-gorge-4257.herokuapp.com/teams/' + team.id).then(function(response){
        var team = response.teams;
        _this.set('teamTwoArray', team);
        _this.set('teamTwoPlayerStats', '')
      })
    },
    findTeamOnePlayers: function(team){
      var _this=this;
      Ember.$.getJSON('https://safe-gorge-4257.herokuapp.com/teams/' + team.id).then(function(response){
        var team = response.teams;
        _this.set('teamOneArray', team);
        _this.set('teamOnePlayerStats', '');
      })
    },
    showTeamTwoPlayersStats: function(player){
      this.set('teamTwoPlayerStats', player);
      this.set('teamTwoArray', '');
    },
    showTeamOnePlayersStats: function(player){
      this.set('teamOnePlayerStats', player);
      this.set('teamOneArray', '');
    }
  }
});
