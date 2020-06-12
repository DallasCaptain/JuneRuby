FactoryBot.define do
  factory :user do
    
    lName { "Boberson" }
    email { "Bob@Bob.com" }

    trait :admin do
      admin {true}
    end

    trait :male do
      fName { "Bob" }
    end

    trait :female do
      fName { "Jan" }
    end

  end
end
