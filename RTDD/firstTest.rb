class Buyer
    attr_accessor :money
    def initialize
        @money = 0
    end

    def buy_soda
        return @money > 0
    end

end