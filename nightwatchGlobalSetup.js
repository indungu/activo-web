import chromedriver from "chromedriver";

export default {
  default: {
    before: done => {
      chromedriver.start();
      done();
    },
    after: done => {
      chromedriver.stop();
      done();
    }
  }
};
