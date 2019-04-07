import { decorate, flow, observable, action } from "mobx";
import { ApiRequest, getRandomColor } from "utils";

class Students {
  constructor() {
    this.loading = false;
    this.loaded = false;
    this.students = [];
    this.error = false;
    this.errorMessage = false;
    this.getStudentsData = flow(this.getStudentsData);
  }

  * getStudentsData() {
    try {
      this.loading = true;
      this.loaded = false;
      const response = yield ApiRequest.request("5c41950b0f0000543fe7b8a2", { action: "GET" });
      let students = response.dataList.map((item) => {
        item.circleColor = getRandomColor();

        return item;
      });
      this.students = students;
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
}

decorate(Students, {
  loaded: observable,
  loading: observable,
  students: observable,
  error: observable,
  errorMessage: observable,
});

export default new Students();

