class CreateMessages < ActiveRecord::Migration[5.2]
  def self.up
    create_table :messages do |t|
      t.string :content
      t.integer :user_id
      t.integer :channel_id
      t.timestamps null: false
      t.index :user_id
      t.index :channel_id
    end
  end

  def self.down
    drop_table :messages
  end
end
