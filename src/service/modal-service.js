const ModalService = {
  _state: {
    isOpen: false
  },

  setState(isOpen) {
    this._state = { ...this._state, isOpen };
  },

  getState: function() {
    return this._state;
  },

  toggle: function() {
    this._state.isOpen = !this._state.isOpen;
    this.onChange();
  },

  onChange: function() {}
};

export default ModalService;
