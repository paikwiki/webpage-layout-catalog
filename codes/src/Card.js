import { Component } from 'react';
import tw, { styled } from 'twin.macro';
import { css } from 'styled-components/macro'

const CardWrapper = tw.div`p-4 pb-8 shadow-lg max-w-md border-2 bg-white sm:self-center md:self-start`;

const H2 = styled.h2`
  ${tw`font-semibold`}
`;
const Button = styled.button`
  ${tw`px-2 rounded bg-blue-500 hover:bg-blue-700 text-white`}
`;

class Card extends Component {
  render() {
    return (
      <CardWrapper>
        <figure css={tw`pb-4`}>
          <img src={this.props.image} alt={`${this.props.title}`} />
        </figure>
        <div css={tw`px-3`}>
          <div css={tw`pb-2 flex flex-row`}>
            <H2 css={tw`leading-8 flex-auto`}>{this.props.title}</H2>
            <Button>Go to this website</Button>
          </div>
          <div css={tw`h-12`}>
            <p>{this.props.description}</p>
          </div>
        </div>
      </CardWrapper>
    );
  }
}

Card.defaultProps = {
  image: "https://picsum.photos/640/360",
  title: "This card has no title.",
  description: "This card has no description."
}
export default Card;
