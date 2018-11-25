import React, { Component } from "react";
import { connect } from "react-redux";
import { check_validation, checkExist } from '../../services/validation';
import { handleModal } from "../../store/actions/modal";
import { addError, removeError } from '../../store/actions/errors';
import {
  addNewMovie,
  editMovie,
  deleteMovie
} from "../../store/actions/movies";
import {
  FormContainer,
  Form,
  Error,
  InputBox,
  Label,
  Input,
  InputBoxes,
  Button,
  TitleForm
} from "./style";

class FormComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      year: "",
      runtime: "",
      genre: "",
      director: "",
      poster_path: "",
      error: {}
    };
  }

  componentDidMount() {
    const { type } = this.props;
    if (type === "edit") {
      const {
        title,
        year,
        genre,
        runtime,
        director,
        id,
        poster_path
      } = this.props.movie_data;
      this.setState({
        id,
        title,
        year,
        genre,
        runtime,
        director,
        poster_path
      });
    }
    if (type === "delete") {
      const { id } = this.props.movie_data;
      this.setState({
        id
      });
    }
  }

  handleChange = e => {
    const { removeError } = this.props;
    removeError();
    this.setState({
      [e.target.name]: e.target.value,
      error: {
        title: "",
        runtime: "",
        year: "",
        genre: "",
        director: ""
      }
    });
  };

  handleSubmit = e => {
    const {
      type,
      addNewMovie,
      handleModal,
      editMovie,
      deleteMovie,
      movies,
      addError,
      removeError
    } = this.props;
    const { title, id } = this.state;
    e.preventDefault();
    if (type === "add") {
      const isExist = checkExist(movies, title);
      if(!isExist) {
        addNewMovie(title);
        handleModal({ isOpen: "close" });
      } else {
        addError(`the movie ${title} is existing`);
      }
    }
    if (type === "edit") {
      const error = check_validation(this.state);
      let error_message = "";
      if(!Object.values(error).includes("")){
        this.setState({error});
        if(error.error_year === "year") {
          error_message += "Please insert a valid year YYYY\n"; 
        }
        if(error.error_genre !== "" || error.error_title !== "" || error.error.runtime !== "" || error.error.director ) {
          error_message += "Please fill all the fields";
        }
          addError(error_message);
      } else {
        removeError();
        const isExist = checkExist(movies, title);
        if(!isExist) {
          editMovie(this.state)
          handleModal({ isOpen: "close" });
        } else {
          addError(`the movie ${title} is existing`);
        }
      }
    }
    if (type === "delete") {
      deleteMovie(id);
      handleModal({ isOpen: "close" });
    }
  };

  render() {
    const { title, year, runtime, genre, director, error } = this.state;
    const {error_title, error_year, error_runtime, error_genre, error_director} = error;
    const { type, errors } = this.props;
    let editForm = (
      <InputBoxes>
        <InputBox>
          <Label error={error_title}>Title:</Label>
          <div>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
        </InputBox>
        <InputBox>
          <Label error={error_year}>Year:</Label>
          <div>
            <Input
              type="text"
              name="year"
              value={year}
              onChange={this.handleChange}
            />
          </div>
        </InputBox>
        <InputBox>
          <Label error={error_runtime}>Runtime:</Label>
          <div>
            <Input
              type="text"
              name="runtime"
              value={runtime}
              onChange={this.handleChange}
            />
          </div>
        </InputBox>
        <InputBox>
          <Label error={error_genre}>Genre:</Label>
          <div>
            <Input
              type="text"
              name="genre"
              value={genre}
              onChange={this.handleChange}
            />
          </div>
        </InputBox>
        <InputBox>
          <Label error={error_director}>Director:</Label>
          <div>
            <Input
              type="text"
              name="director"
              value={director}
              onChange={this.handleChange}
            />
          </div>
        </InputBox>
      </InputBoxes>
    );

    return (
      <FormContainer>
        <Form onSubmit={this.handleSubmit}>
          <TitleForm>{type}</TitleForm>
          {errors.errorMessage && (
            <Error>{errors.errorMessage}</Error>
          )}
          {type === "delete" && (
            <h1>Are you sure that you want to delete this movie ?</h1>
          )}
          {type === "add" && (
            <InputBox>
              <Label>Title:</Label>
              <div>
                <Input
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                />
              </div>
            </InputBox>
          )}

          {type === "edit" && editForm}
          <Button type="submit">Accept</Button>
        </Form>
      </FormContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors,
    type: state.modal.type,
    movies: state.movies
  };
}

export default connect(
  mapStateToProps,
  { addNewMovie, handleModal, editMovie, deleteMovie, addError, removeError }
)(FormComp);
