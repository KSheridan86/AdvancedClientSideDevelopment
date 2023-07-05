class ReviewsController < ApplicationController
  # GET /movies/1/reviews
  def index
    # For URL like /movies/1/reviews
    # Get the movie with id=1
    @movie = Movie.find(params[:movie_id])
    # Access all reviews for that movie
    @reviews = @movie.reviews
  end

  # GET /movies/1/reviews/2
  def show
    @movie = Movie.find(params[:movie_id])
    # For URL like /movies/1/reviews/2
    # Find an review in movies 1 that has id=2
    @review = @movie.reviews.find(params[:id])
  end

  # GET /movies/1/reviews/new
  def new
    @movie = Movie.find(params[:movie_id])
    # Associate an review object with movie 1
    @review = @movie.reviews.build
  end

  # POST /movies/1/reviews
  def create
    @movie = Movie.find(params[:movie_id])
    # For URL like /movies/1/reviews
    # Populate an review associate with movie 1 with form data
    # Movie will be associated with the review
    # @review = @movie.reviews.build(params.require(:review).permit!)
    @review = @movie.reviews.build(params.require(:review).permit(:details))
    if @review.save
        # Save the review successfully
        redirect_to movie_review_url(@movie, @review)
    else
        render :action => "new"
    end
  end
  
  # GET /movies/1/reviews/2/edit
  def edit
    @movie = Movie.find(params[:movie_id])
    # For URL like /movies/1/reviews/2/edit
    # Get review id=2 for movie 1
    @review = @movie.reviews.find(params[:id])
  end

  # PUT /movies/1/reviews/2
  def update
    @movie = Movie.find(params[:movie_id])
    @review = Review.find(params[:id])
    
    if @review.update(params.require(:review).permit(:details))
      # Save the review successfully
      redirect_to movie_review_url(@movie, @review)
    else
      render :action => "edit"
    end
  end

  # DELETE /movies/1/reviews/2
  def destroy
    @movie = Movie.find(params[:movie_id])
    @review = Review.find(params[:id])
    @review.destroy
    respond_to do |format|
    format.html { redirect_to movie_reviews_path(@movie) }
    format.xml { head :ok }
    end
  end
end
