import { Component } from 'react';
import tw from 'twin.macro';

const CardWrapper = tw.div`p-4 shadow-lg max-w-md border-2 bg-white`;

class Card extends Component {
  render() {
    return (
      <div>
        <CardWrapper>
          <div>Featured Image</div>
          <h2>{this.props.text}</h2>
          <button>Go to this website</button>
          <div>Description</div>
        </CardWrapper>
      </div>
    );
  }
}

Card.defaultProps = {
  text: 'This card has no text.'
}
export default Card;
