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
      team = team._data;
      this.set('teamOneShow', team);
      this.set('newTeamOnePlayers', '');
      this.set('teamOnePlayerStats', '');
    },
    showTeamTwo: function(team){
      team = team._data;
      this.set('teamTwoShow', team);
      this.set('newTeamTwoPlayers', '');
      this.set('roster', "ROSTER");
      this.set('teamTwoPlayerStats', '');
    },
    findTeamTwoPlayers: function(team){
      var _this=this;
      console.log(team);
      Ember.$.getJSON('https://safe-gorge-4257.herokuapp.com/teams/' + team.id).then(function(response){
        var team = response.teams;
        _this.set('teamTwoArray', team);
        _this.set('teamTwoPlayerStats', '');
        _this.set('roster', "ROSTER");
      });
    },
    findTeamOnePlayers: function(team){
      var _this=this;
      Ember.$.getJSON('https://safe-gorge-4257.herokuapp.com/teams/' + team.id).then(function(response){
        var team = response.teams;
        _this.set('teamOneArray', team);
        _this.set('teamOnePlayerStats', '');
        _this.set('roster', "ROSTER");

      });
    },
    showTeamTwoPlayersStats: function(player){
      this.set('teamTwoPlayerStats', player);
      this.set('teamTwoArray', '');
      this.set('roster', "ROSTER");
    },
    showTeamOnePlayersStats: function(player){
      this.set('teamOnePlayerStats', player);
      this.set('teamOneArray', '');
      this.set('roster', "ROSTER");

    }
  }
});
