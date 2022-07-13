import React from "react";

import useStyles from "./styles";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
// import { createPost } from "../../redux/action/postAction";
import { createPost } from "../../actions/posts";

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = React.useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Here is the PostData from HandleSubmit function", postData);
    dispatch(createPost(postData));
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  console.log("Here is the Post data", postData);

  const handleClear = () => {
    console.log("Form Cleared");
  };
  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.root} ${classes.form}`}
        autoComplete="off"
        variant="outlined"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6"> Create a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple="false"
            onDone={([{ base64 }]) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          type="submit"
          variant="contained"
          size="lg"
          fullWidth
          color="primary"
        >
          Submit Post
        </Button>

        <Button
          variant="contained"
          style={{ marginTop: "10px" }}
          size="small"
          fullWidth
          color="secondary"
          onClick={handleClear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
