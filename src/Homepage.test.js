import React from 'react';
import { shallow } from 'enzyme';
import HomePage from "./Homepage"

const mockUser = {"name":"gabriel","password":"gabriel","completed":[1,2,5]}
const mockUsers = [{"name":"duy","password":"duy","completed":[1,2,5]},{"name":"gabriel","password":"gabriel","completed":[1,2,5]},{"name":"isaac","password":"isaac","completed":[1,2]}]

describe("HomePage", ()=> {
  let wrapper;
  beforeEach(() => {
      wrapper = shallow(
        <HomePage users={mockUsers}
                    user={mockUser}/>
      )
  })

  it("should have a snapshot", () => {
      expect(wrapper).toMatchSnapshot();
  })
})