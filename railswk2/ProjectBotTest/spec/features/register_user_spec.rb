require 'rails_helper'
feature "guest user creates an account" do
  scenario "successfully creates a new user account" do
    
    visit "/users/new"
    fill_in "user_fname", with: "shane"
    fill_in "user_lname", with: "chang"
    fill_in "user_email", with: "schang@codingdojo.com"
    click_button "Create User"
    expect(page).to have_content "User successfully created"
  end
  scenario "failed to creates a duplicate user account" do
    
    visit "/users/new"
    fill_in "user_fname", with: "shane"
    fill_in "user_lname", with: "chang"
    fill_in "user_email", with: "schang@codingdojo.com"
    click_button "Create User"
    expect(page).to have_content "User creation Failed"
  end
  scenario "Fails to creates a new user account" do
    
    visit "/users/new"
    fill_in "user_fname", with: ""
    fill_in "user_lname", with: "chang"
    fill_in "user_email", with: "schang@codingdojo.com"
    click_button "Create User"
    expect(page).to have_content "User creation Failed"
  end
end