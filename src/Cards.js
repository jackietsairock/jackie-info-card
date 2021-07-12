import React, { Component } from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";

import './card.css';

class Cards extends Component {
  goToPagePhotograph=()=>{
    window.location.href = "https://ok.jackie.com.tw/product.php?category2=2&pageNameCh=%E5%BD%B1%E5%83%8F%E5%90%88%E6%88%90&pageNameEn=Photograph&categoryType=2";
  };
  goToPagelogo=()=>{
    window.location.href = "https://ok.jackie.com.tw/product.php?category2=3&pageNameCh=LOGO%E8%A8%AD%E8%A8%88&pageNameEn=LOGO&categoryType=2";
  };
  goToPageNameCard=()=>{
    window.location.href = "https://ok.jackie.com.tw/product.php?category2=5&pageNameCh=%E5%90%8D%E7%89%87%E8%A8%AD%E8%A8%88&pageNameEn=Name%20Card&categoryType=2";
  };
  goToPageGraphicDesign=()=>{
    window.location.href = "https://ok.jackie.com.tw/product.php?category2=6&pageNameCh=%E5%B9%B3%E9%9D%A2%E7%BE%8E%E7%B7%A8&pageNameEn=Graphic&categoryType=2";
  };
  goToPageWebDesign=()=>{
    window.location.href = "https://ok.jackie.com.tw/product.php?category2=7&pageNameCh=%E7%B6%B2%E7%AB%99%E8%A8%AD%E8%A8%88&pageNameEn=Web%20Design&categoryType=3";
  };
  goToPageLandingPage=()=>{
    window.location.href = "https://ok.jackie.com.tw/product.php?category2=8&pageNameCh=%E8%90%BD%E5%9C%B0%E9%A0%81&pageNameEn=Landing%20Page&categoryType=3";
  };
  goToPagefrontEnd=()=>{
    window.location.href = "https://ok.jackie.com.tw/product.php?category2=9&pageNameCh=%E7%B6%B2%E9%A0%81%E5%89%8D%E7%AB%AF&pageNameEn=Front-end&categoryType=3";
  };
  goToPagePhp=()=>{
    window.location.href = "https://ok.jackie.com.tw/product.php?category2=10&pageNameCh=%E5%BE%8C%E7%AB%AFPHP&pageNameEn=php&categoryType=3";
  };
  render() {
    const {
      photograph,
      logo,
      nameCard,
      graphicDesign,
      webDesign,
      landingPage,
      frontEnd,
      php
    } = this.props.data;
    return (
      <Container className="card_box" fluid={true}>
        <Row>
          <Col xs="12" sm="12" md="12" lg="6" className="">
            <Card className="text-center">
              <Card.Header>
                <h5>{photograph.skillChName}</h5>
                <small>{photograph.skillEnName}</small>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {photograph.skillDescription}
                </Card.Text>
                <div className="iframe_box">
                  <iframe title="photograph" src={photograph.link} frameborder="0"></iframe>
                </div>
                <Button variant="primary" onClick={this.goToPagePhotograph}>Go！</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="12" lg="6" className="">
            <Card className="text-center">
              <Card.Header>
                <h5>{logo.skillChName}</h5>
                <small>{logo.skillEnName}</small>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {logo.skillDescription}
                </Card.Text>
                <div className="iframe_box">
                  <iframe title="logo" src={logo.link} frameborder="0"></iframe>
                </div>
                <Button variant="primary" onClick={this.goToPagelogo}>Go！</Button>
              </Card.Body>
            </Card> 
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="12" lg="6" className="">
            <Card className="text-center">
              <Card.Header>
                <h5>{nameCard.skillChName}</h5>
                <small>{nameCard.skillEnName}</small>
              </Card.Header>
                <Card.Body>
                  <Card.Text>
                    {nameCard.skillDescription}
                  </Card.Text>
                  <div className="iframe_box">
                    <iframe title="nameCard" src={nameCard.link} frameborder="0"></iframe>
                  </div>
                  <Button variant="primary" onClick={this.goToPageNameCard}>Go！</Button>
                </Card.Body>
              </Card> 
          </Col>
          <Col xs="12" sm="12" md="12" lg="6" className="">
            <Card className="text-center">
              <Card.Header>
                <h5>{graphicDesign.skillChName}</h5>
                <small>{graphicDesign.skillEnName}</small>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {graphicDesign.skillDescription}
                </Card.Text>
                <div className="iframe_box">
                  <iframe title="graphicDesign" src={graphicDesign.link} frameborder="0"></iframe>
                </div>
                <Button variant="primary" onClick={this.goToPageGraphicDesign}>Go！</Button>
              </Card.Body>
            </Card> 
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="12" lg="6" className="">
            <Card className="text-center">
              <Card.Header>
                <h5>{webDesign.skillChName}</h5>
                <small>{webDesign.skillEnName}</small>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {webDesign.skillDescription}
                </Card.Text>
                <div className="iframe_box">
                  <iframe title="webDesign" src={webDesign.link} frameborder="0"></iframe>
                </div>
                <Button variant="primary" onClick={this.goToPageWebDesign}>Go！</Button>
              </Card.Body>
            </Card> 
          </Col>
          <Col xs="12" sm="12" md="12" lg="6" className="">
            <Card className="text-center">
              <Card.Header>
                <h5>{landingPage.skillChName}</h5>
                <small>{landingPage.skillEnName}</small>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {landingPage.skillDescription}
                </Card.Text>
                <div className="iframe_box">
                  <iframe title="landingPage" src={landingPage.link} frameborder="0"></iframe>
                </div>
                <Button variant="primary" onClick={this.goToPageLandingPage}>Go！</Button>
              </Card.Body>
            </Card> 
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" md="12" lg="6" className="">
            <Card className="text-center">
              <Card.Header>
                <h5>{frontEnd.skillChName}</h5>
                <small>{frontEnd.skillEnName}</small>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {frontEnd.skillDescription}
                </Card.Text>
                <div className="iframe_box">
                  <iframe title="frontEnd" src={frontEnd.link} frameborder="0"></iframe>
                </div>
                <Button variant="primary" onClick={this.goToPagefrontEnd}>Go！</Button>
              </Card.Body>
            </Card> 
          </Col>
          <Col xs="12" sm="12" md="12" lg="6" className="">
            <Card className="text-center">
              <Card.Header>
                <h5>{php.skillChName}</h5>
                <small>{php.skillEnName}</small>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {php.skillDescription}
                </Card.Text>
                <div className="iframe_box">
                  <iframe title="php" src={php.link} frameborder="0"></iframe>
                </div>
                <Button variant="primary" onClick={this.goToPagePhp}>Go！</Button>
              </Card.Body>
            </Card> 
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cards;
