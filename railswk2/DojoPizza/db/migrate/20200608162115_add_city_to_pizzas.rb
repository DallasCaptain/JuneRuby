class AddCityToPizzas < ActiveRecord::Migration
  def change
    add_column :pizzas, :city, :string
    add_column :pizzas, :state, :string
  end
end
