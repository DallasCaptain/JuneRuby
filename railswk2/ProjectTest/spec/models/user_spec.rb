require 'rails_helper'

RSpec.describe User, type: :model do
  it "should not save if fName is blank" do
    user = User.new(
      fName: '',
      lName: 'Boberson',
      email: 'Bob@Bob.com'
    )
    expect(user).to be_invalid
  end
  it "should not save if last_name field is blank" do
    user = User.new(
      fName: 'Bob',
      lName: '',
      email: 'Bob@Bob.com'
    )
    expect(user).to be_invalid
  end
    
  it "should not save if email already exists" do
    User.create(fName: 'Bob',
    lName: 'Boberson',
    email: 'Bob@Bob.com')
    user = User.new(
      fName: 'Bob',
      lName: 'Boberson',
      email: 'Bob@Bob.com'
    )
    expect(user).to be_invalid
  end
    
  it "should not save if invalid email format"
end
