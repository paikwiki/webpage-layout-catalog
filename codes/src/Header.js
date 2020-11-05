import { Component } from 'react';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';

const SiteHeadingText = tw.h1`pb-4 text-blue-500 text-2xl`;

class Header extends Component {
  render() {
    return (
      <header css={tw`text-center`}>
        <SiteHeadingText>{this.props.headingText}</SiteHeadingText>
      </header>
    );
  }
}

export default Header;
