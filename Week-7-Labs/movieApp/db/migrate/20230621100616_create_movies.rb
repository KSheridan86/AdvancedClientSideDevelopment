class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :rating
      t.string :release

      t.timestamps
    end
  end
end
