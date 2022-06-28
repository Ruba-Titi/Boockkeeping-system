class Company {
  companyId;
  currency;
  name;
  county;
  businessName;

  setcompanyId(id) {
    this.companyId = id;
  }

  setcurrency(currency) {
    this.currency = currency;
  }

  setName(name) {
    this.name = name;
  }
  setcounty(county) {
    this.county = county;
  }
  setbusinessName(businessName) {
    this.businessName = businessName;
  }

  getName() {
    return this.name;
  }

  getbusinessName() {
    return this.businessName;
  }

  gettcounty() {
    return this.county;
  }

  getcurrency() {
    return this.currency;
  }

  getcompanyId() {
    return this.companyId;
  }
}
