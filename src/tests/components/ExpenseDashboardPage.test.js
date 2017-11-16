import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExportDashboardPage from '../../components/ExpenseDashboardPage';

test('should render ExportDashboardPage correctly', () => {
    const wrapper = shallow(<ExportDashboardPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});