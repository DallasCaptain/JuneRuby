class CreateTemps < ActiveRecord::Migration
  def change
    create_table :temps do |t|
      t.string :yep

      t.timestamps null: false
    end
  end
end
