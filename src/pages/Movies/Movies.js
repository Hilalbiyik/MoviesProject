import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "react-bootstrap/Carousel";
import MovieCard from "./MovieCard";
import { FaSearch } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Movies.css";
import PopularMovie from "../../components/PopularMovie";
import Filter from "./Filter";

const Movies = () => {
  const [movies, setMovies] = useState(false);
  const [searchKey, setSearchKey] = useState();
  const [filtered,setFiltered] = useState([]);
  const [activeGenre,setActiveGenre] = useState([0]);

  
  const Movie_API =
    "https://gist.githubusercontent.com/hknclk/5710c4adb791755b31ccde6777f04bd2/raw/19954b5d84f476a1d691ce43e4319292893cc27a/sample.json";


  // const noImage = "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

  useEffect(() => {
    fetch(Movie_API)
      .then((response) => response.json())
      .then((data) => {
        if (!data.errors) {
          setMovies(data.entries);
          setFiltered(data.entries);
        }else{
          setMovies([])
        }
        //setMovies(data.entries);
        //console.log(data.entries)
      });
  }, []);

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   fetch(search_API + searchKey)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMovies(data.results);
  //       //console.log(data.entries)
  //     });
  // };
  const handleOnChange = e => {
    e.preventDefault();

    setMovies(e.target.value);
  };
  

  return (
    <div className="main">

      <Navbar />
      <Carousel>
        <img
          className="d-block"
          src="https://user-images.githubusercontent.com/77548014/199524029-600bd1eb-f8f4-4eaf-b4a8-b68f0ed8552e.png"
          alt="First slide"
        />
      </Carousel>
      <Container>
        <Row>
          <Col sm={9}>
            <Form>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Arama Yap"
                  value = {searchKey}
                  onChange={event => {setSearchKey(event.target.value)}}
                />
            
                <Button
                  className="btn-primary bs-purple"
                  variant="outline-secondary"
                  id="button-addon2"
                >
                  <FaSearch className="icon" />
                </Button>
              </InputGroup>
            </Form>
          </Col>
  
          <Col sm={3}>
            <DropdownButton id="dropdown-basic-button" title="Filtrele">
              <Dropdown.Item href="#/action-1">
                Eskiye Göre Sırala
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Yeniye Göre Sırala
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Puana Göre Sırala</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      
        <PopularMovie/>
        <Filter 
        movie={movies} 
        setFiltered={setFiltered} 
        activeGenre = {activeGenre} 
        setActiveGenre = {setActiveGenre}/>
        <Row>
          <Col className="card-container">
            {
            movies.length > 0 && movies.filter((movie) => {
              if (searchKey === "") {
                return movie
              }else if (
                movie.title.toLowerCase().includes(searchKey.toLowerCase())) {

              }
            }).map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  programType={movie.programType === "movie" ? "movie" : null}
                  releaseYear={movie.releaseYear}
                  //images={movie.images["Poster Art"].url === movie ?"mov" :"https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"}
                  images={movie.images["Poster Art"].url}
                />
              ))}
              {/* {movies.length > 0 && (
                <ul>
                  {movies.map(movie =>(
                    <li>{movie.title}</li>
                  ))}
                </ul>
              )} */}
          </Col>

        
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
