import React from "react";
import { DirectoryContainer } from "./directory.styles";
import MenuItem from "./menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
const Directory = ({ sections }) => {
  return (
    <DirectoryContainer>
      {sections.map(({ id, ...OtherProps }) => (
        <MenuItem key={id} {...OtherProps} />
      ))}
    </DirectoryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
