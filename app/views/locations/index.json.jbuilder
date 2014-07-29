json.array!(@locations) do |location|
  json.extract! location, :id, :lat, :long, :time
  json.url location_url(location, format: :json)
end
