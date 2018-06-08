class CreateChannels < ActiveRecord::Migration[5.2]
  def self.up
    create_table :channels do |t|
      t.string :name
      t.timestamps null: false
      t.index :name
    end
  end

  def self.down
    drop_table :channels
  end
end
