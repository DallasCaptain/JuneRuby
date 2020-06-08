class PizzasController < ApplicationController
  def index
    @pizzas = Pizza.all
  end

  def new
  end

  def edit
  end

  def show
  end

  def create

    Pizza.create(pizzaParams)

    redirect_to pizzas_url
  end

  def update
  end

  def destroy
  end

  def pizzaParams
    params.require(:pizza).permit(:name,:address,:city,:state)
  end

end
