module.exports = {
  elements: {
    soldFilter: '.search-box-a__search-mode-nav-button:nth-child(4)',
    searchButton: '.search-box-a__search-bar-search-button',
    selectInput: '.Select-input input',
    firstValue: '.Select-option:nth-child(1)'
  },
  commands: [{
    assertUrlContains(text) {
      this.assert.urlContains(text);
      return this;
    },
    search() {
      this.waitForElementPresent('@searchButton', 2000);
      this.click('@searchButton');
      this.api.pause(1000);
      return this;
    },
    searchByName(value, searchGroup = '') {
      let matchedElement;
      this.searchText(value);
      this.api.pause(4000);
      this.api.elements('css selector', '.Select-option', (result) => {
        console.log(result.value);
        
        result.value.forEach((element) => {
          this.api.elementIdText(element.ELEMENT, (text) => {
            if (!matchedElement && text.value.startsWith(value)
                          && text.value.endsWith(searchGroup) && !text.value.startsWith('Add ')) {
              console.log(`MATCHED ELEMENT: ${text.value}`);
              matchedElement = element.ELEMENT;
              this.api.elementIdClick(matchedElement);
            }
          });
        });
      });
    },
    searchByKeyword(keyword) {
      this.searchText(keyword);
      this.api.pause(1000);
      this.selectFirstValue();
      this.api.pause(1000);
      return this;
    },
    searchText(text) {
      this.waitForElementVisible('@selectInput', 3000)
        .setValue('@selectInput', text)
        .waitForElementVisible('@firstValue', 10000);
    },
    selectFirstValue() {
      this.waitForElementVisible('@firstValue', 6000)
        .click('@firstValue');
    },
  }]
};
