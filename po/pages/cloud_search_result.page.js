class CloudSearchResultPage {
  get firstSearchResult() {
    return $('a[href="https://cloud.google.com/products/calculator"]');
  }
  async openfirstSearchResult() {
    await this.firstSearchResult.waitForDisplayed();
    await this.firstSearchResult.click();
  }
}
module.exports = new CloudSearchResultPage();
