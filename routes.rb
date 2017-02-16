require "sinatra"
require "pry"
require "csv"

get "/compare" do
	frack = params
	array = Array.new
	frack.each{|key, value| array << key }
	if array == ["703", "284"]
		reply = true
	else 
		reply = false
	end
	redirect "/localhost:8080"
	binding.pry

	erb :compare
end