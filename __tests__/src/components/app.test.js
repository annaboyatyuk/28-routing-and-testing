import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../../src/components/app/index';
import NoteCreate from '../../../src/components/note-create-form/index';
import Dashboard from '../../../src/components/dashboard/index';



xdescribe('<App/> (Enzyme Test)', () => {
  it('is alive at application start', () => {
    let app = shallow(<App/>);
    expect(app.find('main').exists()).toBeTruthy();
  });
});


describe('<App/> (Snapshot Test', () => {
  it('renders', () => {
    const component = renderer.create(
      <App />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Note create form snapshot test', () => {
    const component = renderer.create(
      <NoteCreate />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('Dashboard form snapshot test', () => {
    const component = renderer.create(
      <Dashboard />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

