import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List';

describe('<List />', () => {
  
    it('renders without crashing', ()=> {
        const div = document.createElement('div');
        ReactDom.render(<List />, div);
        ReactDom.unmountComponentAtNode(div);

    });

    it('renders UI as expected', () => {
        const tree = renderer.create(<List />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

