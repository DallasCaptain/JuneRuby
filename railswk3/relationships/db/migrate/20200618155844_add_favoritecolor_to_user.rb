class AddFavoritecolorToUser < ActiveRecord::Migration
  def change
    add_column :users, :favorite_color, :string
  end
end
