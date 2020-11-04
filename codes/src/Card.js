import { Component } from 'react';
import tw, { styled } from 'twin.macro';

const CardWrapper = tw.div`p-4 shadow-lg max-w-md border-2 bg-white`;

const H2 = styled.h2`
  ${tw`text-xl`}
`;

const Button = styled.button`
  ${tw`p-2 rounded bg-blue-500 hover:bg-blue-700 font-semibold text-white`}
`;

class Card extends Component {
  render() {
    return (
      <div>
        <CardWrapper>
          <figure>
            <img src={this.props.image} alt={`${this.props.title}`} />
          </figure>
          <H2>{this.props.title}</H2>
          <Button>Go to this website</Button>
          <div>{this.props.description}</div>
        </CardWrapper>
      </div>
    );
  }
}

Card.defaultProps = {
  image: "https://picsum.photos/640/360",
  title: "This card has no title.",
  description: "This card has no description."
}
export default Card;
