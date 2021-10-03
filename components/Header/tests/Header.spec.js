import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { ReactWrapper, mount } from "enzyme";
import { Header } from "../Header";
Enzyme.configure({ adapter: new Adapter() })

describe("Using the Header component", () => {
    let props = {
        title: "Title With A Head"
    };
    let wrapper = mount(<Header title={props.title}/>);
    
    describe("given the required props", () => {
        test("then it should render the header", () => {
            let header = wrapper.find("Header");
            expect(header.text()).toBe("Title With A Head");
        });
    });

    describe("given the initial props", () => {
        describe("when the props are updated", () => {
            test("then it should render the updated title", () => {
                wrapper.setProps({
                    title: "Title Without a Head"
                });

                expect(header.text()).toBe("Title Without A Head");
            });
        })
    });
});