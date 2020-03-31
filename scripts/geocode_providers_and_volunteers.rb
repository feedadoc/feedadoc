#!/usr/bin/env ruby
require "io/console"
require "geocoder"

unless defined?(Rails)
  STDERR.puts "Usage: bundle exec rails runner tools/#{File.basename($0)}"
  exit 1
end

Provider.where("latitude IS NULL OR longitude IS NULL").find_each do |provider|
  results = Geocoder.search([provider.city, provider.state, provider.country].compact.join(', '))
  provider.latitude, provider.longitude = results.first && results.first.coordinates
  provider.save(validate: false)
end

Volunteer.where("latitude IS NULL OR longitude IS NULL").find_each do |volunteer|
  results = Geocoder.search([volunteer.city, volunteer.state, volunteer.country].compact.join(', '))
  volunteer.latitude, volunteer.longitude = results.first && results.first.coordinates
  volunteer.save(validate: false)
end
