import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';

describe('<Card/>', () => {

    it('renders without caching', ()=> {
        const div = document.createElement('div');
        ReactDom.render(<Card/>, div);
        ReactDom.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const tree = renderer.create(<Card />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});