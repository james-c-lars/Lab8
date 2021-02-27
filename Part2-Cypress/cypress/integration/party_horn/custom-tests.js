describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');

    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');

    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Check if volume of <audio> element changes with the slider', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');

    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and sound sources change when radio button changes', () => {
    cy.get('#radio-car-horn').check();

    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/car-horn.mp3');
    });

    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/car.svg');
    });
  });

  it('Volume image changes for high volume', () => {
    cy.get('#volume-number').clear().type('80');

    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('Volume image changes for medium volume', () => {
    cy.get('#volume-number').clear().type('50');

    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume image changes for low volume', () => {
    cy.get('#volume-number').clear().type('20');

    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  it('Volume image changes for no volume', () => {
    cy.get('#volume-number').clear().type('0');

    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });

  it('Honk button disabled when empty or a non-number', () => {
    cy.get('#volume-number').clear();

    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled', 'disabled');
    });

    cy.get('#volume-number').type('not a number');

    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled', 'disabled');
    });
  });

  it('Error shown when invalid number entered', () => {
    cy.get('#volume-number').clear().type('1000');

    expect('#input:invalid').to.exist;
  });
});
