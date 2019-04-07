import { decorate, flow, observable, action } from "mobx";
import { ApiRequest, getRandomColor } from "utils";

class Enquiries {
  constructor() {
    this.loading = false;
    this.loaded = false;
    this.enquiries = [];
    this.error = false;
    this.errorMessage = false;
    this.getEnquiries = flow(this.getEnquiries);
    this.onFavouriteClick = this.onFavouriteClick.bind(this);

  }

  * getEnquiries() {
    try {
      this.loading = true;
      this.loaded = false;
      const response = yield ApiRequest.request("5c41920e0f0000543fe7b889", { action: "GET" });

      let newEnquiries = response.dataList.map((item) => {
        item.circleColor = getRandomColor();

        return item;
      });
      this.enquiries = newEnquiries;
      this.loaded = true;
      this.loading = false;

    } catch (e) {
      console.error("error", e);
      this.loaded = true;
      this.loading = false;
      this.error = true;
      this.errorMessage = e.message;
    }
  }

  onFavouriteClick(index) {
    let enquiries = [...this.enquiries];
    let item = { ...enquiries[index] };
    item.isStarred = !item.isStarred;
    enquiries[index] = item;

    this.enquiries = enquiries;
  }

}

decorate(Enquiries, {
  loaded: observable,
  loading: observable,
  enquiries: observable,
  error: observable,
  onFavouriteClick: action,
  errorMessage: observable,
});

export default new Enquiries();

