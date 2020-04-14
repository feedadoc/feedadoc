FactoryBot.define do
  factory :provider do
    first_name { "Doctor" }
    last_name  { "Jane" }
    role { "doctor" }
    facility { "ucsf" }
    neighborhood { "Sunset" }
    city { "San Francisco" }
    state { "CA" }
    address { "123 fake st" }
    country { "usa" }
    latitude { 0.0 }
    longitude { 0.0 }
    sequence :email do |n|
      "person#{n}@example.com"
    end
    description { "I need help" }
    requests {
      [{ "type" => "pets", "satisfied" => false },
       { "type" => "cleaning", "satisfied" => false }]
    }
    active { true }
  end
end
