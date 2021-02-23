import { useQuery } from "@apollo/react-hooks";
import {
  CircularProgress,
  List,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import Issue from "./Issue";
import { GET_REPO_ISSUES } from "./queries";
import "./App.css";
const useStyles = makeStyles({
  root: {
    flexDirection: "column",
  },
  spinnerContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  issues: {
    backgroundColor: "white",
  },
  issues1: {
    backgroundColor: "#d3d3d3",
  },
  issues2: {
    backgroundColor: "green",
  },
  hr: {
    color: "white",
  },
});

const IssueList = ({ repoName, repoOwner }) => {
  const classes = useStyles();
  const { data, loading, error } = useQuery(GET_REPO_ISSUES, {
    variables: {
      name: repoName,
      owner: repoOwner,
    },
  });

  if (loading) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Typography variant={"overline"} component={"div"} color={"error"}>
        {error}
      </Typography>
    );
  }

  if (!data.repository.issues.nodes.length) {
    return (
      <Typography variant={"overline"} component={"div"}>
        There are no issues!
      </Typography>
    );
  }

  // selected object
  const [title, setTitle] = React.useState({});
  // for select
  const [selected, setSelected] = React.useState("");

  const handleSelect = (e) => {
    // selected option
    setSelected(e.target.id);
    // filter and get the selected item from data array..using find method which returns an object
    const selectedBug = data.repository.issues.nodes.find(
      (issue) => issue.id === e.target.id
    );
    // if object was found, add to title state
    if (selectedBug) {
      setTitle(selectedBug);
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant={"h5"}>Latest issues: </Typography>
      {/**rendering your issues to a select element */}
      <select className="cselect" value={selected} onChange={handleSelect}>
        {data.repository.issues.nodes.map((issue) => (
          <option key={issue.id}>{issue.title}</option>
        ))}
      </select>
      <div>
        {title.id !== undefined && (
          <Issue
            className={classes.issues1}
            title={title.title}
            bodyHTML={title.bodyHTML}
          />
        )}
      </div>

      {/*
      <List className={classes.issues1}>
        {data.repository.issues.nodes.map((issue) => (
          <Issue className={classes.issues1} title={issue.title} />
        ))}
        <br />
        {data.repository.issues.nodes.map((issue) => (
          <Issue className={classes.issues2} bodyHTML={issue.bodyHTML} />
        ))}
        <br />
      </List>

        */}
    </div>
  );
};

export default IssueList;
