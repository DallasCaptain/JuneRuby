class PizzasController < ApplicationController
  layout 'pizzas_2Col', only: ['index']


  def asdfasdf
    @pizza = Pizza.new
    render 'update'
  end

  def index
    @color = "green"
    @pizzas = Pizza.all
    if flash[:errors]
      @errors = flash[:errors]
    end
  end

  def new
    if flash[:errors]
      @errors = flash[:errors]
    end
  end

  def edit
    @pizza = Pizza.find(params[:id])
  end

  def show
    @pizza = Pizza.find(params[:id])
    @customers = @pizza.customers
  end

  def create

    pizza = Pizza.create(pizzaParams)
    if pizza.errors.any? 
      flash[:errors] = pizza.errors.full_messages
      redirect_to new_pizza_url and return
    end

    redirect_to pizzas_url
  end

  def update
    pizza = Pizza.find(params[:id])
    pizza.name = pizzaParams[:name]
    pizza.address = pizzaParams[:address]
    pizza.city = pizzaParams[:city]
    pizza.state = pizzaParams[:state]
    pizza.save
    redirect_to pizza_url(id: params[:id])
  end

  def destroy
    pizza = Pizza.find(params[:id])
    pizza.destroy
    redirect_to pizzas_url
  end

  def pizzaParams
    params.require(:pizza).permit(:name,:address,:city,:state)
  end

  
end
