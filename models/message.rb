class Message < ActiveRecord::Base
  validates_presence_of :user

  def self.live
    Message.where(channel_name: 'live')
  end

  def self.manual
    Message.where(channel_name: 'manual')
  end

  def self.websockets
    Message.where(channel_name: 'websockets')
  end
end
