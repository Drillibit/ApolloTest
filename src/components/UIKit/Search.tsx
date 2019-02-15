import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RootClose from 'react-overlays/lib/RootCloseWrapper';

import { colors } from '../../components/helpers/colors';
import { SearchIcon } from '../../assets/img/search-icon';

interface SearchStType {
  isOpen: boolean
}

const SearchStyled = styled.div`
  position: relative;
  width: ${({ isOpen }: SearchStType) => (isOpen ? '400px' : '60px')};
  height: 56px;
  padding: 12px;
  transition: width .35s ease, background .35s ease;
  background: ${({ isOpen }) => (isOpen ? 'white' : 'transparent')};
  border-radius: 5px;
  box-shadow: ${({ isOpen }) => (isOpen ? '0 2px 7px 0 rgba(0, 0, 0, 0.1)' : 'none')};
`;

const StyledIconButton = styled.button`
  display: block;
  position: absolute;
  top: 50%;
  left: 10px;
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  appearance: none;
  cursor: pointer;
  outline: none;
  transform: translateY(-50%);
`;

const StyledIcon = styled(SearchIcon)`
  display: block;
  width: 100%;
`;

const InputStyled = styled.input`
  display: inline-block;
  width: 100%;
  padding: 0 0 0 60px;
  font-size: 20px;
  line-height: 1.6;
  vertical-align: middle;
  background-color: transparent;
  border: none;
  outline: none;
`;

const UlStyled = styled.ul`
  background-color: #ffffff;
  margin: 20px 0 0 -11px;
  padding: 0;
  width: 500px;
  border-radius: 2px;
  box-shadow: 0 12px 75px 2px rgba(0, 0, 0, 0.41), 0 2px 9px 1px rgba(0, 0, 0, 0.28);
`;

const LiStyled = styled.li`
  padding: 7px 0 11px 24px;
  min-height: 25px;
  font-size: 20px;
  list-style-type: none;
`;

const TmpStyled = styled(Link)` 
  text-decoration: none;
  outline: none;
  &:focus > li > span {
    color: ${colors.purple};
    border-bottom: ${colors.purple} 2px solid;
  }
`;

const StyledText = styled.span`
  color: ${colors.grey500};
  padding-bottom: 4px;
  ${TmpStyled}:hover & {
    color: ${colors.purple};
    border-bottom: ${colors.purple} 2px solid;
  };
`;

const searchPhrase = 'Найти по названию, жанру, актеру';

type SearhState = {
  isOpen: boolean,
  position: number
}


type SearchStateProps = {
  clearSearch: () => void,
  onChange: (event: { target: { value: string } }) => void,
  value: string,
  result: [{ id: number | string, title: string }]
}

export class Search extends PureComponent<SearchStateProps, SearhState> {
  private activeLink: React.RefObject<HTMLUListElement>
  private textInput: React.RefObject<HTMLInputElement>
  constructor(props:SearchStateProps) {
    super(props)
    this.state = {
      isOpen: false,
      position: -1
    };
  
    this.activeLink = React.createRef();
    this.textInput = React.createRef();
  }

  onClose = () => {
    const { clearSearch, onChange } = this.props;
    if (this.state.isOpen === true) {
      clearSearch();
      onChange({ target: { value: '' } });
      this.setState({
        isOpen: false,
        position: -1
      });
    }
  }

  setFocus = (pos:number) => {
    if (pos < 0) {
      const input = this.textInput.current;
      if(input) input.focus();
    } else {
      const result = this.activeLink.current;
      if(result) {
        if (pos >= result.childNodes.length) {
          this.setState({
            position: result.childNodes.length
          });
          return null;
        }
        (result.childNodes as NodeListOf<HTMLLinkElement>)[pos].focus();
      }
    }

    return null;
  };

  handleKeyDown = (e: React.KeyboardEvent) => {
    const { position } = this.state;
    if (!this.activeLink.current) {
      return null;
    }

    if ([38, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }

    if (this.state.isOpen) {
      if (e.keyCode === 38) {
        this.setState(prevState => ({
          position: (prevState.position - 1 < -1) ? -1 : prevState.position - 1
        }));
        this.setFocus((position - 1 < -1) ? -1 : position - 1);
      } else if (e.keyCode === 40) {
        this.setState(prevState => ({
          position: prevState.position + 1
        }));
        this.setFocus(position + 1);
      }
    }

    return false;
  }

  toggleOpen = () => {
    const { isOpen } = this.state;
    if (!isOpen === true) {
      const input = this.textInput.current
      if(input) input.focus();  
    }

    this.setState({
      isOpen: !isOpen
    });
  }

  render() {
    const {
      onChange, value, result
    } = this.props;

    const { isOpen } = this.state;
    return (
      <RootClose onRootClose={this.onClose}>
        <SearchStyled isOpen={isOpen} onKeyDown={this.handleKeyDown}>
          <StyledIconButton onClick={this.toggleOpen}>
            <StyledIcon color={isOpen ? colors.grey500 : 'white'} />
          </StyledIconButton>
          <InputStyled
            type="text"
            ref={this.textInput}
            placeholder={searchPhrase}
            onChange={onChange}
            value={value}
          />
          {(isOpen && result.length > 0) && (
            <UlStyled ref={this.activeLink}>
              {result.slice(0, 10).map(({ title, id }, index) => (
                <TmpStyled
                  id={`${index}`}
                  key={id}
                  to={`/movie/${id}`}
                  onClick={this.onClose}
                >
                  <LiStyled><StyledText>{title}</StyledText></LiStyled>
                </TmpStyled>))}
            </UlStyled>)
          }
        </SearchStyled>
      </RootClose>
    );
  }
}

