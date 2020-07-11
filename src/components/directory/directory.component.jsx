import React from "react";
import "./directory.component.scss";
import MenuItem from "./menu-item/menu-item.component";
import sections from "./directory.data.js";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: sections,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...OtherProps }) => (
          <MenuItem key={id} {...OtherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
