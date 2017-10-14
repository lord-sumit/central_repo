require_relative 'vehicle_superclass.rb'

class Bike < Vehicle
  attr_reader :dealer
  attr_accessor :percent_price_increase

  def initialize(name, price, *bike_dealer, percent_price_increase)
    @bike_dealer = bike_dealer.join(" ")
    self.percent_price_increase = percent_price_increase.to_i
    super(name, price.to_i)
  end

  def price_increase
    @price = percent_price_increase * @price / 100 + @price
  end

  def to_s
    puts super
    "dealer: #{@bike_dealer}"
  end

end

bike = Bike.new(*(gets.chop.split(/\s/)))
puts bike
bike.price_increase
puts "After #{bike.percent_price_increase} percent hike in price "
puts bike
