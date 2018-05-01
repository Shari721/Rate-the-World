import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
// import "./Card.css";

const Example = (props) => {
  return (
    <div>
      <Card>
        <Row>
          <Col md={4}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Rate Now!</Button>
        </CardBody>
        </Col>
        <Col md={4}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Rate Now!</Button>
        </CardBody>
        </Col>
        <Col md={4}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Rate Now!</Button>
        </CardBody>
        </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Card;

// Card.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   inverse: PropTypes.bool,
//   color: PropTypes.string,
//   body: PropTypes.bool,
//   className: PropTypes.string
// };

// CardBody.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardColumns.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardDeck.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardFooter.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardGroup.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardHeader.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardImg.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string,
//   // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
//   top: PropTypes.bool,
//   bottom: PropTypes.bool
// };

// CardImgOverlay.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardLink.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string,
//   // ref will only get you a reference to the CardLink component, use innerRef to get a reference to the DOM element (for things like focus management).
//   innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
// };

// CardSubtitle.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardText.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };

// CardTitle.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
// const Card = props => (
//   <div
//     className="card"
//     style={{
//       backgroundImage: props.image ? `url(${props.image})` : "none"
//     }}
//   >
//     {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
//     <CardBtn
//       style={{ opacity: props.image ? 1 : 0 }}
//       onClick={props.handleBtnClick}
//       data-value="pass"
//     />
//     <CardBtn
//       style={{ opacity: props.image ? 1 : 0 }}
//       onClick={props.handleBtnClick}
//       data-value="pick"
//     />
//   </div>
// );


