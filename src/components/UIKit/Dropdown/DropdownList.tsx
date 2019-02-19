import React, { MouseEvent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../helpers/colors';
import { Icon } from '../Icon';

const StyledDropdownContent = styled.div`
  display: flex;
  border-radius: 2px;
  flex-direction: column;
  background-color: #ffffff;
  padding-right: 24px;
  box-shadow: 0 12px 75px 2px rgba(0, 0, 0, 0.41), 0 2px 9px 1px rgba(0, 0, 0, 0.28);
  padding-left: 16px;
  top: 32px;
  right: 32px;
  position: absolute;
`;

const StyledDropGroup = styled.div`
  display: flex;
  align-items: center;
`;

type StyledCheckedType = {
  active: string
};

const StyledChecked = styled(Icon)<StyledCheckedType>`
  width: 14px;
  height: 14px;
  margin-right: 4px;
  visibility: ${({ active }) => active !== 'true' && 'hidden'};
`;

const StyledDropdownBtn = styled.button`
  white-space:nowrap;
  border: none;
  color: ${colors.grey500};
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 8px;
  border: 1px solid transparent;
  text-align: left;
  padding: 0;
  cursor: pointer;
  border: 1px solid transparent;
  display: inline-block;
  padding-bottom: 4px;
  transition: all ease .2s;
  outline: none;
  &:hover {
    border-bottom: 1px solid;
    color: ${colors.purple};
  }
`;

type DropdownListPorps = {
  options?: [{ 
    id: string,
    name: string
   }],
   closeDropdown: (e:any) => void,
   activeOption: {
     id?: number | string
   }
}
export const DropdownList = ({ options, closeDropdown, activeOption }:DropdownListPorps) => (
  <StyledDropdownContent>
    {options && options.map(({ name, id }) => (
      <StyledDropGroup key={id}>
        <StyledChecked size="sm" color="gray300" icon="check" active={(id === activeOption.id).toString()} />
        <StyledDropdownBtn onClick={closeDropdown} value={id}>
          {name}
        </StyledDropdownBtn>
      </StyledDropGroup>
      )
    )}
  </StyledDropdownContent>
);

