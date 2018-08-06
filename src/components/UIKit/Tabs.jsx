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
  cursor: pointer; 
`;

const StyledTabPaneContent = styled.div`

`;

export const TabPane = ({
  tabName,
  handleChangeTab,
  id,
  children,
}) => {
  return (
    <StyledTabPane>
      <StyledTabPaneTitle onClick={() => handleChangeTab(id, children)}>
        {tabName}
      </StyledTabPaneTitle>
    </StyledTabPane>
  );
};

export class Tabs extends Component {
  state = {
    activeTab: 0,
    ch: this.props.children[0].props.children,
  };
  
  handleChangeTab = (id, children) => {
    this.setState({
      activeTab: id,
      ch: children,
    });
  };

  handleChangeContent = (children) => {
    this.setState({
      ch: children,
    });
  }
  
  render() {
    const { children } = this.props;
    console.log(this.state.ch);

    return (
      <div>
        <StyledTabs>
          {React.Children.map(children, (child, id) => {
            return <TabPane tabName={child.props.tabName} handleChangeTab={this.handleChangeTab} id={id}>{child.props.children}</TabPane>;
          })}
        </StyledTabs>
        <div>
          {this.state.ch}
        </div>
      </div>
    );
  }
}
