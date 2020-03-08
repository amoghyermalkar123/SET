import React, { Component } from "react";
import "./App.css";
import "./css/props.css";
import EcoFeed from "./Components/EcoFeed";
import Explore from "./Components/ExploreComponents/Explore";
import { Switch, Route } from "react-router-dom";


//third party imports
import "bootstrap/dist/css/bootstrap.min.css";
import {Row, Col } from "react-flexbox-grid";
import "shards-ui/dist/css/shards.min.css";

//custom components imports
import Home from "./Components/Home/Home";
import Scene from "./Components/Scene";
import SideBar from "./Components/SideBar";
import Header from "./Components/Header";
import Notifications from "./Components/Notifications";
import QuoraLike from "./Components/Buttons/QuoraLike";

//mui imports
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
/**
 * Setting up Webpack
  To import CSS files in a React application, you need to configure the Style and CSS loaders first.
 */

/**
 * TOTRY : remove the first column in first row
 */

class App extends Component {
  state = {
    trends: [
      {
        text: "Ecosystemone"
      },
      {
        text: "Ideaaaaaaaa"
      },
      {
        text: "reseeaaarrcchhh"
      },
      {
        text:"this incubatorrrr"
      }
    ]
  };
  render() {
    return (
      <div>
        <Header />
        <div className="my-root flex">
          <SideBar />
          <React.Fragment>
            <CssBaseline />
            <Container
              maxWidth="md"
              style={{
                backgroundColor: "#F5F8FA",
                height: "120vh",
                padding: 20
              }}
            >
              <Row>
                <Col sm={10} md={10}>
                  <Switch>
                    <Route exact path="/EcoFeed" component={EcoFeed} />
                    <Route exact path="/Explore" component={Explore} />
                    <Route exact path="/Notifs" component={Notifications} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path = "/Scene" component = {Scene}/>
                  </Switch>
                </Col>
                <Col sm={2} md={2}>
                  <h6>Trends</h6>
                  <QuoraLike trends={this.state.trends}></QuoraLike>
                </Col>
              </Row>
            </Container>
          </React.Fragment>{" "}
        </div>
      </div>
    );
  }
}

export default App;

/**
 * basic app layout
 * [const]      [dynamic]             [const]
 * |sidebar|feed and explore  |meta(activ notif etc)  |
 * |       |                  |                       |
 * |       |                  |                       |
 * |       |                  |                       |
 * |       |                  |                       |
 */

/**
 * <Grid>
 * </Grid>
 */

/**
  * META BOX :
  *       <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth="sm"
          style={{ backgroundColor: "#E1E8ED", height: "100vh" }}
        >
            <Row around="md">
              <Col>
                <NewCard />
              </Col>
            </Row>
        </Container>
      </React.Fragment>{" "}
  */
