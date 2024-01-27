// useProjects.test.js
import { useProjects } from "./useProjects";
import vitest from "vitest";
const { test, assert } = vitest;

test("useProjects hook should fetch projects", async () => {
  // Mocking the fetch function
  globalThis.fetch = async () => ({
    json: async () => [{ title: "Project 1", content: "Content 1", link: "Link 1", badge: ["Badge 1"] }],
  });

  // Mocking the useState and useEffect hooks
  let useStateValue;
  let useEffectCallback;

  globalThis.useState = (initialState) => {
    useStateValue = initialState;
    return [useStateValue, (newValue) => (useStateValue = newValue)];
  };

  globalThis.useEffect = (callback) => {
    useEffectCallback = callback;
  };

  // Call the hook
  const [projects, fetchProjects] = useProjects("fake-url");

  // Check initial state
  assert.equal(projects.length, 0);

  // Simulate useEffect
  useEffectCallback();

  // Call fetchProjects
  await fetchProjects();

  // Check the updated state after fetch
  assert.equal(projects.length, 1);
  assert.equal(projects[0].title, "Project 1");
  assert.equal(projects[0].content, "Content 1");
  assert.equal(projects[0].link, "Link 1");
  assert.deepEqual(projects[0].badge, ["Badge 1"]);

  // Clean up mocks
  delete globalThis.fetch;
  delete globalThis.useState;
  delete globalThis.useEffect;
});

test.run();
