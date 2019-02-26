import React from 'react';
import { shallow } from 'enzyme';
import SignIn from "./SignIn"

const mockUsers = [{name:"duy",password:"duy",completed:[1,2,5]},{name:"gabriel",password:"gabriel",completed:[1,2,5]},{name:"isaac",password:"isaac",completed:[1,2]}]
const mockToggleLoginOption = jest.fn()
const mockLoginToAccount = jest.fn()

describe("SignIn", ()=> {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <SignIn toggle={mockToggleLoginOption} 
              users={mockUsers} 
              loginToAccount={mockLoginToAccount}/>
    )
  })

  it("should match a Snap shot", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should have a default state", () => {
    expect(wrapper.state()).toEqual({
        username: "",
        password: ""
    })
  })

  it("should change the username state when text is type into the username input", () => {
    expect(wrapper.state("username")).toEqual("")
    wrapper.find("input").at(1).simulate("change", {target: {value: "gabriel"}})
    expect(wrapper.state("username")).toEqual("gabriel")
  })

  it("should change the password state when text is type into the password input", () => {
    expect(wrapper.state("password")).toEqual("")
    wrapper.find("input").at(2).simulate("change", {target: {value: "gabriel"}})
    expect(wrapper.state("password")).toEqual("gabriel")
  })

  it("should invoke the toggle function when button is click", () => {
    wrapper.find("input").at(0).simulate("click")
    expect(mockToggleLoginOption).toHaveBeenCalled()
  })

  it("should invoke the submit function when button is click", () => {
    wrapper.find("input").at(1).simulate("change", {target: {value: "gabriel"}})
    wrapper.find("input").at(2).simulate("change", {target: {value: "gabriel"}})
    wrapper.find("form").simulate("submit", {preventDefault: () => {}})
    expect(mockLoginToAccount).toHaveBeenCalled()
  })
})