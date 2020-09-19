import React from "react";

const Contact = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="">
              <form>
                <div class="form-group mb-3">
                  <label for="exampleFormControlInput1">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    // id="exampleFormControlInput1"
                    placeholder="Enter your Full Name"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleFormControlInput1">Email address</label>
                  <input
                    type="email"
                    class="form-control "
                    // id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleFormControlInput1">Phone Number</label>
                  <input
                    type="phone"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="03097633333333"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="exampleFormControlInput1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                
                <div class="form-group mb-3">
                  <label for="exampleFormControlTextarea1">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                  <div class="col-12 mt-3">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>

                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
