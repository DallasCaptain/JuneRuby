class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :name
      t.string :email
      t.integer :purchases
      t.references :pizza, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
