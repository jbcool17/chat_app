module App
  class Chat
    attr_accessor :messages, :chat_name, :chat_user_list

    def initialize(chat_name)
      @chat_name = chat_name
      @colors = ['#D3D3D3']
      @chat_user_list = {}
    end

    def write_data(time, user, message, color='#D3D3D3', channel_name)
      Message.create date: time, user: user, message: message, color: color, channel_name: channel_name
    end

    def set_user_color(user)
      @chat_user_list[user] = get_color
    end

    def get_color

      color = '#%06x' % (rand * 0xffffff)
      min_color_num = color.scan(/\d/).map(&:to_i).min || 0

      while (@colors.include?(color) ||  min_color_num < 4 ) do
        color = '#%06x' % (rand * 0xffffff)
        min_color_num = color.scan(/\d/).map(&:to_i).min || 0
      end

      color
    end

  end
end
