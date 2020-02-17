import React from "react";

function configParser(config) {
  if (typeof config === "object") {
    let children = [];
    if (config.Children) {
      children = Object.entries(config.Children).map(c => configParser(c[1]));
    }

    const element = React.createElement(
      React.lazy(() =>
        import(
          `./../components/${config.Content.type}/${config.Content.type}.js`
        ).catch(() => ({
          default: () => <div>{config.Content.type} not found</div>
        }))
      ),
      config.Content.props || null,
      ...children
    );
    return element;
  }
  return null;
}

export default configParser;
