// TemplateList.test.js
import { TemplateList } from "./TemplateList";
import { render } from "vitest-dom-utils";
import vitest from "vitest";
const { test, assert } = vitest;

test("TemplateList renders correctly", () => {
  // Mocking the useProjects hook
  globalThis.useProjects = (url) => {
    return [
      [
        { title: "Project 1", content: "Content 1", link: "Link 1", badge: ["Badge 1"] },
        { title: "Project 2", content: "Content 2", link: "Link 2", badge: ["Badge 2"] },
      ],
      async () => {},
    ];
  };

  // Render the component
  const container = render(<TemplateList />);

  // Check if the component renders correctly
  assert.equal(container.firstChild.tagName, "DIV");

  // Check if the correct number of projects is rendered
  assert.equal(container.querySelectorAll(".group").length, 2);

  // Clean up mocks
  delete globalThis.useProjects;
});

test("TemplateList handles card click correctly", () => {
  // Mocking the useProjects hook
  globalThis.useProjects = (url) => {
    return [
      [
        { title: "Project 1", content: "Content 1", link: "Link 1", badge: ["Badge 1"] },
        { title: "Project 2", content: "Content 2", link: "Link 2", badge: ["Badge 2"] },
      ],
      async () => {},
    ];
  };

  // Render the component
  const container = render(<TemplateList />);

  // Simulate a card click
  container.querySelectorAll(".group")[0].click();

  // Check if the state is updated correctly
  assert.equal(globalThis.useStateValue, 0);

  // Simulate another card click
  container.querySelectorAll(".group")[1].click();

  // Check if the state is updated correctly
  assert.equal(globalThis.useStateValue, 1);

  // Clean up mocks
  delete globalThis.useProjects;
  delete globalThis.useState;
});

test.run();
