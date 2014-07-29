class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.float :lat
      t.float :long
      t.datetime :time

      t.timestamps
    end
  end
end
