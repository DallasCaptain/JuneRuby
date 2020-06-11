require 'rails_helper'

RSpec.describe User, type: :model do
  context "With Valid Attributes" do
    it 'should save'do
      expect(build(:user)).to be_valid
    end
  end
  context "With invalid attributes" do
    it 'should not save if fName is blank' do
      expect(build(:user, fName: "")).to be_invalid
    end
  end
end
