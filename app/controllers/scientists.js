import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPerson() {
      console.log('we out here!', this.get('name'));

      var newScientist = this.store.createRecord('scientist', {
        name: this.get('name')
      })
      newScientist.save();

      this.setProperties({
        name: ''
      })
    }
  }
});
