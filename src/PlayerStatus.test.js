import React from 'react';
import { shallow } from 'enzyme';
import PlayerStatus from "./PlayerStatus"

const mockUser = {"name":"gabriel","password":"gabriel","completed":[1,2,5]}

describe("PlayerStatus", ()=> {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <PlayerStatus user={mockUser}/>
        )
    })

    it("shold match the snapshot", () => {
        expect(wrapper).toMatchSnapshot()
    })
})