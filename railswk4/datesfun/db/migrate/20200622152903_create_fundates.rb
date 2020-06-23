class CreateFundates < ActiveRecord::Migration
  def change
    create_table :fundates do |t|
      t.date :happen

      t.timestamps null: false
    end
  end
end
