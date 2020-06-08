class PizzasController < ApplicationController
  def index
    @pizzas = Pizza.all
  end

  def new
  end

  def edit
    @pizza = Pizza.find(params[:id])
  end

  def show
    @pizza = Pizza.find(params[:id])
  end

  def create

    Pizza.create(pizzaParams)

    redirect_to pizzas_url
  end

  def update
    pizza = Pizza.find(params[:id])
    pizza.name = pizzaParams[:name]
    pizza.address = pizzaParams[:address]
    pizza.city = pizzaParams[:city]
    pizza.state = pizzaParams[:state]
    pizza.save
    redirect_to showPizza_url(id: params[:id])
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
