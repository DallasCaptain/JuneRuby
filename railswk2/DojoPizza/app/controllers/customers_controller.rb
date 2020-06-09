class CustomersController < ApplicationController
    
    def show
        @pizza = Pizza.find(params[:pizza_id])
        @customer = Customer.find(params[:id])
    end

end
