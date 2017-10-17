require "time"
require_relative "lib.rb/time.rb"

time1 = Time.parse(gets.chop)
time2 = Time.parse(gets.chop)
p time1.sum(time2.to_sec)
