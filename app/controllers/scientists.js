import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPerson() {
      let newScientist = this.store.createRecord('scientist', {
        name: this.get('name')
      })

      //saving newScientist to firebase
      newScientist.save();

      //clear input
      this.setProperties({
        name: ''
      })
    }
  }
});
