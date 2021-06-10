import React, { Component } from 'react';

class FavoriteMovies extends Component{
  
  normalize(obj){
    return Object.entries(obj).map( item => item[1])
  }
  
  render(){
    const users  = this.normalize(this.props.users), 
          movies = this.normalize(this.props.movies), 
          profiles = this.normalize(this.props.profiles);
    return (
      <div>
      	{
          profiles.map((item) => ( 
      			<p key={item.id}> 
					{users.filter(user => user.id === Number(item.userID)).map(item => item.name)}'s favorite movie is {movies.filter(movie => movie.id === Number(item.favoriteMovieID)).map(movie => movie.name)}.
  				</p>
    		))}
      </div>
    )
  }
}

export default FavoriteMovies;