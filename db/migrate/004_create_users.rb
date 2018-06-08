class CreateUsers < ActiveRecord::Migration[5.2]
  def self.up
    create_table :users do |t|
      t.string :screen_name
      t.timestamps null: false
      t.index :screen_name
    end
  end

  def self.down
    drop_table :users
  end
end
