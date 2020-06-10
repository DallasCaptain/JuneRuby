require_relative 'firstTest'

RSpec.describe "Buy a soda" do
    before(:each) do
        @buyer = Buyer.new
    end


    context "has money" do
        it "buy the soda" do
            @buyer.money = 10
            expect(@buyer.buy_soda).to eq(true)
        end
    end

    context "has no money" do
        it "can't buy the soda" do
            @buyer.money = 0
            expect(@buyer.buy_soda).to eq(false)
        end
    end
end