class Fundate < ActiveRecord::Base

    validate :future?

    def future?
        errors.add('happen date','is bad') unless self.happen >= Date.today + 5 
    end
end
