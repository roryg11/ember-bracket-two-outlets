import Ember from 'ember';

export default Ember.Controller.extend({
  needs: "teams",
  teams: Ember.computed.alias("controllers.teams"),
  statRanking:[],
  actions: {
    setRanking: function(stat){
      var _this=this;
      Ember.$.getJSON('https://safe-gorge-4257.herokuapp.com/teams/rank/' + stat).then(function(response){
        var teams = response.teams.slice(0,25);
        _this.set('statRanking', teams);
      });
    }
    // setTeamValues: function(team) {
  //     var firstTeam = this.get('teams').get('newTeamOnePlayers');
  //     var _this = this;
  //     console.log(team);
  //
  //     if (firstTeam === '') {
  //       console.log('hi');
  //       this.get('teams').set('newTeamOnePlayers', team);
  //     } else {
  //       this.get('teams').set('newTeamTwoPlayers', team);
  //         _this.transitionToRoute('/teams');
  //     }
  //   }
  }
});
