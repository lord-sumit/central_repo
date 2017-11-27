class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.boolean :enabled
      t.decimal :discount_price
      t.string :permalink
      t.timestamps
    end
  end
end
