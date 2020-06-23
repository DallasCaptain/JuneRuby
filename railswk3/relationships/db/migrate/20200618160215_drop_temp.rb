class DropTemp < ActiveRecord::Migration
  def change
    drop_table :temps
  end
end
