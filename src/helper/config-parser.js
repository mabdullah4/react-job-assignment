import React from "react";

function configParser(config) {
  if (typeof config === "object") {
    let childrens = [];
    if (config.Children) {
      childrens = Object.entries(config.Children).map(c => configParser(c[1]));
    }

    const element = React.createElement(
      React.lazy(() =>
        import(
          `./../components/${config.Content.type}/${config.Content.type}.js`
        )
      ),
      config.Content.props || null,
      ...childrens
    );
    return element;
  }
  return null;
}

export default configParser;
