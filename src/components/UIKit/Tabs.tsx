import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { colors } from '../helpers/colors';

const underline = css`
  @keyframes change-width {
    0% {
      width: 0;
    }
    100% {
      width: 50%;
    }
  }

  &::after,
  &::before {
    content: '';
    display: block;
    height: 4px;
    background-color: ${colors.purple};
    position: absolute;
    bottom: -2px;
    width: 50%;
    animation: change-width 0.25s ease 1;
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
type StyledTabPaneTitleType = {
  active: boolean;
  marginLeft: boolean;
  jsx: boolean;
};

const StyledTabPaneTitle = styled.div<StyledTabPaneTitleType>`
  width: 200px;
  position: relative;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  height: 40px;
  cursor: pointer;
  transition: color 0.5s ease;
  color: ${({ active }) => (active ? colors.purple : colors.grey300)};
  margin-left: ${({ marginLeft }) => (marginLeft ? 'auto' : 0)};
  ${({ active, jsx }) => (active && !jsx ? underline : '')};
`;

const StyledTabPaneContent = styled.div`
  padding: 20px;
`;

type TabPaneProps = {
  tabName?: object | string | null;
  id: string;
  active: boolean;
  marginLeft?: boolean;
  children?: any
  handleChangeTab?: (id: string, tabName: object | string | null) => void;
};

export const TabPane = ({
  tabName,
  handleChangeTab,
  id,
  active,
  marginLeft = false
}: TabPaneProps) => {
  const jsx = tabName instanceof Object;

  return (
    <StyledTabPaneTitle
      jsx={jsx}
      active={active}
      marginLeft={marginLeft}
      onClick={() => {
        if(handleChangeTab && tabName) handleChangeTab(id, tabName) 
      }}
    >
      {tabName}
    </StyledTabPaneTitle>
  );
};

type TabsProps = {
  id?: string
  tabName?: object
  onChange?: (id: number | string) => void
  children?: any
};
export class Tabs extends Component<TabsProps> {
  state = {
    activeTab: 0
  };

  handleChangeTab = (id:string | number, tabName: object | string | null) => {
    if (!(tabName instanceof Object)) {
      this.setState({
        activeTab: id
      });
    }
    if (id <= 1) {
      if(this.props.onChange) this.props.onChange(`${id}`);
    }
  };

  render() {
    const { children } = this.props;
    const { activeTab } = this.state;

    return (
      <div>
        <StyledTabs>
          {React.Children.map(children, (child:any, id) => {

          child && (<TabPane
                    tabName={child.props.tabName}
                    marginLeft={child.props.marginLeft}
                    handleChangeTab={this.handleChangeTab}
                    active={this.state.activeTab === id}
                    id={`${id}`}
                  >
                    {child.props.children}
                  </TabPane>)
                  }
          )}
        </StyledTabs>
        <StyledTabPaneContent>
          {React.Children.count(children) > 1
            ? children[activeTab].props.children
            : children.props.children}
        </StyledTabPaneContent>
      </div>
    );
  }
}

TabPane.defaultProps = {
  tabName: null,
  id: 0,
  active: false,
  marginLeft: false
};
