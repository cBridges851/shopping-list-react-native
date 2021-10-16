/**
 * @jest-environment jsdom
 */

import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { ReactWrapper, mount } from "enzyme";
import { Header } from "../Header";
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() })

describe("Using the Header component", () => {
    let props = {
        title: "Title With a Head"
    };
    let wrapper = mount(<Header title={props.title}/>);

    test("it renders correctly", () => {
        renderer.create(<Header title={props.title}/>)
    })
    describe("given the title 'Title With a Head'", () => {
        test("then it should render this title", () => {
            let header = wrapper.find("Header");
            expect(header.text()).toBe("Title With a Head");
        });
    });

    describe("given the initial props", () => {
        describe("when the props are updated", () => {
            test("then it should render the updated title", () => {
                wrapper.setProps({
                    title: "Title Without a Head"
                });

                let header = wrapper.find("Header");
                expect(header.text()).toBe("Title Without a Head");
            });
        })
    });
});