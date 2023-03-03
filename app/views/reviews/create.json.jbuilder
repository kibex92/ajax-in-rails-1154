# if the review gets saved
  # render the created review content
  # render the empty form
# else
  # render form with validation errors

if @review.persisted?
  json.inserted_item render partial: "restaurants/review", formats: :html, locals: { review: @review }
  # KEY of our JSON    # VALUE
  json.form render partial: "reviews/form", formats: :html, locals: { restaurant: @restaurant, review: Review.new }
else
  json.form render partial: "reviews/form", formats: :html, locals: { restaurant: @restaurant, review: @review }
end