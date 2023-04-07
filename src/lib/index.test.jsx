import renderer from "react-test-renderer";
import { describe, expect, test, vi } from "vitest";
import Modal from "./index";

describe("Modal component", () => {
  test("renders correctly", () => {
    const modal = renderer.create(<Modal />);
    expect(modal.toJSON()).toMatchSnapshot();
  });

  test("renders title and message correctly", () => {
    const title = "Example Title";
    const message = "Example Message";
    const modal = renderer.create(<Modal title={title} message={message} />);
    const titleNode = modal.root.findByType("h3");
    const messageNode = modal.root.findByType("p");
    expect(titleNode.children).toContain(title);
    expect(messageNode.children).toContain(message);
  });

  test("calls closeModal prop on button click", () => {
    const closeModal = vi.fn();
    const modal = renderer.create(<Modal closeModal={closeModal} />);
    const closeButton = modal.root.findByProps({ className: "close-btn" });
    closeButton.props.onClick();
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});
