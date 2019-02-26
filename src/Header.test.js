import React from 'react';
import { shallow } from 'enzyme';
import Header from "./Header"

const mockTogglePage = jest.fn();
const mockSignOut = jest.fn();
const MockUser = {};

describe("Header", ()=> {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Header togglePage={mockTogglePage}
              user={MockUser}
              signOut={mockSignOut}/>
    )
  })

  it("should match Snap shot", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should change the page when toggle page is invoke", () => {
    wrapper.find("input").at(0).simulate("click", { target: { value: "home"}})
    expect(mockTogglePage).toHaveBeenCalled()
  })

  it("should change the page when toggle page is invoke", () => {
    wrapper.find("input").at(2).simulate("click")
    expect(mockSignOut).toHaveBeenCalled()
  })

  it("should hide buttons if no player is sign in", () => {
    const MockUser = undefined;
    wrapper = shallow(
      <Header togglePage={mockTogglePage}
              user={MockUser}
              signOut={mockSignOut}/>
    )
    expect(wrapper).toMatchSnapshot()
  })
})