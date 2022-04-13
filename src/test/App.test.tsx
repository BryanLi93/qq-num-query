import { fireEvent, render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";
import UserGrid from "../components/UserGrid";

let $container: HTMLElement;

beforeEach(() => {
  // 创建一个 DOM 元素作为渲染目标
  $container = document.createElement("div");
  document.body.appendChild($container);
  // jest.useFakeTimers();
});

afterEach(() => {
  // 退出时进行清理;
  if ($container) {
    unmountComponentAtNode($container);
    $container.remove();
  }
  // $container = null;
  // jest.useRealTimers();
});

describe("App 组件渲染", () => {
  it("Title 组件渲染", () => {
    act(() => {
      render(<App />, { container: $container });
    });
    const linkElement = screen.getByText(/QQ号查询/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("QQ Input 组件渲染", () => {
    const mockInputValue = "abc";

    act(() => {
      render(<App />, { container: $container });
    });
    const $input = document.querySelector("#input--qq");
    $input && fireEvent.change($input, { target: { value: mockInputValue } });
    expect(($input as HTMLInputElement)?.value).toBe(mockInputValue);
  });

  it("UserGrid 组件渲染", async () => {
    const mockUser = {
      name: "留白",
      qq: "813595700",
      qlogo: "https://q2.qlogo.cn/headimg_dl?spec=100&dst_uin=813595706",
    };

    act(() => {
      render(<UserGrid user={mockUser} />, {
        container: $container,
      });
    });
    expect($container?.querySelector("img")?.src).toBe(mockUser.qlogo);
    expect($container?.querySelector(".name")?.textContent).toBe(mockUser.name);
    expect($container?.querySelector(".qq")?.textContent).toBe(mockUser.qq);
  });
});
