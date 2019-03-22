import React, { Component } from "react";
import Amplify from "aws-amplify";
import { ChatBot, AmplifyTheme } from "aws-amplify-react";
import awsmobile from "./aws-exports";
import { UINav, UIJumbo } from "./components";

Amplify.configure(awsmobile);

// Imported default theme can be customized by overloading attributes
const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: "#ff6600"
  }
};

// Soon to be replaced with react hooks
class App extends Component {
  handleComplete(err, confirmation) {
    if (err) {
      alert("Bot conversation failed");
      return;
    }

    alert("Success: " + JSON.stringify(confirmation, null, 2));
    return "Trip booked. Thank you! what would you like to do next?";
  }

  render() {
    return (
      <div className="App">
        <UINav />
        <UIJumbo>
          <ChatBot
            title="Q-Bot, the greatest bot ever"
            theme={myTheme}
            botName="qbot_dev"
            welcomeMessage="Welcome, how can I help you today?"
            onComplete={this.handleComplete.bind(this)}
            clearOnComplete={true}
            conversationModeOn={false}
          />
        </UIJumbo>
      </div>
    );
  }
}

export default App;
