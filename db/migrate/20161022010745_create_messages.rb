class CreateMessages < ActiveRecord::Migration[5.0]
  def change
  	create_table :messages do |t|
      t.datetime :date
      t.string :user
      t.text :message
      t.string :color
      t.string :channel_name
    end
  end

  def self.down
    drop_table :messages
  end
end
