import React from 'react';
import { shallow } from 'enzyme';
import TrainPage from "./TrainPage"

const mockUser = {"name":"gabriel","password":"gabriel","completed":[1,2,5]};
const mockUsers = [{"name":"duy","password":"duy","completed":[1,2,5]},{"name":"gabriel","password":"gabriel","completed":[1,2,5]},{"name":"isaac","password":"isaac","completed":[1,2]}];
const mockToggle = false;
const mockToggleFunction = jest.fn();
const mockSelectedQuestion = { title: "number return 5", type: "number", instructions: "return the number 5", answer: 5, startup: "function number() {\n//code here \n} \n\n number()", id: 1 };


describe("TrainPage", ()=> {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <TrainPage users={mockUsers}
                    user={mockUser}
                    Questiontoggle={mockToggle}
                    toggleToQuestion={mockToggleFunction}
                    selectedQuestion={mockSelectedQuestion}/> 
      )
    })

    it("should match Snap Shot", () => {
      expect(wrapper).toMatchSnapshot()
    })

    it("should which to the question element snap shot", () => {
      const mockToggle = true;
      wrapper = shallow(
        <TrainPage users={mockUsers}
                    user={mockUser}
                    Questiontoggle={mockToggle}
                    toggleToQuestion={mockToggleFunction}
                    selectedQuestion={mockSelectedQuestion}/> 
      )
    })
})