import { useState } from "react";

import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Header/Section";
import Tabs from "./Tabs";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let defaultMessage = (
    <p>
      Hi there! 👋 <br /> Select the button above ☝️ to know about me!
    </p>
  );

  if (selectedTopic) {
    defaultMessage = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="About me" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "menu1"}
              onClick={() => handleSelect("menu1")}
            >
              menu1
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "menu2"}
              onClick={() => handleSelect("menu2")}
            >
              menu2
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "menu3"}
              onClick={() => handleSelect("menu3")}
            >
              menu3
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "menu4"}
              onClick={() => handleSelect("menu4")}
            >
              menu4
            </TabButton>
          </>
        }
      >
        {defaultMessage}
      </Tabs>
    </Section>
  );
}

export default Examples;
