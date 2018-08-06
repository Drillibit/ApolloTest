import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTabs = styled.div`
  border-bottom: 2px solid #dfdfdf;
  display: flex;
`;

const StyledTabPane = styled.div`
  width: 200px;
`;

const StyledTabPaneTitle = styled.div`
  text-align: center;
  font-size: 20px;
  line-height: 40px; 
`;

const StyledTabPaneContent = styled.div`

`;

const TabPane = ({
  tabName,
  children,
  handleChangeTab,
  id
}) => {
  console.log(id);

  return (
    <StyledTabPane>
      <StyledTabPaneTitle onClick={() => handleChangeTab(id)}>
        {tabName}
      </StyledTabPaneTitle>
      <StyledTabPaneContent>
        {children}
      </StyledTabPaneContent>
    </StyledTabPane>
  );
};

export class Tabs extends Component {
  state = {
    activeTab: 0,
  };

  handleChangeTab = (id) => {
    this.setState({
      activeTab: id,
    });
  };

  render() {
    console.log(this.state.activeTab);
    return (
      <StyledTabs>
        <TabPane tabName="Сейчас в кино" handleChangeTab={this.handleChangeTab} id={0}>
          bla bla
        </TabPane>
        <TabPane tabName="Топ 100" handleChangeTab={this.handleChangeTab} id={1}>
          bla bla
        </TabPane>
      </StyledTabs>
    );
  }
}
