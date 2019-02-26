import React from 'react';
import { shallow } from 'enzyme';
import RankContainer from "./RankContainer"


const Mockusers = [{"name":"duy","password":"duy","completed":[1,2,5]},{"name":"gabriel","password":"gabriel","completed":[1,2,5]},{"name":"isaac","password":"isaac","completed":[1,2]}]

describe("RankContainer", ()=> {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <RankContainer users={Mockusers}/>
        )
    })

    it("should pass test", () => {
        expect(wrapper).toMatchSnapshot()
    })
})