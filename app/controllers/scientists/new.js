import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addPerson: function () {
      let name = this.get('name')
      console.log('in addPerson', name)
      // this.get('people').push(model.get('name'));
    }
  }
});
