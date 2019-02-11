import React, { Component } from "react";
import { connect } from "react-redux";
import { getViewComponent } from "../utils/getViewComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      currentView: "StepA",
      viewStack: []
    };

    this.gotoView = this.gotoView.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.data = "";
    this.controllerProps = {
      gotoView: this.gotoView,
      previousStep: this.previousStep
    };
  }

  previousStep() {
    if (this.state.viewStack.length > 0) {
      const _viewStack = Object.assign([], this.state.viewStack);
      const _currView = _viewStack.pop();
      this.setState({
        currentView: _currView,
        viewStack: _viewStack
      });
    }
  }

  gotoView(screenName, dontSaveToStack) {
    // eslint-disable-next-line import/namespace
    if (window.MapChunk[screenName] === "") {
      const _viewStack = Object.assign([], this.state.viewStack);
      if (!dontSaveToStack) {
        _viewStack.push(this.state.currentView);
      }
      this.setState({
        currentView: screenName,
        viewStack: _viewStack
      });
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.state.currentView ? (
      <React.Fragment> 
        <div className="grid-container full">
          <div className="grid-x">
            <div className="small-12">
              {getViewComponent(this.state.currentView, this.controllerProps)}
            </div>
          </div>
        </div>
        <footer>
          <a href="https://www.adweek.com/brand-marketing/living-coral-is-pantones-2019-color-of-the-year/">Background Inspired from #Pantone - Design with Purpose 2019
          </a>
        </footer>
      </React.Fragment>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    config: state.config
  };
}

export default connect(mapStateToProps)(Main);
