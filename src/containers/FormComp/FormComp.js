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
import moment from 'moment';
import {
  FormContainer,
  Form,
  DeleteContent,
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
      const {title,year,genre,runtime,director,id,poster_path} = this.props.movie_data;
      this.setState({id,title,year,genre,runtime,director,poster_path});
    }
    if (type === "delete") {
      const { id } = this.props.movie_data;
      this.setState({
        id
      });
    }
  }

  handleChange = e => {
    const { removeError, errors } = this.props;
    if(errors.errorMessage !== "") {
      removeError();
    }
    
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
      removeError,
    } = this.props;
    const { title, id } = this.state;
    e.preventDefault();
    if (type === "add") {
      const isExist = checkExist(movies, title);
      if(!isExist) {
          if(title !== '') {
            addNewMovie(title);
        } else {
          addError('Please fill the field');
        }
      }else {
        addError(`the movie ${title} is existing`);
      }
    }
    if (type === "edit") {
      const errorObject = check_validation(this.state);
      this.setState({error: errorObject});
      let errorMessage = '';
      if(Object.keys(errorObject).length > 0){
      errorMessage = "Please fill "
      }
      for (const item in errorObject) {
        if(errorObject[item] === true) {
          errorMessage += `${item}, \n`;
        }
      }
     if(!moment(this.state.year).isValid() || this.state.year.length !== 4) {
        errorMessage +=  "Pleae insert a valid year YYYY\n";
    }
    if(Object.keys(errorObject).length > 0) {
      addError(errorMessage);
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
    if(type === "delete") {

      deleteMovie(id);
      handleModal({ isOpen: "close" });
    }
  }

  render() {
    const { title, year, runtime, genre, director, error } = this.state;
    const { type, errors } = this.props;
    let editForm = (
      <InputBoxes>
        <InputBox>
          <Label error={error.title}>Title:</Label>
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
          <Label error={error.year}>Year:</Label>
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
          <Label error={error.runtime}>Runtime:</Label>
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
          <Label error={error.genre}>Genre:</Label>
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
          <Label error={error.director}>Director:</Label>
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

    let addForm = <div>
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
    </div>

    return (
      <FormContainer>
        <Form onSubmit={this.handleSubmit}>
          <TitleForm>{type.charAt(0).toUpperCase() + type.slice(1)} Form</TitleForm>
          {errors.errorMessage !== "" && (
            <Error>{errors.errorMessage}</Error>
          )}
          {type === "delete" && (
            <DeleteContent>Are you sure that you want to delete this movie ?</DeleteContent>
          )}
          {type === "add" && (addForm)}
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
