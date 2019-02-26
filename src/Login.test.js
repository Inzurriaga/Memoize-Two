import React from 'react';
import { shallow } from 'enzyme';
import Login from "./Login"

const mockCreateNewAccout = jest.fn()
const mockUsers = [{"name":"duy","password":"duy","completed":[1,2,5]},{"name":"gabriel","password":"gabriel","completed":[1,2,5]},{"name":"isaac","password":"isaac","completed":[1,2]}]
const mockLoginToAccount = jest.fn()

describe("Login", ()=> {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Login createNewAccount={mockCreateNewAccout} 
              users={mockUsers} 
              loginToAccount={mockLoginToAccount}/>
    )
  })
  it("should  match Snap shot", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should have a default state", () => {
    expect(wrapper.state()).toEqual({
        toggleLogin: "rotateY(0deg)"
    })
  })

  it("should have state change when toggle function is invoke", () => {
    expect(wrapper.state()).toEqual({
      toggleLogin: "rotateY(0deg)"
    })
    wrapper.instance().toggleLoginOption()
    expect(wrapper.state()).toEqual({
      toggleLogin: "rotateY(180deg)"
    })
  })
})