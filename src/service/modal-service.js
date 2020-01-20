const ModalService = {
	isOpen: false,
  setState(isOpen) {
    this.isOpen = isOpen ;
  },

  getState: function() {
    return this.isOpen;
  },

  toggle: function() {
    this.isOpen = !this.isOpen;
    this.onChange();
  },

  onChange: function() {}
};

export default ModalService;
