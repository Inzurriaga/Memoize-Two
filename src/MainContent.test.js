import React from 'react';
import { shallow } from 'enzyme';
import MainContent from "./MainContent"

const mockPage = "home";
const mockUser = {"name":"gabriel","password":"gabriel","completed":[1,2,5]};
const mockUsers = [{"name":"duy","password":"duy","completed":[1,2,5]},{"name":"gabriel","password":"gabriel","completed":[1,2,5]},{"name":"isaac","password":"isaac","completed":[1,2]}];
const mockToggle = true;
const mockToggleFunction = jest.fn();
const mockSelectedQuestion = { title: "number return 5", type: "number", instructions: "return the number 5", answer: 5, startup: "function number() {\n//code here \n} \n\n number()", id: 1 };

describe("MainContent", ()=> {
  let wrapper;
  beforeEach(() => {
      wrapper = shallow(
        <MainContent page={mockPage}
                    user={mockUser}
                    users={mockUsers}
                    Questiontoggle={mockToggle}
                    toggleToQuestion={mockToggleFunction}
                    selectedQuestion={mockSelectedQuestion}/>)
  })

  it("should have a snapshot", () => {
      expect(wrapper).toMatchSnapshot()
  })
})