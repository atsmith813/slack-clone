# Helper methods defined here can be accessed in any controller or view in the application

module SlackClone
  class App
    module MessagesHelper
      def ordinalize number
        abs_number = number.to_i.abs
        if (11..13).include?(abs_number % 100)
          ordinal = 'th'
        else
          case abs_number % 10
          when 1
            ordinal = 'st'
          when 2
            ordinal = 'nd'
          when 3
            ordinal = 'rd'
          else
            ordinal = 'th'
          end
        end
        "#{number}#{ordinal}"
      end
    end
    helpers MessagesHelper
  end
end
