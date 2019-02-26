import React from 'react';
import { shallow } from 'enzyme';
import App from "./App"

describe("App", ()=> {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  })

  it("should match Snap shot", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should have a default state", () => {
    expect(wrapper.state()).toEqual({
      users: [],
      currentuser: undefined,
      page: "home",
      Questiontoggle: false,
      selectedQuestion: {}
    })
  })

  it("should add user to array and set currentuser when createaccount is invoke", () => {
    expect(wrapper.state("currentuser", "users")).toEqual(undefined, [])
    wrapper.instance().createNewAccount(
      {"name":"gabriel","password":"gabriel","completed":[1,2,5]})
      expect(wrapper.state("currentuser", "users")).toEqual({"name":"gabriel","password":"gabriel","completed":[1,2,5]}, [{"name":"gabriel","password":"gabriel","completed":[1,2,5]}])
  })

  it("should add user to currentuser when login is invoke", () => {
    expect(wrapper.state("currentuser")).toEqual(undefined)
    wrapper.instance().loginToAccount({"name":"gabriel","password":"gabriel","completed":[1,2,5]})
    expect(wrapper.state("currentuser")).toEqual({"name":"gabriel","password":"gabriel","completed":[1,2,5]})
  })

  it("should add user to currentuser when login is invoke", () => {
    expect(wrapper.state("currentuser", "page")).toEqual(undefined, "home")
    wrapper.instance().signOut()
    expect(wrapper.state("currentuser", "page")).toEqual(undefined, "home")
  })

  it("should toggle page when toggle page is invoke", () => {
    expect(wrapper.state("Questiontoggle", "page")).toEqual(false, "home")
    wrapper.instance().togglePage("train")
    expect(wrapper.state("Questiontoggle", "page")).toEqual(false, "train")
  })

  it("should toggle to the question when toggle question is invoke", () => {
    expect(wrapper.state("Questiontoggle", "selectedQuestion")).toEqual(false, {})
    wrapper.instance().toggleToQuestion({title: "number return 5", type: "number", instructions: "return the number 5", answer: 5, startup: "function number() {\n//code here \n} \n\n number()", id: 1
  })
    expect(wrapper.state("Questiontoggle", "page")).toEqual(true, {title: "number return 5", type: "number", instructions: "return the number 5", answer: 5, startup: "function number() {\n//code here \n} \n\n number()", id: 1
  })
  })

})