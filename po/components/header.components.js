class HeaderComponents {
get iconSearch() {
    return $(".YSM5S");
  }
  get fieldSearch() {
    return $('input[aria-label="Search"]');
  }
  get enterSearchResult() {
    return $('i[aria-label="Search"]');
  }
  async inputSearchValue(text) {
    (await this.iconSearch).waitForDisplayed();
    await this.iconSearch.click();
    await this.fieldSearch.setValue(text);
    await this.enterSearchResult.click();
  }
}
module.exports = HeaderComponents;