import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
import styled, { css } from 'styled-components';

import { colors } from '$components/helpers/colors';

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
    <StyledTabPaneTitle
      jsx={jsx}
      active={active}
      onClick={() => handleChangeTab(id, children, tabName)}
    >
      {tabName}
    </StyledTabPaneTitle>
  );
};

export class Tabs extends Component {
  constructor(props) {
    super(props);

    const { children } = this.props;

    const ch = React.Children.count(children) > 1 ?
      React.Children.toArray(children)[0] :
      React.Children.only(children);

    this.state = {
      activeTab: 0,
      ch: ch.props.children,
    };
  }

  handleChangeTab = (id, children, tabName) => {
    if (!(tabName instanceof Object)) {
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
  tabName: '',
  id: 0,
  children: PropTypes.node,
  handleChangeTab: f => f,
  active: false,
};

Tabs.propTypes = {
  onChange: func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

Tabs.defaultProps = {
  onChange: f => f,
  children: PropTypes.node,
};
