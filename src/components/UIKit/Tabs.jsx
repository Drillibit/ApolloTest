import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
import styled, { css } from 'styled-components';

import { colors } from '$components/helpers/colors';

/* eslint-disable */

const underline = css`
  @keyframes change-width {
    0% {
      width: 0;
    }
    100% {
      width: 50%;
    }
  }

  &::after, &::before {
    content: '';
    display: block;
    height: 4px;
    background-color: ${colors.purple};
    position: absolute;
    bottom: -2px;
    width: 50%;
    animation: change-width 0.5s ease 1;
  }

  &::before {
    left: 50%;
  }

  &::after {
    right: 50%;
  }
`;

const StyledTabs = styled.div`
  border-bottom: 2px solid #dfdfdf;
  display: flex;
`;

const StyledTabPaneTitle = styled.div`
  width: 200px;
  position: relative;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  height: 40px;
  cursor: pointer;
  transition: color 0.5s ease;
  color: ${({ active }) => (active ? colors.purple : colors.grey300)};
  ${({ active, jsx }) => (active && !jsx ? underline : '')};
`;

const StyledTabPaneContent = styled.div`
  padding: 20px;
`;

export const TabPane = ({
  tabName,
  handleChangeTab,
  id,
  children,
  active,
}) => {
  const jsx = tabName instanceof Object;
  return (
    <StyledTabPaneTitle jsx={jsx} active={active} onClick={() => handleChangeTab(id, children, tabName)}>
      {tabName}
    </StyledTabPaneTitle>
  );
};

export class Tabs extends Component {
  state = {
    activeTab: 0,
    ch: this.props.children[0].props.children,
  };

  handleChangeTab = (id, children, tabName) => {
    if (!(tabName instanceof Object)){
      this.setState({
        activeTab: id,
        ch: children,
      });
    }

    this.props.onChange(id);
  };

  handleChangeContent = (children) => {
    this.setState({
      ch: children,
    });
  }

  render() {
    const { children } = this.props;
    // console.log(this.state.activeTab);

    return (
      <div>
        <StyledTabs>
          {React.Children.map(children, (child, id) => (
            <TabPane
              tabName={child.props.tabName}
              handleChangeTab={this.handleChangeTab}
              active={this.state.activeTab === id}
              id={id}
            >
              {child.props.children}
            </TabPane>
          ))}
        </StyledTabs>
        <StyledTabPaneContent>
          {this.state.ch}
        </StyledTabPaneContent>
      </div>
    );
  }
}

TabPane.propTypes = {
  tabName: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  id: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  handleChangeTab: func,
  active: PropTypes.bool,
};

TabPane.defaultProps = {
  active: false,
  tabName: '',
  id: 0,
  handleChangeTab: f => f,
  children: '',
};

Tabs.propTypes = {
  activeTab: PropTypes.number,
  handleChangeTab: func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

Tabs.defaultProps = {
  activeTab: 0,
  handleChangeTab: f => f,
};
