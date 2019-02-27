import React from 'react';
import { shallow } from 'enzyme';
import QuestionContainer from "./QuestionContainer"

const mockUser = {"name":"gabriel","password":"gabriel","completed":[1,2,5]};
const mockToggleToQuestion = jest.fn();
const mockSelectedQuestion = { title: "number return 5", type: "number", instructions: "return the number 5", answer: 5, startup: "function number() {\n//code here \n} \n\n number()", id: 1 };

describe("QuestionContainer", ()=> {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <QuestionContainer questionSelected={mockSelectedQuestion}
                          user={mockUser}
                          toggleToQuestion={mockToggleToQuestion}/>
    )
  })
  it("should match Snap shot", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should invoke question when li element is click", () => {
    wrapper.find("li").at(0).simulate("click")
    expect(mockToggleToQuestion).toHaveBeenCalled()
  })

  it("should show the li as green if player already answer the question", () => {
    let mockUser = {"name":"gabriel","password":"gabriel","completed":[]};
    wrapper = shallow(
      <QuestionContainer questionSelected={mockSelectedQuestion}
                          user={mockUser}
                          toggleToQuestion={mockToggleToQuestion}/>
    )
    expect(wrapper).toMatchSnapshot()
  })
})