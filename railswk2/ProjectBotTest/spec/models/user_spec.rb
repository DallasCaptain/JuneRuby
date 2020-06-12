require 'rails_helper'

RSpec.describe User, type: :model do
  context "With Valid Attributes" do
    it 'should save'do
      expect(build(:user, :female, :admin).fName).to eq("Jan")
      expect(build(:user, :male).fName).to eq("Bob")
    end

    it 'isadmin? should be false if not admin' do
      expect(build(:user, :male).isAdmin?).to eq(false)

    end

    it 'isadmin? should be true if admin' do
      expect (build(:user, :male, :admin).admin)
    end

  end
  context "With invalid attributes" do
    it 'should not save if fName is blank' do
      expect(build(:user, fName: "")).to be_invalid
    end
  end
end
