import React from "react";

class ComponentRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      root: props.root,
      default: "",
      routes: [],
    };
  }

  add(url, view) {
    this.setState((prevState) => ({
      routes: [...prevState.routes, { url: url, view: view }],
    }));
  }

  default(url) {
    this.setState({ default: url });
  }

  async go(url = "") {
    let view = null;

    if (url === "") {
      url = this.state.default;
    }

    this.state.routes.forEach((route) => {
      if (route.url === url) {
        view = route.view;
      }
    });

    if (view !== null) {
      const module = await import(`./../components/page/${view}/${view}.js`);
      const ViewComponent = module.default;
      const nodeView = React.createElement(ViewComponent);
      while (this.state.root.firstChild) {
        this.state.root.removeChild(this.state.root.firstChild);
      }
      this.state.root.appendChild(nodeView);
      this.props.history.pushState(null, null, url);
    }
  }

  render() {
    return null;
  }
}

class RouterFactory {
  static _router = null;

  static _createInstance(rootNode) {
    return new ComponentRouter({ root: rootNode });
  }

  static createInstance(rootNode) {
    if (RouterFactory._router === null) {
      RouterFactory._router = RouterFactory._createInstance(rootNode);
    }
    return RouterFactory._router;
  }
}

export { RouterFactory };
