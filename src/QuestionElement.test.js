import React from 'react';
import { shallow } from 'enzyme';
import QuestionElement from "./QuestionElement"

const mockUser = {"name":"gabriel","password":"gabriel","completed":[1,2,5]};
const mockUsers = [{"name":"duy","password":"duy","completed":[1,2,5]},{"name":"gabriel","password":"gabriel","completed":[2,5]},{"name":"isaac","password":"isaac","completed":[1,2]}];
const mockSelectedQuestion = { title: "number return 5", type: "number", instructions: "return the number 5", answer: 5, startup: "function number() {\n//code here \n} \n\n number()", id: 1 };

describe("QuestionElement", ()=> {
  let wrapper; 
  beforeEach(() => {
    wrapper = shallow(
      <QuestionElement question={mockSelectedQuestion}
      users={mockUsers}
      user={mockUser} />
    )
  })

  it("should match snap shot", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should have default state", () => {
    expect(wrapper.state()).toEqual({
      userinput: "function number() {\n//code here \n} \n\n number()",
      userOutcome: "",
      rightAnswer: "",
      correct: ""
  })
  })

  it("should change the user input on change on the code editor", () => {
    expect(wrapper.state("userinput")).toEqual( "function number() {\n//code here \n} \n\n number()")
    wrapper.find(".editor").simulate("change",  "hello")
    expect(wrapper.state("userinput")).toEqual( "hello")
  })

  it("should submit when input is click", () => {
    wrapper.find(".editor").simulate("change",  "function number() {\nreturn 5 \n} \n\n number()")
    wrapper.find("input").simulate("click")
  })
})