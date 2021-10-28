import React from "react";

import { connect } from "react-redux";
import { selectDirectorySections } from "../../Redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-items/menu-item.component";

import "./directory.styles.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
