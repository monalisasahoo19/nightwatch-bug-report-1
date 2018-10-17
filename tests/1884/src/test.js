let homePage;

module.exports = {
  before: (client) => {
    homePage = client.page.myPage();
  },

  'Demo test search by Postcode': (browser) => {
    homePage
      .navigate(browser.launchUrl);
    browser.click(homePage.elements.soldFilter.selector);

    homePage.searchByKeyword('2150')
      .search()
      .assertUrlContains('postcode=2150');
  },

  'Demo test search by multiple suburb': (browser) => {
    homePage
      .navigate(browser.launchUrl);
    browser.click(homePage.elements.soldFilter.selector);

    homePage.searchByAreaName('Parramatta')
      .searchByRegionName('Sydney')
      .search()
      .assertUrlContains('/parramatta-nsw/');
  },

};
